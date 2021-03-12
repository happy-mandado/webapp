import React from 'react';

import './Menu.css'
import { DRAFTS_SECTION, LISTS_SECTION } from '../../consts'


const Selector = () => (
	<div className='selector'>
	</div>
)

function Menu({ activeItem, onItemClick }) {
	const listsActiveItem = activeItem === LISTS_SECTION ? 'active' : '';
	const draftsActiveItem = activeItem === DRAFTS_SECTION ? 'active' : '';
	
	return (
		<div className='menu'>
			<div
				className='menu-item product-draft-lists'
				onClick={() => onItemClick('drafts')}
			>
				<i className='inverted tasks icon'/>
				{ draftsActiveItem && <Selector />}
			</div>
			<div
				className='menu-item product-lists'
				onClick={() => onItemClick('lists')}
			>
				<i className='inverted shopping cart icon'/>
				{ listsActiveItem && <Selector />}
			</div>
		</div>
	)
}

export default Menu;
