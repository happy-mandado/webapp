import React, { useState } from 'react';
import { Label, Checkbox } from 'semantic-ui-react'

import './product.css'


const Status = ({ overdue, early, onTime }) => {
	if (overdue) {
		return (
			<span className='meta'>Overdue by {overdue}</span>
		)
	}

	if (early) {
		return (
			<span className='meta'>Overdue by {early}</span>
		)
	}

	if (onTime) {
		return (
			<span className='meta'>OnTime</span>
		)
	}

	return <></>
}

function Product(props) {
	const {
		id,
		name,
		selected,
		onClick,
		overdue,
		early,
		onTime,
	} = props

	let className = null
	className = className || overdue && 'overdue'
	className = className || early && 'early'
	className = className || onTime && 'on-time'
	

	return (
		<div className='product' onClick={onClick}>
			<Checkbox label={name} className={className}/>
			<div style={{ display: 'flex', marginRight: '1em' }} >
				{ selected && <Status overdue={overdue} early={early} onTime={onTime} /> }
			</div>
		</div>
	)
}

export default Product;
