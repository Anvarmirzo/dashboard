import React from 'react';

import './Header.css';

export const Header = () => {
	return (
		<header className='header'>
			<div className='header-search'>
				<input type='text' placeholder='Search here' />
				<i className='bx bx-search'></i>
			</div>
			<div className='header-end'>
				<div className='header-end__item'></div>
				<div className='header-end__item'></div>
				<div className='header-end__item'></div>
			</div>
		</header>
	);
};
