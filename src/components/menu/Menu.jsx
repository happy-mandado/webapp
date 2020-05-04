import React from 'react';

import './Menu.css'

const Selector = () => (
	<div className='selector'>
	</div>
)

function Menu({ activeItem, onItemClick }) {
	const listsActiveItem = activeItem === 'lists' ? 'active' : '';
	const draftsActiveItem = activeItem === 'drafts' ? 'active' : '';
	
	return (
		<div className='menu'>
			<div
				className='menu-item product-lists'
				onClick={() => onItemClick('lists')}
			>
				<i className='inverted shopping cart icon'/>
				{ listsActiveItem && <Selector />}
			</div>
			<div
				className='menu-item product-draft-lists'
				onClick={() => onItemClick('drafts')}
			>
				<i className='inverted tasks icon'/>
				{ draftsActiveItem && <Selector />}
			</div>
		</div>
	)
}

export default Menu;
