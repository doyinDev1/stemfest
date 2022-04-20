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
				stats="901"
				title="Scanned"
				label="Paents"
				icon={<FamilyRestroomIcon htmlColor="#003883" style={{ height: '2rem', width: '2rem' }} />}
				loading={status === 'loading'}
			/>
			<SummaryCards
				color="#003883"
				stats="3986"
				title="Scanned"
				label="Children"

				icon={
					<ManIcon htmlColor="#003883" style={{ height: '2rem', width: '2rem' }} />
				}
				loading={status === 'loading'}
			/>
			<SummaryCards
				color="#b5d334"
				stats="1000"
				title="Scanned"
				label="Schools"

				icon={
					<SchoolIcon htmlColor="#003883" style={{ height: '2rem', width: '2rem' }} />
				}
				loading={status === 'loading'}
			/>
			<SummaryCards
				color="#b5d334"
				stats="25"
				title="Scanned"
				label="Teachers"

				icon={
					<LibraryBooksOutlinedIcon htmlColor="#003883" style={{ height: '2rem', width: '2rem' }} />
				}
				loading={status === 'loading'}
			/>
		
		</div>
	);
};

export default QRCode;
