import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Feed, Message } from 'semantic-ui-react'

import { loadLists } from '../actions';
import './lists-section.css';

const ProductLists = ({lists}) => {
	return (
		<Feed>
			{
				Object.values(lists).map(({product, name}) => (
					<Feed.Event>
						<Feed.Label image='walmart-icon.png' />
						<Feed.Content>
							<Feed.Date>1 Hour Ago</Feed.Date>
							<Feed.Summary>
								{name}
							</Feed.Summary>
						</Feed.Content>
					</Feed.Event>
				))
			}
		</Feed>
	);
};

const EmptySectionMessage = () => {
	return (
		<Message>
			You have not purchased anything yet :(
		</Message>
	);
};

const ListsSection = () => {
	const lists = useSelector(state => state.lists, _.isEqual);
	// const selectedDraft = useSelector(state => state.selectedDraft);
	//const options = Object.values(cities)
	//	.map(city => ({ key: city.id, value: city.id, text: city.name }));
	const dispatch = useDispatch();
	React.useEffect(
		() => loadLists(dispatch)
	)
	console.log('lists')

	return (
		<div className='app-content'>
			{ lists.length && <ProductLists lists={lists} /> }
			{ !lists.length && <EmptySectionMessage /> }
		</div>
	);
};

export default ListsSection;
