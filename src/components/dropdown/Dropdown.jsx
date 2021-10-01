import React, { useState } from 'react';
import './Dropdown.css';

export const Dropdown = (props) => {
	const [isActive, setIsActive] = useState(false);
	const clickHandler = () => {
		setIsActive(!isActive);
	};
	return (
		<>
			<div
				onClick={() => setIsActive(!isActive)}
				className={`layer ${isActive ? 'active' : ''}`}
				aria-hidden='true'
			></div>
			<div className='dropdown'>
				<button className='dropdown-toggle' onClick={clickHandler}>
					{props.icon && <i className={props.icon}></i>}
					{props.badge && (
						<span className='dropdown-toggle__badge'>{props.badge}</span>
					)}
					{props.customToggle && props.customToggle()}
				</button>
				<div className={`dropdown-content ${isActive ? 'active' : ''}`}>
					{props.contentData &&
						props.renderItems &&
						props.contentData.map((item, index) =>
							props.renderItems(item, index),
						)}
					{props.renderFooter && (
						<div className='dropdown-footer'>{props.renderFooter()}</div>
					)}
				</div>
			</div>
		</>
	);
};
