import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Header, Grid, Card, Label, Button, Select } from 'semantic-ui-react'

import {
	loadLists, loadDraft, loadSuggestedProducts,
} from '../actions';
import { ProductListDraft } from '../components/product-list'

function selectedListIdSelector(state) {
	let selectedListId = state.app.selectedListId;

	if (state.lists.opened) {
		const openedLists = Object.values(state.lists.opened);
		
		if (openedLists.length) {
			selectedListId = openedLists[0].id;
		}
	}

	return selectedListId;
}

const DraftsSection = () => {
	const openedLists = useSelector(state => state.lists.opened, _.isEqual);
	const products = useSelector(state => state.draft.products, _.isEqual);
	const suggestedProducts = useSelector(
		state => state.suggestedProducts, _.isEqual
	);
	const selectedListId = useSelector(selectedListIdSelector)
	//const options = Object.values(cities)
	//	.map(city => ({ key: city.id, value: city.id, text: city.name }));
	const dispatch = useDispatch();
	React.useEffect(
		() => {
			loadLists(dispatch);
			selectedListId && loadDraft(dispatch, selectedListId);
			loadSuggestedProducts(dispatch);
		}
	);

	console.log(openedLists)
	console.log(products)
	console.log(suggestedProducts)
	console.log(selectedListId)

	const openedListsAsOptions = Object.values(openedLists).map((list) => ({
		key: list.id,
		value: list.id,
		text: list.name,
	}))

	const draft = {
		products: Object.values(products),
		suggestedProducts: Array.from(suggestedProducts.values()),
	}

	return (
		<div className='app-content'>
			{ selectedListId &&
				<Select
					placeholder='Select a list'
					options={openedListsAsOptions}
					selected={selectedListId}
				/>
			}
			{ !selectedListId &&
				<Select placeholder='No lists available' disabled/>
			}
			{ selectedListId && <ProductListDraft {...draft} /> }
		</div>
		
	);
};

export default DraftsSection;
