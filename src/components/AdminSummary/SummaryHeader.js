import SummaryCards from '../SummaryCards/SummaryCards';
import classes from '../../styles/AdminSummary.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const SummaryHeader = ({ data, status }) => {
	return (
		<div className={classes.SummaryHeader}>
			<SummaryCards
				color="#003883"
				stats={data}
				title="Enrolled"
				icon={<AccountCircleIcon htmlColor="#003883" style={{ height: '2rem', width: '2rem' }} />}
				loading={status === 'loading'}
			/>
			<SummaryCards
				color="#ff8200"
				stats={data}
				title="Completed Course 1"
				icon={
					<LibraryBooksOutlinedIcon htmlColor="#ff8200" style={{ height: '2rem', width: '2rem' }} />
				}
				loading={status === 'loading'}
			/>
			<SummaryCards
				color="#b5d334"
				stats={data?.completed_course_2}
				title="Completed Course 2"
				icon={
					<LibraryBooksOutlinedIcon htmlColor="#ff8200" style={{ height: '2rem', width: '2rem' }} />
				}
				loading={status === 'loading'}
			/>
			<SummaryCards
				color="#003626"
				stats="-"
				title="Completed Course 3"
				icon={<LockOutlinedIcon htmlColor="#ccc" style={{ height: '2rem', width: '2rem' }} />}
				loading={status === 'loading'}
			/>
			<SummaryCards
				color="#003626"
				stats="-"
				title="Completed Course 4"
				icon={<LockOutlinedIcon htmlColor="#ccc" style={{ height: '2rem', width: '2rem' }} />}
				loading={status === 'loading'}
			/>
		</div>
	);
};

export default SummaryHeader;
