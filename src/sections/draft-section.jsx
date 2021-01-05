import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Header, Grid, Card, Label, Button } from 'semantic-ui-react'

import { loadDrafts, selectDraft, loadSuggestions } from '../actions';
import { ProductDraftListSummary, ProductDraftList } from '../components/product-draft-list'


const DraftSection = () => {
	const drafts = useSelector(state => state.drafts, _.isEqual);
	const newDraft = useSelector(state => state.newDraft);
	const suggestions = useSelector(state => state.suggestions, _.isEqual);
	//const options = Object.values(cities)
	//	.map(city => ({ key: city.id, value: city.id, text: city.name }));
	const dispatch = useDispatch();
	React.useEffect(
		() => {
			loadDrafts(dispatch);
			loadSuggestions(dispatch);

		}
	)
	console.log(suggestions)
	console.log(drafts)
	console.log(newDraft)

	return (
		<div className='app-content'>
			{ !!Object.keys(drafts).length && !newDraft && <ProductDraftList {...drafts['draft-1']} suggestions={suggestions} /> }
			{ newDraft && <ProductDraftList /> }
		</div>
		
	);
};

export default DraftSection;
