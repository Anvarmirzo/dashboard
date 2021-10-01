import React from 'react';
import './Sidebar.css';
import logo from '../../assets/images/react.png';
import sidebar_items from '../../assets/JsonData/sidebar_routes.json';
import { Link } from 'react-router-dom';

const SidebarItem = (props) => {
	const active = props.active ? 'active' : '';
	return (
		<div className='sidebar-item'>
			<div className={`sidebar-item__inner ${active}`}>
				<i className={props.icon}></i>
				<span>{props.title}</span>
			</div>
		</div>
	);
};

export const Sidebar = (props) => {
	const activeItem = sidebar_items.findIndex(
		(item) => item.route === props.location.pathname,
	);
	return (
		<aside className='sidebar'>
			<div className='sidebar-logo'>
				<img height='45px' src={logo} alt='Logo' />
			</div>
			<ul>
				{sidebar_items.map((item, index) => (
					<li key={index}>
						<Link to={item.route}>
							<SidebarItem
								title={item.display_name}
								icon={item.icon}
								active={index === activeItem}
							/>
						</Link>
					</li>
				))}
			</ul>
		</aside>
	);
};
