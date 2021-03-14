import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from 'semantic-ui-react'
import _ from 'lodash';

import { DRAFTS_SECTION, LISTS_SECTION } from './consts'
import { loadUser } from './actions';
import Header from './Header';
import Footer from './Footer';
import DraftsSection from './sections/drafts-section';
import ListsSection from './sections/lists-section';
import Loader from './components/loader'
import './App.css'; 


function App({ userId }) {
	const user = useSelector(state => state.user, _.isEqual);
	const isLoading = useSelector(state => state.app.isLoading);
	const selectedSection = useSelector(store => store.app.section, _.isEqual)
	const dispatch = useDispatch();

	React.useEffect(() => {
			loadUser(dispatch, userId);
	}, [user.id])

	const isDraftsSectionVisible = !isLoading && selectedSection.id === DRAFTS_SECTION
	const isListsSectionVisible = !isLoading && selectedSection.id === LISTS_SECTION

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
					{ isLoading && <Loader /> }
					{
						isDraftsSectionVisible && <DraftsSection
							user={user}
							isLoading={selectedSection.isLoading}
						/>
					}
					{
						isListsSectionVisible && <ListsSection
							user={user}
							isLoading={selectedSection.isLoading}
						/>
					}
				</Grid.Column>
			</Grid>
			<Grid centered className='app-footer-container'>
				<Grid.Column
					mobile={16}
					tablet={12}
					computer={10}
					className='app-footer-wrapper'
				>
					<Footer />
				</Grid.Column>
			</Grid>
		</div>
	);
}

export default App;
