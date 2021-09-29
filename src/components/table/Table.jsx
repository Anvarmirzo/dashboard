import React from 'react';
import './Table.css';

export const Table = (props) => {
	return (
		<div className='table-wrapper'>
			<table>
				{props.headData && props.renderHead && (
					<thead>
						<tr>
							{props.headData.map((item, index) =>
								props.renderHead(item, index),
							)}
						</tr>
					</thead>
				)}
				{props.bodyData && props.renderBody && (
					<tbody>
						{props.bodyData.map((item, index) => props.renderBody(item, index))}
					</tbody>
				)}
			</table>
		</div>
	);
};
