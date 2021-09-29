import React from 'react';
import './Header.css';
import notifications from '../../assets/JsonData/notification.json';
import userMenu from '../../assets/JsonData/user_menus.json';
import userImg from '../../assets/images/user.svg';

import { Link } from 'react-router-dom';
import { Dropdown } from '../dropdown/Dropdown';

const currUser = {
	displayName: 'Anvar Ahmadjanov',
	photo: userImg,
};

const renderUserToggle = (user) => (
	<div className='header-user'>
		<div className='header-user__img'>
			<img src={user.photo} width='40px' height='40px' alt={user.displayName} />
		</div>
		<div className='header-user__name'>{user.displayName}</div>
	</div>
);

const renderNotificationItems = (item, index) => (
	<div className='notification-item' key={index}>
		<i className={item.icon}></i>
		<span>{item.content}</span>
	</div>
);

const renderUserMenu = (item, index) => (
	<Link to='/' key={index}>
		<div className='notification-item'>
			<i className={item.icon}></i>
			<span>{item.content}</span>
		</div>
	</Link>
);

export const Header = () => {
	return (
		<header className='header'>
			<div className='header-search'>
				<input type='text' placeholder='Search here' />
				<i className='bx bx-search'></i>
			</div>
			<div className='header-end'>
				<div className='header-end__item'>
					<Dropdown
						customToggle={() => renderUserToggle(currUser)}
						contentData={userMenu}
						renderItems={(item, index) => renderUserMenu(item, index)}
					/>
				</div>
				<div className='header-end__item'>
					<Dropdown
						icon='bx bx-bell'
						badge='12'
						contentData={notifications}
						renderItems={(item, index) => renderNotificationItems(item, index)}
						renderFooter={() => <Link to='/'>View All</Link>}
					/>
				</div>
				<div className='header-end__item'>
					<Dropdown />
				</div>
			</div>
		</header>
	);
};
