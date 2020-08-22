import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Header, Grid, Card, Label, Button } from 'semantic-ui-react'

import { loadDrafts, selectDraft, loadSuggestions } from '../actions';
import { ProductDraftListSummary, ProductDraftList } from '../components/product-draft-list'


const DraftListSummaries = ({ drafts }) => {
	const dispatch = useDispatch();
	const handleSelection = (draft) => selectDraft(draft, dispatch);
	const summaries = Object.values(drafts).map((draft) => (
		<ProductDraftListSummary
			{...draft}
			key={JSON.stringify(draft)}
			handleSelection={handleSelection}
		/>
	))

	return (
		<Card.Group centered stackable style={{ paddingTop: '1em' }}>
			{ summaries }
		</Card.Group>
	)
}

const DraftsSection = () => {
	const drafts = useSelector(state => state.drafts, _.isEqual);
	const selectedDraft = useSelector(state => state.selectedDraft);
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

	return (
		<div className='app-content'>
			{ !selectedDraft && !newDraft && <DraftListSummaries drafts={drafts} /> }
			{ selectedDraft && !newDraft && <ProductDraftList {...selectedDraft} suggestions={suggestions} /> }
			{ !selectedDraft && newDraft && <ProductDraftList /> }
		</div>
		
	);
};

export default DraftsSection;
