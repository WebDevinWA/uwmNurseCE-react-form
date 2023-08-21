import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { ProgressSpinner } from 'primereact/progressspinner';
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";


const Table = () => {

    
    const [loading, setLoading] = useState(true);
    const [selectedRows, setSelectedRows] = useState([]);
    const [data, setData] = useState([]);
    const [department, setDepartment] = useState("");
    const navigate = useNavigate();

  

    //API CALLS for this Page
    //const fetchURL = 'https://nursece-dev.azurewebsites.net/api';
    //const fetchURL = 'http://localhost:3001/api/FYReviews?fy=FY23';
    const fetchURL = "https://nursecedev.uwmedicine.org/api/SupervisorDeptReviewCounts?fy=FY23";
    console.log("List of Departments ",fetchURL);

    const getData = async () => {
        try {   
            //NEED TO USE AXIOS.ALL TO GET ALL THE DEPARTMENTS, NOT JUST ONE
            const customHeaders = {
                'Content-Type': 'application/json',
                //'Authorization': 'access token here?',
            }

            //URLs for multiple dept requests
            const urls = [
                //DANG, this is going to be a redesign again... I am using the dept as the parameter to navigage to the next page.
            ]

            const response = await axios.get(fetchURL);
            setLoading(false);           
            const modifiedData = response.data.map((item, index) => ({
                id: index + 1,
                ...item,
            }));
            //set the data to the modifieddata using the item index as the id
            setData(modifiedData);
            console.log(modifiedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    useEffect(() => {
        console.log(`the table api call will be ${fetchURL}`);
        getData();
    }, []);

    const handleButtonClick = () => {
        //make sure you check the property name because dept lower case will not work
        console.log(`Line 59 from Table component the Department is ${selectedRows[0].Dept}`);
        const cleanStr = (selectedRows[0].Dept).replace(/[&,]/g, "");       //replace all comma + & with whitespace
        console.log(cleanStr);        
        navigate(`/Supervisor/${cleanStr}`);
    }

    const handleRetractApprovalClick = () => {
        //make sure you check the property name because dept lower case will not work
        console.log(`Line 59 from Table component the Department is ${selectedRows[0].Dept}`);
        const cleanStr = (selectedRows[0].Dept).replace(/[&,]/g, "");       //replace all comma + & with whitespace
        console.log(cleanStr);
        navigate(`/Admin/${cleanStr}`);
    }

    return (
        <div className="table-wrapper" style={{ width: "50%", maxHeight: "50%", overflow: "auto" }}  >
            {loading ? ( 
                 
                <div id="supvervisorPageSummaryTable"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "800px"
                    }}
                >   
                    <ProgressSpinner />
                </div>
            ) : (
                <>
                        <Button
                        id='btnSelectDept'
                        label="Review Requests"                        
                        severity="info" 
                        disabled={selectedRows.length===0}
                        onClick={handleButtonClick}
                        size="large" 
                    >                    
                        </Button>   
                        <Button
                            id='btnRetractApproval'
                            label="Retract Approval"
                            severity="info"
                            disabled={selectedRows.length===0}
                            onClick={handleRetractApprovalClick}
                            size="large"
                        >
                        </Button>  
                        <DataTable                        
                        value={data}
                        selectionMode="multiple"
                        selection={selectedRows}
                        onSelectionChange={(e) => setSelectedRows(e.value)}
                        size="medium"
                        scrollable
                        scrollHeight="100%"
                            style={{ width: "100%" }}
                        stickyheader
                        
                    >
                        <Column field="Dept" header="DEPT / UNIT"></Column>
                        <Column field="ReviewCount" header="# TO APPROVE"></Column>
                    </DataTable>
                    <br />
                </>
            )}
        </div>
    );
};

export default Table;
