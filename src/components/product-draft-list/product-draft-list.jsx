import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Grid, Header, List, Checkbox } from 'semantic-ui-react'
import CreatableSelect from "react-select/creatable";
// import moment from 'moment';


import './product-draft-list.css'
// import { loadRequirements } from '../actions';
// import _ from 'lodash';

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};
const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center"
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

function ProductDraftList({ name, products }) {
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
		<Grid centered className='product-draft-list-container'>
			<Grid.Column
				mobile={16}
				tablet={11}
				computer={11}
				className='product-draft-list'
			>
				<CreatableSelect
					styles={{
						control: base => ({
							...base,
							borderTop: 0,
							borderRight: 0,
							borderLeft: 0,
							// This line disable the blue border
							boxShadow: 'none',
							borderRadius: 0,
							borderColor: 'hsl(0,0%,80%)',
							cursor: 'pointer',
							'&:hover': {
								border: 0,
							},
							'&:active': {
								border: 0,
							},
							'&:focus': {
								border: 0,
							},
						}),
    					dropdownIndicator: base => ({
							...base,
							display: 'none',
						}),
						indicatorSeparator: base => ({
							display: 'none',
						}),
						placeholdera: (base, state) => ({
							...base,
							display: state.isFocused ? 'none' : base.display,
						}),
					}}
					placeholder="Search a product..."
					options={[]}
					formatGroupLabel={formatGroupLabel}
					openMenuOnFocus={false}
					openMenuOnClick={false}
				/>

				<List selection verticalAlign='middle'>
					{
						products.map((product) => (
						<List.Item key={JSON.stringify(product)}>
							<List.Content>
								<Checkbox readOnly label={product.name} />
							</List.Content>
						</List.Item>
						))
					}
				</List>
			</Grid.Column>
			<Grid.Column
				mobile={16}
				tablet={11}
				computer={5}
				className='product-suggestion-list'
			>
				<span className='header'>
					<Header as='h3'>
						{name}
					</Header>
				</span>
				
			</Grid.Column>
		</Grid>
	)
}

export default ProductDraftList;
