import React from 'react';

import './Loader.css';


function Loader () {
	return (
		<div className='app-loader'>
			<img
				className='ui image medium centered'
				src='/loader.gif'
			/>
		</div>
	);
}

export default Loader;
