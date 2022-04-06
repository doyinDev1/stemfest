import AdminSidebar from '../components/AdminSidebar/AdminSidebar';
import { useEffect, useState } from 'react';
import classes from '../styles/Dashboard.module.css';
import SchoolIcon from '@mui/icons-material/School';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import HomeIcon from '@mui/icons-material/Home';
import ManIcon from '@mui/icons-material/Man';
import QrCodeIcon from '@mui/icons-material/QrCode';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SettingsIcon from '@mui/icons-material/Settings';
import AdminHeader from '../components/AdminHeader/AdminHeader';
import { AdminReports } from '../components/AdminReports/AdminReports';
import AdminSummary from '../components/AdminSummary/AdminSummary'
const AdminDashboard = () => {
	const [isOpen, setIsOpen] = useState(true);

	const [currentPage, setCurrentPage] = useState(0);

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
			title: 'Home',
			icon: <HomeIcon />,
			page: < AdminSummary />,
		},
		{
			id: 1,
			icon: <SchoolIcon/>,
			title: 'Registration',
			page: < AdminSummary />,
		},
		{
			id: 2,
			icon: <ManIcon />,
			title: 'Adults',
			page: < AdminSummary />,
		},
		{
			id: 3,
			icon: <FamilyRestroomIcon />,
			title: 'Children',
			page: < AdminSummary />,
		},
		{
			id: 4,
			icon: <QrCodeIcon />,
			title: 'QR Codes',
			page: <AdminSummary />,
		},
		{
			id: 5,
			icon: <AdminPanelSettingsIcon/>,
			title: 'Event Attendance',
			page: < AdminSummary />,
		},
		{
			id: 6,
			icon: <EventNoteIcon />,
			title: 'Admin',
			page: < AdminSummary />,
		},
		{
			id: 7,
			icon: <SettingsIcon />,
			title: 'Settings',
			page: < AdminSummary />,
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
			</>
		</>
	);
};

export default AdminDashboard;
