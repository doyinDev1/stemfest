import * as XLSX from 'xlsx';

export const convertSheetToFile = (sheet) => {
	const fileType = 'application/vnd.ms-excel';
	// const workbook = xlsx.utils.sheet_to_csv(sheet);
	const ws = XLSX.utils.json_to_sheet(sheet);
	const workbook = { Sheets: { data: ws }, SheetNames: ['data'] };

	const workbookOptions = { bookType: 'csv', bookSST: false, type: 'array' };

	const workbookOutput = XLSX.write(workbook, workbookOptions);
	// const data = new Blob([workbookOutput], { type: fileType });
	const csvFile = new File([workbookOutput], 'upload_file.csv', {
		type: fileType,
	});

	return csvFile;
};
