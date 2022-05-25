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

import ReportIcon from '@mui/icons-material/Report';

import SearchChildrenSponsors from '../components/SearchChildren/SearchChildrenSponsor';
const SponsorsDashboard = () => {
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
	
		// {
		// 	id: 4,
		// 	icon: <SettingsIcon />,
		// 	title: 'Upload Attendees',
		// 	page: <Upload />,
		// },
		{
			id: 0,
			icon: < FamilyRestroomIcon />,
			title: 'View Children',
			page: <SearchChildrenSponsors />,
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

export default SponsorsDashboard;
