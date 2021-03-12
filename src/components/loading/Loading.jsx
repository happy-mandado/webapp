import React from 'react';

function Loading () {
	return (
		<div className='content' style={{ padding: '15% '}}>
			<img className='ui image tiny centered' src='/progress-circle.gif' />
		</div>
	);
}

export default Loading;
