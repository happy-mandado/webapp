import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Grid } from 'semantic-ui-react'
// import moment from 'moment';


import './product-list.css'
// import { loadRequirements } from '../actions';
// import _ from 'lodash';


// const getMapLink = ({latitude, longitude}) => {
// 	return `https://maps.google.com/?q=${latitude},${longitude}`;
// }

function ProductList() {
	/*
	const venues = useSelector(
		state => state.selectedState.selectedCity.venues, _.isEqual
	);
	const requirements = useSelector(
		state => state.selectedState.selectedCity.selectedVenue.requirements,
		_.isEqual
	);
	const dispatch = useDispatch();

	React.useEffect(
		() => { loadRequirements(venues, dispatch) }
	)
	*/

	return (
		<Grid centered className='products-draft-list-container'>
			<Grid.Column
				mobile={16}
				tablet={11}
				computer={11}
				className='product-draft-list'
			>
			</Grid.Column>
			<Grid.Column
				mobile={16}
				tablet={11}
				computer={5}
				className='product-suggestion-list'
			>
			</Grid.Column>
		</Grid>
	)
}

export default ProductList;
