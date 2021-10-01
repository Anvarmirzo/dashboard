import React from 'react';
import { Table } from './../components';
import customersList from '../assets/JsonData/customers-list.json';

const customersTableHead = [
	'',
	'name',
	'email',
	'phone',
	'total orders',
	'total spend',
	'location',
];

const renderHead = (item, index) => <th key={index}>{item}</th>;
const renderBody = (item, index) => (
	<tr key={index}>
		<td>{item.id}</td>
		<td>{item.name}</td>
		<td>{item.email}</td>
		<td>{item.phone}</td>
		<td>{item.total_orders}</td>
		<td>{item.total_spend}</td>
		<td>{item.location}</td>
	</tr>
);

export const Customers = () => {
	return (
		<div>
			<h2 className='page__title'>customers</h2>
			<div className='row'>
				<div className='col-12'>
					<div className='card'>
						<div className='card-body'>
							<Table
								limit='10'
								headData={customersTableHead}
								renderHead={(item, index) => renderHead(item, index)}
								bodyData={customersList}
								renderBody={(item, index) => renderBody(item, index)}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
