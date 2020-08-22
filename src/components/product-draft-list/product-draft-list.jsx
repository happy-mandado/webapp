import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Grid, Header, List, Button } from 'semantic-ui-react'
// import moment from 'moment';

import Product from '../product'
import ProductSuggestion from '../product-suggestion'
import ProductInput from '../product-input'
import './product-draft-list.css'


const ProductList = ({ products }) => {
	const [selectedProduct, setSelectedProduct] = useState({})

	return products.map((product) => (
		<List.Item key={JSON.stringify(product)} >
			<List.Content>
				<Product
					{...product}
					selected={product.id === selectedProduct.id}
					onClick={() => setSelectedProduct(product)}
				/>
			</List.Content>
	  	</List.Item>
	))
}

const SuggestionList = ({ suggestions }) => {
	const [selectedSuggestion, setSelectedSuggestion] = useState({})

	return Array.from(suggestions.values(), (suggestion) => (
		<List.Item key={JSON.stringify(suggestion)} >
			<List.Content>
				<ProductSuggestion
					{...suggestion}
					selected={suggestion.id === selectedSuggestion.id}
					onClick={() => setSelectedSuggestion(suggestion)}
				/>
			</List.Content>
		</List.Item>
	))
}

function ProductDraftList({ name, products, suggestions }) {
	return (
		<Grid centered className='product-draft-list-container'>
			<Grid.Column
				mobile={16}
				tablet={16}
				computer={16}
				className='product-draft-list-header'
			>
				<div>
					<Header as='h3'>
						{name}
					</Header>
				</div>
				<div>
					<Button className='buy-button' size='tiny' icon='inverted shopping cart icon'/>
				</div>
			</Grid.Column>
			<Grid.Column mobile={16} tablet={10} computer={10}>
				<ProductInput />
				<List
					selection
					className='product-draft-list'
					verticalAlign='middle'
				>
					<ProductList products={products} />
				</List>
			</Grid.Column>
			<Grid.Column mobile={16} tablet={6} computer={6}>
				<List
					selection
					className='product-suggestion-list'
					verticalAlign='middle'
				  >
					<SuggestionList suggestions={suggestions} />
				</List>
			</Grid.Column>
		</Grid>
	)
}

export default ProductDraftList;
