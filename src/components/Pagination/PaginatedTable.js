import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { ExportToExcel } from '../../helpers/ExportToExcel';
import common from '../../styles/AdminDasboard/AdminSummary.module.css';

const PaginatedTable = ({
	usersData = [],
	check,
	tProperties,
	header,
	pageLimit,
	dataLimit,
	moduleName,
}) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		check ? setData(usersData) : setData([]);
	}, [check, usersData]);
	// console.log(usersData)
	// console.log(data)
	const [pages, setPages] = useState(check ? Math.ceil(data.length / dataLimit) : 0);

	const [currentPage, setCurrentPage] = useState(1);
	
	useEffect(() => {
		const pages = data.length ? Math.ceil(data.length / dataLimit) : 0;
		setPages(pages);
	}, [data]);

	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		if (!searchTerm.length) {
			check && usersData.length ? setData(usersData) : setData([]);
		} else {
			const filtered = usersData.filter((record) => {
				return (
					record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					record.email.toLowerCase().includes(searchTerm.toLowerCase())
				);
			});
			setData(filtered);
			setCurrentPage(1);
		}
	}, [searchTerm]);

	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
	};

	// Methods
	const gotoNextPage = () => {
		currentPage === pages
			? setCurrentPage(pages)
			: setCurrentPage((prev) => {
					return prev + 1;
			  });
	};

	const gotoPreviousPage = () => {
		currentPage === 1 ? setCurrentPage(1) : setCurrentPage((prev) => prev - 1);
	};

	const changePage = (event) => {
		setCurrentPage(Number(event.target.innerText));
	};

	const getDataByPage = () => {
		const startIndex = currentPage * dataLimit - dataLimit;
		const endIndex = currentPage * dataLimit;
		const pageData = data.slice(startIndex, endIndex);
		return pageData;
	};

	const getPaginationGroup = () => {
		let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
		const pagesGroup = new Array(pageLimit).fill().map((_, index) => start + index + 1);
		return pagesGroup;
	};

	// Effect
	useEffect(() => {
		const tableHead = document.getElementById('theadReports');
		tableHead.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
	}, [currentPage]);

	return (
		<div className={common.TableWrapper}>
			<div className={common.TableExtras}>
				<div className={common.TableInputs}>
					<input type="search" value={searchTerm} placeholder="Search" onChange={handleSearch} />
					<ExportToExcel apiData={usersData} fileName={moduleName} />
				</div>
			</div>

			<Table className={common.Table} hover responsive>
				<thead id="theadReports">
					<tr>
						{header.map((n) => (
							<th key={n}> {n.split('_').join(' ')} </th>
						))}
					</tr>
				</thead>

				<tbody>
					{check &&
						getDataByPage().map((data) => {
							return (
								<tr key={data.id}>
									{tProperties
										? tProperties.map((prop) => <td key={data[prop]}>{data[prop]}</td>)
										: header.map((heading) => <td key={data[heading]}>{data[heading]}</td>)}
								</tr>
							);
						})}
				</tbody>
			</Table>
			<div className="pagination ">
				{/* previous button */}
				<button
					onClick={gotoPreviousPage}
					className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
				>
					prev
				</button>

				{/* show page numbers */}
				{getPaginationGroup().map((item, index) => (
					<button
						key={index}
						value={item}
						onClick={changePage}
						className={`paginationItem ${currentPage === item ? 'active' : null}`}
					>
						<span>{item}</span>
					</button>
				))}

				{/* next button */}
				<button
					onClick={gotoNextPage}
					className={`next ${currentPage === pages ? 'disabled' : ''}`}
				>
					next
				</button>
			</div>
		</div>
	);
};

export default PaginatedTable;
