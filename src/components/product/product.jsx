import React from 'react';
import { Checkbox, Icon } from 'semantic-ui-react'

import './product.css'


function Product(props) {
	const {
		id, name, selected, onClick, onRemoval, onSelection,
		onUnselection, active,
	} = props;

	const onCheckboxChange = (e, checkbox) => {
		if (checkbox.checked) {
			onSelection(checkbox.label);
		} else {
			onUnselection(checkbox.label);
		}
	};
	
	return (
		<div className='product' onClick={onClick}>
			<Checkbox
				label={name}
				onChange={onCheckboxChange}
				checked={selected}
			/>
			<div style={{ display: 'flex', marginRight: '1em' }} >
				{ active && <Icon name='trash' onClick={ () => onRemoval(id) }/> }
			</div>
		</div>
	)
}

export default Product;
