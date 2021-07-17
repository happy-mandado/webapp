import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { Header, Button, Modal } from 'semantic-ui-react'

import {
	loadDraft, loadPurchasedProducts, addProductToDraft, removeProductFromDraft,
	createList, createDraft, selectProductInDraft, loadDraftProducts,
	unselectProductInDraft,
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
				onClick={async () => {
					createDraft(dispatch, user.id);
				}}
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
	const onProductSelection = (productName) => {
		return selectProductInDraft(dispatch, productName);
	};
	const onProductUnselection = (productName) => {
		return unselectProductInDraft(dispatch, productName);
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

	const products = [];
	const selectedProducts = [];

	for (const key in draft.products) {
		const product = draft.products[key];
		if (product.selected) {
			selectedProducts.push(product);
		}
		products.push(product);
	}

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
				products={products}
				onRemoval={onProductRemoval}
				onSelection={onProductSelection}
				onUnselection={onProductUnselection}
			/>
			<Modal
				size='tiny'
				open={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			>
				<Modal.Content>
					<p>You are about to close this list with {selectedProducts.length} items in it</p>
				</Modal.Content>
				<Modal.Actions>
					<Button
						onClick={() => setIsModalOpen(false)}
					>
						Back
					</Button>
					<Button
						className='confirm-button'
						onClick={() => createList(dispatch, user.id, draft.id, selectedProducts)}
					>
						Continue
					</Button>
				</Modal.Actions>
			</Modal>
		</>
	);
};

const DraftsSection = ({ user, isLoading, isVisible }) => {
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
	React.useEffect(() => {
		loadDraftProducts(dispatch, user.id, draft.id);
	}, [user.id, draft.id]);

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
