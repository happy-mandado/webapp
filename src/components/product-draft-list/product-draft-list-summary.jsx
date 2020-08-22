import React, { useCallback } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'

import './product-draft-list-summary.css';


const ProductDraftListSummary = (props) => {
	const {
		id,
		name,
		updatedAt,
		products,
		suggestions,
		handleSelection,
	} = props;
	const draft = { id, name, updatedAt, products, suggestions };

	const handleEditButtonClick = useCallback(
		() => handleSelection(draft),
		[id, name, updatedAt, products]
	)
	
	return (
		<Card>
			<Card.Content>
				<Card.Header>{ name }</Card.Header>
				<Card.Meta>{ updatedAt }</Card.Meta>
				<Card.Description>
					{ products.length } products
					<strong></strong>
					<Button
						animated='vertical'
						onClick={handleEditButtonClick}
					>
						<Button.Content hidden>
							Edit
						</Button.Content>
						<Button.Content visible>
							<Icon name='edit' />
						</Button.Content>
					</Button>
				</Card.Description>
			</Card.Content>
		</Card>
	);
};

export default ProductDraftListSummary;
