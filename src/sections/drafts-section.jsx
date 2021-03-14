import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import {
	Header, Grid, Card, Label, Button, Dropdown, Message, Modal,
} from 'semantic-ui-react'

import {
	loadDraft, loadPurchasedProducts, addProductToDraft, removeProductFromDraft,
	createList, createDraft,
} from '../actions';
import { ProductDraftList } from '../components/product-list'
import { SuggestionList } from '../components/suggestion-list'
import { ProductInput } from '../components/product'
import Loader from '../components/loader'
import Content from './content'
import './drafts-section.css'


const Empty = ({ user }) => {
	const dispatch = useDispatch();

	return (
		<div className='empty-product-draft-list'>
			<Header>
				You have no open lists
			</Header>
			<div>
			<Button
				onClick={() => createDraft(dispatch, user.id)}
			>
				Create a list
			</Button>
			</div>
		</div>
	);
};

const DraftListContainer = ({ user, draft, purchasedProducts }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const dispatch = useDispatch();
	const onProductCreation = (productName) => {
		const product = { name: productName };
		return addProductToDraft(dispatch, user.id, draft.id, product);
	};
	const onProductRemoval = (productId) => {
		return removeProductFromDraft(dispatch, user.id, draft.id, productId);
	};

	const productsAsOptions = [];
	for (const productName in purchasedProducts) {
		if (productName in draft.products) {
			continue
		}
		productsAsOptions.push({
			...purchasedProducts[productName],
			label: productName,
			value: purchasedProducts[productName].id,
		});
	}

	const productsAsList = Object.values(draft.products);

	return (
		<>
			<div className='product-draft-list-header'>
					<div>
						<Header as='h3'>
							{draft.name}
						</Header>
					</div>
					<Button
						className='buy-button' 
						size='tiny'
						icon='inverted shopping cart icon'
						onClick={() => setIsModalOpen(true)}
					/>
			</div>
			<ProductInput
				options={productsAsOptions}
				onCreation={onProductCreation}
			/>
			<ProductDraftList
				products={productsAsList}
				onRemoval={onProductRemoval}
			/>
			<Modal
				size='tiny'
				open={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			>
				<Modal.Content>
					<p>You are about to close this list with N items in it</p>
				</Modal.Content>
				<Modal.Actions>
					<Button
						onClick={() => setIsModalOpen(false)}
					>
						Back
					</Button>
					<Button
						className='confirm-button'
						onClick={() => createList(dispatch, user.id, draft.id, productsAsList)}
					>
						Continue
					</Button>
				</Modal.Actions>
			</Modal>
		</>
	);
};

const DraftsSection = ({ user, isLoading }) => {
	const draft = useSelector(state => state.draft, _.isEqual)
	const purchasedProducts = useSelector(
		state => state.user.purchasedProducts, _.isEqual
	);

	const dispatch = useDispatch();
	// TODO: Execute after every render when multiple drafts are supported
	// Multiple drafts mean that possible purchases occur while this draft
	// is being filled
	React.useEffect(() => {
		loadPurchasedProducts(dispatch, user.id);
	}, [user.id]);
	React.useEffect(() => {
		loadDraft(dispatch, user.id);
	}, [user.id]);

	if (isLoading) {
		return <Loader />
	}

	return (
		<div className='app-content'>
			{
				draft.id && <Content>
					<DraftListContainer
						user={user}
						draft={draft}
						purchasedProducts={purchasedProducts}
					/>
					<SuggestionList/>
				</Content>
			}
			{
				!draft.id && <Empty
					user={user} 
				/>
			}
		</div>
	);
};

export default DraftsSection;
