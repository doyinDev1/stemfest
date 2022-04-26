import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import { CloudDownloadOutlined } from '@mui/icons-material';
import { Button, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import classes from './DownloadStemfest.module.css';
import PDFStemfest from '../PDFStemfest/PDFStemfest';

const DownloadStemfest = ({ status, name , qr_code, imgSrc }) => {
	const [downloading, setDownloading] = useState(false);


	const generatePDFDoc = async () => {
		setDownloading(true);
		const blob = await pdf(<PDFStemfest name={name}  imgSrc={imgSrc}  />).toBlob();
		saveAs(blob, `${name} Stemfest Badge.pdf`); 
		setDownloading(false);
	};

	return (
		<Button
			disabled={!(status === true)}
			onClick={generatePDFDoc}
			className={classes.DownloadBtn}
			variant="outline-primary"
		>
			{downloading && <Spinner animation="border" variant="primary" size="sm" />}
			<CloudDownloadOutlined /> Download Stemfest Invite
		</Button>
	);
};

export default DownloadStemfest;
