import classes from '../../styles/AdminSummary.module.css'
import { Spinner } from 'react-bootstrap';

const SummaryCards = ({ color, icon, title, stats, label, loading }) => {
	return (
		<div className={classes.SummaryCard}>
			<div className={classes.SummaryCardContent}>
				<div>
					{loading && <Spinner animation="border" variant="primary" size="sm" />}
					<h6>{stats} {label}</h6>
					<p>{title}</p>
				</div>
				{icon && icon}
			</div>
			{/* <span style={{ backgroundColor: color }}></span> */}
		</div>
	);
};

export default SummaryCards;
