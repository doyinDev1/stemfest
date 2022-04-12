import { saveAs } from 'file-saver';
// import { pdf } from '@react-pdf/renderer';
import { CloudDownloadOutlined } from '@mui/icons-material';
import { Button, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import classes from './DownloadStemfest.module.css';
import PDFStemfest from '../PDFStemfest/PDFStemfest';

const DownloadStemfest = ({ status}) => {
	const [downloading, setDownloading] = useState(false);
	// const userInfo = JSON.parse(sessionStorage.getItem('rpUser'));
	const currentDate = new Date();

	const userInfo = sessionStorage.getItem('cpUser')



	// console.log(ImageLink);

	// const generatePDFDoc = async () => {
	// 	setDownloading(true);
	// 	// const blob = await pdf(<PDFCertificate nameData={data.userdata?.name} CertificateDate={CertificateDate} />).toBlob();
	// 	const blob = await pdf(
	// 		<PDFStemfest
				
	// 		/>
	// 	).toBlob();
	// 	saveAs(blob, `Stemfest Badge.pdf`); // `${data.userdata?.name}Stemfest Badge.pdf`);
	// 	setDownloading(false);
	// };

	return (
		<Button
			disabled={!(status === true)}
			// onClick={generatePDFDoc}
			className={classes.DownloadBtn}
			variant="outlined-success"
		>
			{/* {console.log(uinfo)} */}
			{downloading && <Spinner animation="border" variant="success" size="sm" />}
			<CloudDownloadOutlined /> Download Stemfest Invite
		</Button>
	);
};

export default DownloadStemfest;
