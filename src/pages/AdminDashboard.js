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
import QRCode from '../components/QRCode/QRCode'
import QRPage from '../components/QRPage/QRPage';
import ChildrenInfo from '../components/ChildrenInfo/ChildrenInfo'
import ReportIcon from '@mui/icons-material/Report';
import ErrorLogs from '../components/ErrorLogs/ErrorLogs';
import Sponsors from '../components/Sponsors/Sponsors';
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
			icon: <FamilyRestroomIcon />,
			title: 'Children Information',
			page: < ChildrenInfo />,
		},
		{
			id: 2,
			icon: <QrCodeIcon />,
			title: 'Event Attendance',
			page: <QRPage />,
		},
		{
			id: 3,
			icon: <AdminPanelSettingsIcon />,
			title: 'Sponsors',
			page: <Sponsors />,
		},
		{
			id: 4,
			icon: < ReportIcon />,
			title: 'Error Logs',
			page: <ErrorLogs />,
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
