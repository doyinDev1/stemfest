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
// import PaginationButtons from '../PaginationButtons/PaginationButtons';
import toast from "react-hot-toast";
import axios from "axios";
import { Config } from '../../Config/Config'
import QRCode from '../QRCode/QRCode';
const QRPage = () => {

	const [loading, setLoading] = useState(false);
	const [data, setData] = useState({});


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
		  .get(`${Config.url.API_URL}/admin/scanned-qr-codes`, config)
		  .then((res) => {
			if (res.data?.error?.length) throw new Error(res.data.error[0]);
	
			setData(res.data);
			setLoading(false);
			console.log(res.data, "data")
		  })
		  .catch((err) => {
			const errMsg = err?.message || "Failed to Load !";
			toast.error(errMsg);
			console.log(err, "err")

		  });

		 

	  }, []);

	




	const header = [
		'employee_id',
		'name',
		'email',
		'course_completed',
		'location',
		'grade',
		// 'gender',
		// 'division',
	];
	const tProperties = [
		'employee_id',
		'name',
		'grade',
		'course_completed',
		'gender',
		'location',
		'division',
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
			<h2>QR Codes Summary</h2>
			<QRCode
				data={data}
				error={''}
				status={loading}
			/>
			{console.log(data, "qr")}
			{/* <div className={classes.AdminCourseSummary}> */}
				{/* <div className={globals.InputField}>
					<label htmlFor="select-course">Select Course</label>
					<select name="select-course" id="select-course">
						<option value="Course 1">Course 1</option>
						<option value="Course 2">Course 2</option>
						<option value="Course 3" disabled>
							Course 3
						</option>
						<option value="Course 4" disabled>
							Course 4
						</option>
					</select>
				</div> */}
				{/* <div className={classes.CourseSummaryContent}> */}
					{/* <h3>Course 1 Summary</h3>
					<SummaryChart /> */}
					{/* <h5 className={classes.TableMarker}>User Summary</h5> */}
					{/* <div className={classes.TableMarkerDiv}>
						<h4 className={classes.TableHeadText}>User Summary </h4>
						<h4 className={classes.TableHeadText} style={{ fontSize: '16px' }}>
							{' '}
							Count: {userSummaryData?.total}
						</h4>
					</div> */}
					{/* <div className={classes.TableWrapper}>
						<div className={classes.TableExtras}>
							<div className={classes.TableInputs}>
								<input
									type="search"
									placeholder="Search"
									onChange={(e) => setSearchTerm(e.target.value)}
								/>
								{userSummaryFetching && <Spinner size="sm" animation="border" />}
								<button className={classes.AddUsersButton} onClick={() => console.log('ello')}>
									Export to CSV
								</button>
							</div>

							{/* <div className={classes.TableInputs}></div> */}
						{/* </div> */}
						{/* <Table hover responsive className={classes.Table}>
							<thead>
								<tr>
									{header.map((n) => (
										<th key={n}> {n.split('_').join(' ')} </th>
									))}
								</tr>
							</thead>
							<tbody>
								{Array.isArray(userSummaryData?.userSummary) &&
									userSummaryData?.userSummary.map((user) => (
										<tr key={user.employee_id}>
											{header.map((key) => (
												<td key={user[key]}>{user[key]}</td>
											))}
										</tr>
									))}
								{(userSummaryStatus === 'loading' || userSummaryFetching) && <Loader />}
							</tbody>
						</Table> */}
						{/* {userSummaryStatus === 'success' && userSummaryData?.userSummary?.length > 0 && (
							<PaginationButtons
								setPage={setPage}
								lastPage={userSummaryData?.lastPage}
								currentPage={page}
							/>
						)} */}

						{/* Paginated Table div */}
						{/* <PaginatedTable
							usersData={userSummary.data}
							check={userSummary.data !== null}
							header={header}
							tProperties={tProperties}
							dataLimit={10}
							pageLimit={5}
						/> */}
					{/* </div> */}
				{/* </div> */}
			{/* </div> */}
		</section>
	);
};

export default QRPage;
