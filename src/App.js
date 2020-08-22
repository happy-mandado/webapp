import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from 'semantic-ui-react'
import _ from 'lodash';

import { loadUser } from './actions';
import Header from './Header';
import DraftsSection from './sections/drafts-section';
import ListsSection from './sections/lists-section';
import './App.css'; 


function App({ userId }) {
	const isDraftsSectionVisible = useSelector(
		store => store.selectedSection === 'drafts'
	)
	const isListsSectionVisible = useSelector(
		store => store.selectedSection === 'lists'
	)
	const user = useSelector(state => state.user, _.isEqual);
	const dispatch = useDispatch();

	React.useEffect(
		() => { loadUser(dispatch, userId) }
	)

	return (
		<div className='app-container'>
			<Grid centered className='app-header-container'>
				<Grid.Column
					mobile={16}
					tablet={12}
					computer={10}
					className='app-header-wrapper'
				>
					<Header />
				</Grid.Column>
			</Grid>
			<Grid centered className='app-content-container'>
				<Grid.Column
					mobile={16}
					tablet={12}
					computer={10}
					className='app-content-wrapper'
				>
					{ isDraftsSectionVisible && <DraftsSection />}
					{ isListsSectionVisible && <ListsSection />}
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
					<span style={{ padding: '0 1em' }}>Happy</span>
					<span style={{ padding: '0 1em' }}ole="img" aria-label="heart">💛</span>
					<span style={{ padding: '0 1em' }}>Mandado</span>
					</div>
				</Grid.Column>
			</Grid>
		</div>
  );
}

export default App;
