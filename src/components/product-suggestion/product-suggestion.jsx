import React, { useState } from 'react';
import { Button, Label } from 'semantic-ui-react'

import './product-suggestion.css'


const Status = ({ overdue, early, onTime }) => {
	if (overdue) {
		return (
			<Label style={{ background: '#f97575', color: 'white', margin: 0 }} horizontal>
				{ overdue }
			</Label>
		)
	}

	if (early) {
		return (
			<Label style={{ background: 'rgb(117, 225, 249)', margin: 0}} horizontal>
				{ early }
			</Label>
		)
	}

	if (onTime) {
		return (
			<Label style={{ background: 'rgb(137, 230, 161)', margin: 0 }} horizontal>
				{ onTime }
			</Label>
		)
	}

	return <></>
}

function ProductSuggestion(props) {
	const {
		id,
		name,
		early,
		onTime,
		overdue,
		onClick,
		selected,
	} = props;

	return (
		<div className='product-suggestion' onClick={onClick}>
			<div>
				<span>{name} </span>
			</div>
			<div>
				{ !selected && <Status overdue={overdue && 'overdue'} early={early && 'early'} onTime={onTime && 'onTime'} /> }
				{ selected && <Status overdue={overdue} early={early} onTime={onTime} /> }
	   		</div>
		</div>
	)
}

export default ProductSuggestion;
