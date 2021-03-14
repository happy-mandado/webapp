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
				className={`menu-item ${draftsActiveItem}`}
				onClick={() => onItemClick(DRAFTS_SECTION)}
			>
				<i className={`inverted tasks icon ${draftsActiveItem}`}/>
				{ draftsActiveItem && <Selector />}
			</div>
			<div
				className={`menu-item ${listsActiveItem}`}
				onClick={() => onItemClick(LISTS_SECTION)}
			>
				<i className={`inverted shopping cart icon ${listsActiveItem}`}/>
				{ listsActiveItem && <Selector />}
			</div>
		</div>
	)
}

export default Menu;
