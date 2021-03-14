import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Grid, Header, List, Button } from 'semantic-ui-react'
// import moment from 'moment';

import Product from '../product'
import './product-draft-list.css'


function ProductDraftList({ products=[], onRemoval, onSelection, onUnselection }) {
	const [activeProduct, setActiveProduct] = useState({})

	return (
		<>
			<List
				selection
				className='product-draft-list'
				verticalAlign='middle'
			>
				{
					products.map((product) => (
						<List.Item key={JSON.stringify(product)} >
							<List.Content>
								<Product
									{...product}
									active={product.id === activeProduct.id}
									onClick={() => setActiveProduct(product)}
									onRemoval={onRemoval}
									onSelection={onSelection}
									onUnselection={onUnselection}
								/>
							</List.Content>
						</List.Item>
					))
				}
			</List>
		</>
	)
}

export default ProductDraftList;
