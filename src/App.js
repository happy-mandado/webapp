import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from 'semantic-ui-react'
import _ from 'lodash';

import { DRAFTS_SECTION, LISTS_SECTION } from './consts'
import { loadUser } from './actions';
import Header from './Header';
import DraftsSection from './sections/drafts-section';
import ListsSection from './sections/lists-section';
import Loading from './components/loading'
import './App.css'; 


function App({ userId }) {
	const user = useSelector(state => state.user, _.isEqual);
	const selectedSection = useSelector(store => store.app.section)
	const dispatch = useDispatch();

	React.useEffect(
		() => {
			userId && loadUser(dispatch, userId);
		}
	)

	const isDraftsSectionVisible = selectedSection === DRAFTS_SECTION
	const isListsSectionVisible = selectedSection === LISTS_SECTION

	return (
		<div className='app-container'>
			<Grid centered className='app-header-container'>
				<Grid.Column
					mobile={16}
					tablet={12}
					computer={10}
					className='app-header-wrapper'
				>
					<Header user={user} />
				</Grid.Column>
			</Grid>
			<Grid centered className='app-content-container'>
				<Grid.Column
					mobile={16}
					tablet={12}
					computer={10}
					className='app-content-wrapper'
				>
					{ !userId && <Loading /> }
					{ userId && isDraftsSectionVisible && <DraftsSection user={user} /> }
					{ userId && isListsSectionVisible && <ListsSection /> }
				</Grid.Column>
			</Grid>
			<Grid centered className='app-footer-container'>
				<Grid.Column
					mobile={16}
					tablet={12}
					computer={10}
					className='app-footer-wrapper'
				>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<span style={{ padding: '0 1em', font: '16px Lobster Two', color: '#5A5A4A' }}>Happy</span>
					<span role="img" aria-label="heart">💛</span>
					<span style={{ padding: '0 1em', font: '16px Lobster Two', color: '#5A5A5A' }}>Mandado</span>
					</div>
				</Grid.Column>
			</Grid>
		</div>
	);
}

export default App;
