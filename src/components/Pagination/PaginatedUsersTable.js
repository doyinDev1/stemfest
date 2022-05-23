import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useFecthModuleReports, useFetchCourseSummary } from '../../DataFetching/fetch';
import common from '../../styles/AdminDasboard/AdminSummary.module.css';
import classes from '../../styles/AdminDasboard/UserManagement.module.css';
import { DeleteOutline, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
// import './PaginatedTable.css';


const PaginatedUsersTable = ({ usersData = [], check, header, properties, pageLimit, dataLimit, utilsObj, tableID }) => {
    const [data, setData]= useState(usersData)
	useEffect(()=>{
        setData(usersData)
	}, [usersData]);

    const [searchTerm, setSearchTerm]= useState("");
    useEffect(()=>{
        if(!searchTerm.length){
            setData(usersData)
        }
        else{
            const filtered= usersData.filter(record=>{
               return record.name.toLowerCase().includes(searchTerm.toLowerCase()) || record.email.toLowerCase().includes(searchTerm.toLowerCase())
            })
            setData(filtered)
            setCurrentPage(1)
        }
    }, [searchTerm]);
    const handleSearch= (e)=>{
        setSearchTerm(e.target.value)
    };

    const [pages, setPages] = useState(check? Math.ceil(data.length / dataLimit) : 0);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(()=>{
        const pages = check? Math.ceil(data.length / dataLimit) : 1;
		setPages(pages);
    },[data]);   
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
      }, [currentPage]); 
    
    // Methods
    const gotoNextPage = () =>{
        currentPage === pages? setCurrentPage(pages) :
        setCurrentPage((prev)=> {return prev + 1});
    };

    const gotoPreviousPage = () =>{
        currentPage === 1? setCurrentPage(1) :
        setCurrentPage((prev)=> prev - 1);
    };

    const changePage = (event) =>{
        setCurrentPage(Number(event.target.innerText));
    };
    
    const getDataByPage = () =>{
        const startIndex= (currentPage * dataLimit) - dataLimit;
        const endIndex= currentPage * dataLimit;
        const pageData = data.slice(startIndex, endIndex);
        return pageData;
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        const pagesGroup= new Array(pageLimit).fill().map((_, index) => start + index + 1);
        return pagesGroup;
    };


    return (
        <div className={common.TableWrapper}>
            <div className={common.TableExtras}>
                <button className={classes.AddUsersButton} onClick={utilsObj.onAddUserClick}>
                    + Add Users
                </button>
                <div className={common.TableInputs}>
                    <input type="search" value={searchTerm} placeholder="Search" onChange={handleSearch} />
                </div>
            </div>
            
            <Table className={common.Table} hover responsive>
                <thead>
                    <tr>
                        {header.map((n) => (
                            <th key={n}> {n} </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {check &&
                        getDataByPage().map((record, index) => {
                            if (index > 99) return null;
                            
                            return (
                                <tr key={index+1}>
                                    <td>
                                        <IconButton className={classes.ActionButton}>
                                            <DeleteOutline style={{ fontSize: '17px', color: 'var(--color-orange)' }} />
                                        </IconButton>
                                        <IconButton className={classes.ActionButton}>
                                            <Edit
                                                style={{
                                                    fontSize: '17px',
                                                    color: 'var(--color-green)',
                                                }}
                                            />
                                        </IconButton>
                                    </td>
                                    {
                                     properties.map((prop) => {
                                        return <td key={record[prop]}>{record[prop]}</td>
                                    })
                                    }
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
            <div className="pagination ">
                {/* previous button */}
                <button
                    onClick={gotoPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    prev
                </button>

                {/* show page numbers */}
                {getPaginationGroup().map((item, index) => (
                    <button
                    key={index}
                    value={item}
                    onClick={changePage}
                    className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                    <span>{item}</span>
                    </button>
                ))}

                {/* next button */}
                <button
                    onClick={gotoNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    next
                </button>
            </div>
        </div>
        
    );
};

export default PaginatedUsersTable;