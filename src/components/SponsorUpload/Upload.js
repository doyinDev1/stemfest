import React, { useEffect, useState } from 'react';
import classes from '../../styles/AdminSummary.module.css';
import globals from '../../styles/common.module.css';
import { Spinner, Table } from 'react-bootstrap';

// import { axiosFetcher } from '../../DataFetching/axiosFetcher';
// import { useFetchProgramSummary, useFetchUserSummary } from '../../DataFetching/fetch';
// import Loader from '../Loader/Loader';
import toast from "react-hot-toast";
import axios from "axios";
import { Config } from '../../Config/Config'
import { useForm } from 'react-hook-form';
import BulkUploadModal from '../CreateUsers/BulkUploadModal'

const Upload = () => {
	const [validatingFile, setValidatingFile] = useState(false);
	const [validationErrors, setValidationErrors] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const [validatedData, setValidatedData] = useState({
		valid: [],
		invalid: [],
	  });

	  const onHide = () => {
		setShowModal(false);
		setValidatingFile(false);
		setValidationErrors([]);
	  };

	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = (data) => {
		console.log(data, "form data");

	}
	console.log(errors);


	return (
		<>
		
		<section className={classes.SummarySection}>
			
			<h2>Upload Sponsor Attendees</h2>
		
	</section>

	<div>

	<form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" {...register("name", {})} />
      <input type="email" placeholder="email" {...register("email", {})} />
      <input type="tel" placeholder="phone" {...register("phone", {})} />

      <input type="submit" />
    </form>
	</div>
	<BulkUploadModal
        showModal={showModal}
        hideModal={onHide}
        validatingFile={validatingFile}
        validatedData={validatedData}
        validationErrors={validationErrors}
        setValidatingFile={setValidatingFile}
        setValidatedData={setValidatedData}
        setValidationErrors={setValidationErrors}
      />
	</>
	);
};

export default Upload;