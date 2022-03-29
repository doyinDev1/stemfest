import classes from './AdminHeader.module.css';
// import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { IconButton } from '@mui/material';
import { SubjectRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const AdminHeader = ({ padded, toggleSidebar, sidebarOpen }) => {
	const navigate = useNavigate();

	const onLogOut = () => {
		navigate.replace('/');
		sessionStorage.removeItem('cpAdmin');
		toast.success('Logged Out Successfully');
	};
	return (
		<div
			className={`${classes.AdminHeader} ${padded ? (sidebarOpen ? classes.PaddingLeft : '') : ''}`}
		>
			<div className={classes.HeaderText}>
				{padded && (
					<IconButton onClick={toggleSidebar}>
						<SubjectRounded />
					</IconButton>
				)}
				<h6>Welcome Admin</h6>
			</div>
			<button onClick={onLogOut}>Log Out</button>
		</div>
	);
};

export default AdminHeader;
