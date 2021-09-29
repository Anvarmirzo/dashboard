import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './Layout.css';

import { Header, Sidebar } from '..';
import { Routes } from './../../routers/Routes';

export const Layout = () => {
	return (
		<BrowserRouter>
			<Route
				render={(props) => (
					<div className='layout'>
						<Sidebar {...props} />
						<div className='layout-content'>
							<Header />
							<div className='layout-content__main'>
								<Routes />
							</div>
						</div>
					</div>
				)}
			/>
		</BrowserRouter>
	);
};
