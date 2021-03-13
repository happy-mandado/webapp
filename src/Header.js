import React from 'react';
import { Grid, Button, Image, Icon, Dropdown, Menu } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';

import { selectSection } from './actions'
import LocalMenu from './components/menu'
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
				<LocalMenu
					activeItem={selectedSection}
					onItemClick={(section) => selectSection(section, dispatch)}
				/>
			</Grid.Column>
			<Grid.Column mobile={8} tablet={8} computer={8}>
				<Menu compact className='hm-avatar'>
					<Image
						circular
						as='div'
						size='mini'
						src={avatarImagePath}
					/>
					<Dropdown className='link item'>
						<Dropdown.Menu>
							<Dropdown.Item
								href={process.env.REACT_APP_LOGOUT_URL}
							>
								<Icon name='log out' />
								Log out
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Menu>
			</Grid.Column>
		</Grid>
	)
}

export default Header;
