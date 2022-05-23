import React, { useEffect, useState } from 'react';
import SummaryHeader from './SummaryHeader';
import classes from '../../styles/AdminSummary.module.css';
import globals from '../../styles/common.module.css';
import SummaryChart from './SummaryChart';
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
const Upload = () => {

	const [loading, setLoading] = useState(false);
	const [data, setData] = useState({});

	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(null);


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
		  .get(`${Config.url.API_URL}/admin/view-sponsors?page=${page}`, config)
		  .then((res) => {
			if (res.data?.error?.length) throw new Error(res.data.error[0]);
	
			setData(res.data);
			setLoading(false);
			// console.log(res.data, "data")
		  })
		  .catch((err) => {
			const errMsg = err?.message || "Failed to Load !";
			// toast.error(errMsg);
		  });

	  }, [page]);
	




	const header = [
		'name',
		'access_code',
		
		
	];
	const tProperties = [
		'name',
		'access_code',
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
		<>
		
		<section className={classes.SummarySection}>
			
			<h2>Upload Sponsor Attendees</h2>
		
	</section>
	</>
	);
};

export default Upload;
