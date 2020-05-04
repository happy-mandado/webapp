import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Feed, Header } from 'semantic-ui-react'

import { loadLists } from '../actions';
import { ProductListSummary } from '../components/product-list'

const ListsSection = () => {
	const lists = useSelector(state => state.lists, _.isEqual);
	const selectedDraft = useSelector(state => state.selectedDraft);
	//const options = Object.values(cities)
	//	.map(city => ({ key: city.id, value: city.id, text: city.name }));
	const dispatch = useDispatch();
	React.useEffect(
		() => loadLists(dispatch)
	)
	console.log('lists')

	return (
		<div className='app-content'>
			<Feed>
				{
					Object.values(lists).map((list) => (
						<ProductListSummary {...list} />
					))
				}
			</Feed>
		</div>
	);
};

export default ListsSection;
