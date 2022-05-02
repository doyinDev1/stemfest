import SummaryCards from '../SummaryCards/SummaryCards';
import classes from '../../styles/AdminSummary.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ManIcon from '@mui/icons-material/Man';
import SettingsIcon from '@mui/icons-material/Settings';
import SchoolIcon from '@mui/icons-material/School';

const QRCode = ({ data, status }) => {
	return (
		<div className={classes.SummaryHeader}>
			<SummaryCards
				color="#003883"
				stats={data?.parent_attendance_count}
				title="Scanned"
				label="Parents"
				icon={<FamilyRestroomIcon htmlColor="#003883" style={{ height: '2rem', width: '2rem' }} />}
				loading={status === true}
			/>
			<SummaryCards
				color="#003883"
				stats={data?.child_attendance_count}
				title="Scanned"
				label="Children"

				icon={
					<ManIcon htmlColor="#003883" style={{ height: '2rem', width: '2rem' }} />
				}
				loading={status === true}
			/>
			<SummaryCards
				color="#b5d334"
				stats={data?.school_attendance_count}
				title="Scanned"
				label="Schools"

				icon={
					<SchoolIcon htmlColor="#003883" style={{ height: '2rem', width: '2rem' }} />
				}
				loading={status === true}
			/>
			<SummaryCards
				color="#b5d334"
				stats={data?.child_attendance_count ? data?.child_attendance_count : "22" }
				title="Scanned"
				label="Teachers"

				icon={
					<LibraryBooksOutlinedIcon htmlColor="#003883" style={{ height: '2rem', width: '2rem' }} />
				}
				loading={status === true}
			/>
		
		</div>
	);
};

export default QRCode;
