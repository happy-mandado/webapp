import React from 'react';
import { Grid, Button, Image } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';

import { selectSection } from './actions'
import Menu from './components/menu'
import './Header.css'


const defaultAvatarImagePath = '/default-avatar.png';

function Header({ user }) {
	const avatarImagePath = user.picture || defaultAvatarImagePath;
	const selectedSection = useSelector(store => store.app.section)
	const dispatch = useDispatch();

	return (
		<Grid className='app-header'>
			<Grid.Column
				mobile={8}
				tablet={8}
				computer={8}
			>
				<Menu
					activeItem={selectedSection}
					onItemClick={(section) => selectSection(section, dispatch)}
				/>
			</Grid.Column>
			<Grid.Column mobile={8} tablet={8} computer={8}>
				<Image
					circular
					as='div'
					size='mini'
					src={avatarImagePath}
					className='hm-avatar'
				/>
			</Grid.Column>
		</Grid>
	)
}

export default Header;
