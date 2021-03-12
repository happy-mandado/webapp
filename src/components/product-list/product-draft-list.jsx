import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Grid, Header, List, Button } from 'semantic-ui-react'
// import moment from 'moment';

import Product from '../product'
import './product-draft-list.css'


function ProductDraftList({ products=[], onRemoval }) {
	const [selectedProduct, setSelectedProduct] = useState({})

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
									selected={product.id === selectedProduct.id}
									onClick={() => setSelectedProduct(product)}
									onRemoval={onRemoval}
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
