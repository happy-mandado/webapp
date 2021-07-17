import React from 'react';

import './Loader.css';


function Loader () {
	return (
		<div className='app-loader'>
			<img
				alt="loading"
				className='ui image medium centered'
				src='/loader.gif'
			/>
		</div>
	);
}

export default Loader;
