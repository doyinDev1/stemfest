import AdminSidebar from '../components/AdminSidebar/AdminSidebar';
// import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import { useEffect, useState } from 'react';
import classes from '../styles/Dashboard.module.css';
// import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SchoolIcon from '@mui/icons-material/School';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import AdminHeader from '../components/AdminHeader/AdminHeader';
import { AdminReports } from '../components/AdminReports/AdminReports';
const AdminDashboard = () => {
	const [isOpen, setIsOpen] = useState(true);
	// const [currentPage, setCurrentPage] = useState(
	// 	sessionStorage.getItem('currentPage') ? Number(sessionStorage.getItem('currentPage')) : 0
	// );
	const [currentPage, setCurrentPage] = useState(0);
	// console.log(currentPage);

	useEffect(() => {
		setCurrentPage(
			sessionStorage.getItem('currentPage') ? Number(sessionStorage.getItem('currentPage')) : 0
		);
	}, []);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};
	const pages = [
		{
			id: 0,
			title: 'Summary',
			icon: <HomeOutlinedIcon />,
			page: < AdminReports />,
		},
		{
			id: 1,
			icon: <SchoolIcon/>,
			title: 'School',
			page: < AdminReports />,
		},
		{
			id: 2,
			icon: <SupervisedUserCircleIcon />,
			title: 'Teachers',
			page: < AdminReports />,
		},
		{
			id: 3,
			icon: <FamilyRestroomIcon />,
			title: 'Parents',
			page: < AdminReports />,
		},
	];
	return (
		<>
		

			<>
				<AdminSidebar
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					setCurrentPage={setCurrentPage}
					pages={pages}
				/>
				<AdminHeader padded toggleSidebar={toggleSidebar} sidebarOpen={isOpen} />
				<div className={`${classes.ContentWrapper} ${!isOpen ? classes.CloseSidebar : ''}`}>
					{pages.map((page, index) => (
						<div key={index}> {currentPage === index && page.page} </div>
					))}
				</div>
				{/* <Toaster /> */}
			</>
		</>
	);
};

export default AdminDashboard;
