import React, { useEffect, useState } from 'react';
// import SummaryHeader from './SummaryHeader';
import classes from '../../styles/AdminSummary.module.css';
import globals from '../../styles/common.module.css';
// import SummaryChart from './SummaryChart';
import { Spinner, Table } from 'react-bootstrap';
// import PaginatedTable from '../Pagination/PaginatedTable';
// import { Config } from '../../Config/Config';
// import { axiosFetcher } from '../../DataFetching/axiosFetcher';
// import { useFetchProgramSummary, useFetchUserSummary } from '../../DataFetching/fetch';
// import Loader from '../Loader/Loader';
import PaginationButtons from '../PaginationButtons/PaginationButtons';
import toast from "react-hot-toast";
import axios from "axios";
import { Config } from '../../Config/Config'
const SearchAdult = () => {

	const [loading, setLoading] = useState(false);
	const [data, setData] = useState({});
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');
	const [type, setType] = useState('adult');


	useEffect(() => {
		// get User info 
		const UserInfo = JSON.parse(sessionStorage.getItem("sfAdmin"));
		// get token from User info here
		const token = UserInfo.data.token;
		// config here for axios authorization
		// console.log(token)
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		setLoading(true);

		axios
		.post(`${Config.url.API_URL}/admin/search-users-data?page=${page}`, {

			search_param: searchTerm,
			type: type,
		}, config)
			.then((res) => {
				if (res.data?.error?.length) throw new Error(res.data.error[0]);

				setData(res.data);
				setLoading(false);
				setLastPage(res.data?.data.message?.last_Page)
				// console.log(res.data, "data")
			})
			.catch((err) => {
				const errMsg = err?.message || "Failed to Load !";
				// toast.error(errMsg);
			});



	}, [searchTerm, page]);


	// const [searchTerm, setSearchTerm] = useState('');

// <input
// 									type="search"
// 									placeholder="Search"
// 									onChange={(e) => setSearchTerm(e.target.value)}
// 								/>

	const header = [
		
		'name',
		'email',
		'phone',
		'number_of_children',
	];
	const tProperties = [
		'user_id',
		'age_range',
		'name',
		'gender',
		'age',
		'unique_id',
	];
	// TODAYYY

	// const adminInfo =
	// 	typeof sessionStorage !== undefined
	// 		? JSON.parse(sessionStorage.getItem('cpAdmin'))
	// 		: { token: '' };

	// const params = { token: adminInfo.token };

	// const [page, setPage] = useState(1);
	// const [searchTerm, setSearchTerm] = useState('');

	// const {
	// 	data: programSummaryData,
	// 	status: programSummaryStatus,
	// 	error: programSummaryError,
	// } = useFetchProgramSummary();

	// const {
	// 	data: userSummaryData,
	// 	status: userSummaryStatus,
	// 	error: userSummaryError,
	// 	isFetching: userSummaryFetching,
	// } = useFetchUserSummary(page, searchTerm);

	// console.log(userSummaryData);

	// useEffect(() => {
	// 	async function getProgramSummary() {
	// 		const [data, error] = await axiosFetcher(
	// 			`${Config.url.API_URL}/admin/program-summary`,
	// 			params,
	// 			'POST'
	// 		);
	// 		setProgramSummary({ data, error });
	// 	}

	// 	async function getUserSummary() {
	// 		const [data, error] = await axiosFetcher(
	// 			`${Config.url.API_URL}/admin/user-summary`,
	// 			params,
	// 			'POST'
	// 		);

	// 		setUserSummary({ data: data.table, error });
	// 	}

	// 	getProgramSummary();
	// 	getUserSummary();
	// }, []);

	return (
		<section className={classes.SummarySection}>
			
			<h2>Children Summary</h2>
			<h2  style={{ fontSize: '16px' }}>
			{' '}
			Count: {data?.message?.total}
		</h2>

<div className={classes.TableWrapper}>
<div className={classes.TableExtras}>
	<div className={classes.TableInputs}> 
		   <input
			   type="search"
			   placeholder="Search"
			   onChange={(e) => setSearchTerm(e.target.value)}
		   />
</div>
</div>
</div>

			<Table hover responsive className={classes.Table}>
			<thead>
				<tr>
					{header.map((n) => (
						<th key={n}> {n.split('_').join(' ')} </th>
					))}
				</tr>
			</thead>
			<tbody>
				{data?.message?.data?.map((user) => (
					<tr key={user.phone}>
						{header.map((key) => (
							<td key={user[key]}>{user[key]}</td>
						))}
					</tr>
				))}
				{/* {loading === true && <Spinner size="sm" animation="border" />} */}


			</tbody>

		</Table>

			{/* {console.log(data2?.adults[0].email, "data2")} */}
			{/* <h1>{data2?.adults[1].email}</h1> */}
			{/* 			
			 <div className={classes.AdminCourseSummary}>
				
				<div className={classes.CourseSummaryContent}>
					<h3>Course 1 Summary</h3>
					<SummaryChart />
					<h5 className={classes.TableMarker}>User Summary</h5>
					<div className={classes.TableMarkerDiv}>
						<h4 className={classes.TableHeadText}>User Summary </h4>
						<h4 className={classes.TableHeadText} style={{ fontSize: '16px' }}>
							{' '}
							Count: {5}
						</h4>
					</div>
					 <div className={classes.TableWrapper}>
						<div className={classes.TableExtras}>
							<div className={classes.TableInputs}> */}
			{/* <input
									type="search"
									placeholder="Search"
									 onChange={(e) => setSearchTerm(e.target.value)}
								/> */}
			{/* {loading2 === true && <Spinner size="sm" animation="border" />} */}
			{/* <button className={classes.AddUsersButton} onClick={() => console.log('ello')}>
									Export to CSV
								</button>
							</div>

							<div className={classes.TableInputs}></div> 
						 </div> 
						<Table hover responsive className={classes.Table}>
							<thead>
								<tr>
									{header.map((n) => (
										<th key={n}> {n.split('_').join(' ')} </th>
									))}
								</tr>
							</thead>
							<tbody>
								{data2?.adults &&
									data2?.adults.map((user, index) => (
										<tr key={index}>
											{header.map((key) => (
												<td key={user[key]}>{user[key]}</td>
											))}
										</tr>
									))} */}
			{/* {loading2 === true && <Loader />} */}
			{/* {loading2 === true && } */}

			{/* </tbody> */}
			{/* </Table> */}
			<PaginationButtons
				setPage={setPage}
				lastPage={data?.message?.last_page}
				currentPage={data?.message?.current_page}
			/>
			{console.log(searchTerm, "page")}
			{console.log(data, "lastpage")}
			{console.log(data?.message?.current_page, "currentpage")}




			{/* Paginated Table div */}
			{/* <PaginatedTable
							usersData={userSummary.data}
							check={userSummary.data !== null}
							header={header}
							tProperties={tProperties}
							dataLimit={10}
							pageLimit={5}
						/> */}

			{/* </div>
			</div> 
			</div>  */}
		</section>
	);
};

export default SearchAdult;
