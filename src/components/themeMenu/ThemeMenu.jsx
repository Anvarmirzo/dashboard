import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	setColorAction,
	setThemeAction,
} from '../../redux/actions/themeAction';
import './ThemeMenu.css';

const modeSettings = [
	{
		id: 'light',
		name: 'Light',
		background: 'light-background',
		class: 'theme-mode-light',
	},
	{
		id: 'dark',
		name: 'Dark',
		background: 'dark-background',
		class: 'theme-mode-dark',
	},
];
const colorSettings = [
	{
		id: 'blue',
		name: 'Blue',
		background: 'blue-color',
		class: 'theme-color-blue',
	},
	{
		id: 'red',
		name: 'Red',
		background: 'red-color',
		class: 'theme-color-red',
	},
	{
		id: 'cyan',
		name: 'Cyan',
		background: 'cyan-color',
		class: 'theme-color-cyan',
	},
	{
		id: 'green',
		name: 'Green',
		background: 'green-color',
		class: 'theme-color-green',
	},
	{
		id: 'orange',
		name: 'Orange',
		background: 'orange-color',
		class: 'theme-color-orange',
	},
];

export const ThemeMenu = () => {
	const [isOpened, setIsOpened] = useState(false);
	const [currMode, setCurrMode] = useState('light');
	const [currColor, setCurrColor] = useState('blue');

	const dispatch = useDispatch();

	const setMode = (mode) => {
		setCurrMode(mode.id);
		localStorage.setItem('themeMode', mode.class);
		dispatch(setThemeAction(mode.class));
	};
	const setColor = (color) => {
		setCurrColor(color.id);
		localStorage.setItem('colorMode', color.class);
		dispatch(setColorAction(color.class));
	};
	return (
		<>
			<button
				className='dropdown-toggle'
				onClick={() => setIsOpened(!isOpened)}
				type='button'
			>
				<i className='bx bx-palette'></i>
			</button>
			<div className={`theme-menu ${isOpened ? 'active' : ''}`}>
				<h4>Theme settings</h4>
				<button
					className='theme-menu__close'
					onClick={() => setIsOpened(false)}
					type='button'
				>
					<i className='bx bx-x'></i>
				</button>
				<div className='theme-menu__select'>
					<span>Choose mode</span>
					<ul className='mode-list'>
						{modeSettings.map((item, index) => (
							<li key={index}>
								<button onClick={() => setMode(item)} type='button'>
									<div
										className={`mode-list__color ${item.background} ${
											item.id === currMode ? 'active' : ''
										}`}
									>
										<i className='bx bx-check'></i>
									</div>
									<span>{item.name}</span>
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className='theme-menu__select'>
					<span>Choose color</span>
					<ul className='mode-list'>
						{colorSettings.map((item, index) => (
							<li key={index}>
								<button onClick={() => setColor(item)} type='button'>
									<div
										className={`mode-list__color ${item.background} ${
											item.id === currColor ? 'active' : ''
										}`}
									>
										<i className='bx bx-check'></i>
									</div>
									<span>{item.name}</span>
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};
