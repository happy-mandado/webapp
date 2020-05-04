import React from 'react';
import { Icon, Feed } from 'semantic-ui-react'

import './product-list-summary.css';

const ProductListSummary = ({name, products}) => {

	return (
		<Feed.Event>
			<Feed.Label image='walmart-icon.png' />
			<Feed.Content>
				<Feed.Date>1 Hour Ago</Feed.Date>
				<Feed.Summary>
					{name}
				</Feed.Summary>
			</Feed.Content>
		</Feed.Event>
	);
};

export default ProductListSummary;
