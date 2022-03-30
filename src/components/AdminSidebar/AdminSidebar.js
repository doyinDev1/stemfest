// import { Subject } from "@material-ui/icons";
import SubjectIcon from '@mui/icons-material/Subject';
import { IconButton } from '@mui/material';
// import SSHLogo from '../../../images/logo_new.png';
import { useRef, useEffect, useState } from 'react';
import useWindowDimensions from '../../hooks/getWindowDimensions';
import classes from './AdminSidebar.module.css';

const AdminSidebar = ({ isOpen, setIsOpen, setCurrentPage, setHeading, pages }) => {
	const sidebarRef = useRef(null);
	const underlayRef = useRef(null);
	const { width } = useWindowDimensions();
	const [activeTabId, setActiveTabId] = useState(0);

	useEffect(() => {
		setActiveTabId(
			sessionStorage.getItem('currentPage') ? Number(sessionStorage.getItem('currentPage')) : 0
		);
	}, []);

	//check realtime screen width to control side-drawer behaviour
	useEffect(() => {
		if (width > 1024) {
			setIsOpen(true);
		}
	}, [setIsOpen, width]);

	//controls hidding and showing of sidebar and its underlay
	useEffect(() => {
		if (isOpen) {
			sidebarRef.current.style.transform = `translateX(0)`;
			// underlayRef.current.style.visibility = 'visible';
		} else {
			sidebarRef.current.style.transform = `translateX(-260px)`;
			// underlayRef.current.style.visibility = 'hidden';
		}
	}, [isOpen]);

	//prevent page scroll when modal is shown
	// useEffect(() => {
	// 	if (isOpen && width < 1024) {
	// 		document.body.style.overflow = 'hidden';
	// 	}
	// 	return () => {
	// 		document.body.style.overflow = 'unset';
	// 	};
	// }, [isOpen, width]);

	//handle closemodal/sidebar on click outside modal
	const closeModal = (e) => {
		if (width < 1024 && (underlayRef.current === e.target || sidebarRef.current === e.target)) {
			setIsOpen(false);
		}
	};

	//handle set reference id for page to be shown
	//handles close sidebar on tab link click
	const handleClickTabLink = (id) => {
		setCurrentPage(id);
		setActiveTabId(id);
		// alert('fired!');

		// sessionStorage.setItem('currentPage', id);
		// if (isOpen && width < 1024) setIsOpen(false);
	};

	return (
		<div className={classes.underlay} ref={underlayRef} onClick={closeModal}>
			<div className={classes.sidebar_container} ref={sidebarRef}>
				<div className={classes.brand_logo}>
					<a href="/">
						<img
							src="https://res.cloudinary.com/naijakids/image/upload/v1648457537/IMG_20220328_094349_mfqcg3.jpg"
							alt="Access Bank"
							className={classes.Logo}
						/>
					</a>
				</div>

				<div className={classes.sidebar_menu_wrapper}>
					<div className={classes.sidebar_menu}>
						<ul>
							{pages.map((page, index) => {
								const { id, icon, title } = page;
								return (
									<li key={id} onClick={() => handleClickTabLink(index)}>
										<p className={`${activeTabId === index ? classes.ActiveTab : ''}`}>
											{icon && icon}
											<span> {title} </span>
										</p>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminSidebar;
