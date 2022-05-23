import classes from '../../styles/PaginationButtons.module.css';
// import form from '../CreateUserForm/CreateUserForm.module.css';
import { Button } from 'react-bootstrap';

const PaginationButtons = ({ lastPage, currentPage, setPage }) => {
	const generateButtons = () => {
		const start = 1;
		const btnGroups = new Array(lastPage).fill().map((_, index) => start + index);
		return btnGroups;
	};
	return (
		<div className={classes.PaginationContainer}>
			<Button onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1}>
				Prev
			</Button>
			{generateButtons().map((page, index) => {
				const startIndex = currentPage === 1 ? 0 : currentPage - 1;
				if (index >= startIndex && index <= startIndex + 5) {
					return (
						<Button onClick={() => setPage(page)} key={page} className={classes.Button}>
							{page}
						</Button>
					);
				}

				if (index > 5 && index < generateButtons().length - 1) return null;

				if (index === generateButtons().length - 1)
					return (
						<Button onClick={() => setPage(page)} key={page} className={classes.Button}>
							{page}
						</Button>
					);
			})}
			<Button onClick={() => setPage(currentPage + 1)} disabled={currentPage === lastPage}>
				Next
			</Button>
		</div>
	);
};

export default PaginationButtons;
