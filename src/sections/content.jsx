import React from 'react';
import { Grid } from 'semantic-ui-react'

import './content.css'

const Content = ({ children }) => {
	return (
		<Grid centered className='section-content'>
			<Grid.Column mobile={16} tablet={10} computer={10} className='main-content'>
				{ children[0] }
			</Grid.Column>
			<Grid.Column tablet={6} computer={6} only='tablet computer' className='side-content'>
				{ children[1] }
			</Grid.Column>
		</Grid>
	)
};

export default Content;
