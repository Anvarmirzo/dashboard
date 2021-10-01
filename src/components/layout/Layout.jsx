import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Routes } from './../../routers/Routes';
import './Layout.css';

import { Header, Sidebar } from '..';
import {
	setColorAction,
	setThemeAction,
} from '../../redux/actions/themeAction';

export const Layout = () => {
	const theme = useSelector(({ theme }) => theme);
	const dispatch = useDispatch();

	useEffect(() => {
		const getColor = localStorage.getItem('colorMode');
		const getTheme = localStorage.getItem('themeMode');
		dispatch(setColorAction(getColor));
		dispatch(setThemeAction(getTheme));
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Route
				render={(props) => (
					<div className={`layout ${theme.mode} ${theme.color}`}>
						<Sidebar {...props} />
						<div className='layout-content'>
							<Header />
							<main className='layout-content__main'>
								<Routes />
							</main>
						</div>
					</div>
				)}
			/>
		</BrowserRouter>
	);
};
