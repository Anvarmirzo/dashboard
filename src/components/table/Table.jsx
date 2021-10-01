import React, { useState } from 'react';
import './Table.css';

export const Table = (props) => {
	const initialDataShow =
		props.limit && props.bodyData
			? props.bodyData.slice(0, Number(props.limit))
			: props.bodyData;
	const [dataShow, setDataShow] = useState(initialDataShow);
	let pages = 1;
	let range = [];
	if (!!props.limit) {
		let page = Math.floor(props.bodyData.length / Number(props.limit));
		pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1;
		range = [...Array(pages).keys()];
	}

	const [currPage, setCurrPage] = useState(0);

	const setCurrentPage = (page) => {
		const start = Number(props.limit) * page;
		const end = start + Number(props.limit);
		setDataShow(props.bodyData.slice(start, end));
		setCurrPage(page);
	};

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
						{dataShow.map((item, index) => props.renderBody(item, index))}
					</tbody>
				)}
			</table>
			{pages > 1 ? (
				<ul className='table-pagination'>
					{range.map((item, index) => (
						<li className='table-pagination__item' key={index}>
							<button
								className={`table-pagination__btn ${
									currPage === index && 'active'
								}`}
								onClick={() => setCurrentPage(index)}
							>
								{item + 1}
							</button>
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
};
