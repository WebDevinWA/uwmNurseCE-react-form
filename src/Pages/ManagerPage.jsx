//All IMPORTS
import React, { useState, useEffect, createContext, useContex } from 'react';
import HeaderForm from '../Components/HeaderForm';
import CourseForm from '../Components/CourseForm';
import FundsForm from '../Components/FundsForm';
import EmailButtonsForm from '../Components/EmailButtonsForm';
import SupervisorApprovalDetailsForm from '../Components/SupervisorApprovalDetailsForm';
import ManagerApprovalForm from '../Components/ManagerApprovalForm';
import { useParams, useLoaderData, Form } from 'react-router-dom';
//import { Divider } from 'primereact/divider';
//import MockMultipleReviews from '../DBFiles/MockMultipleReviews';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import {IRequestType} from '../Utils/IRequestType';
import '../Utils/gridStyles.css'

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Fieldset } from 'primereact/fieldset';


const response = {};
function SupervisorPage() {
    //ALL CONSTS
    const { dept } = useParams();
    const [loading, setLoading] = useState();
    const [formData, setFormData] = useState({});
    const [ReviewData, setReviewData] = useState([]);
    const [isEditing, setIsEditing] = useState();
    const [editedData, setEditedData] = useState({});
    const [APIData, setAPIData] = useState({});
    const [modifiedData, setModifiedData] = useState([]);
    const [item, setItem] = useState();
    const navigate = useNavigate();
    const [selectedRow, setSelectedRow] = useState();
    const [selectedRegID, setSelectedRegID] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [vendor, setVendor] = useState();



    //DEBUG LINES
    console.log('line 35 from Supervisor Page - ' + dept);


    //API CALLS  
    const apiUrl = 'https://nursecedev.uwmedicine.org/api/FYReviews';
    console.log(apiUrl);
    console.log('API for axios ' + apiUrl);


    const getReviewData = async () => {

        await axios.get(apiUrl)
            .then((response) => {

                const mappedData = response.data.map((item) => ({
                    RegID: item.RegID,
                    EID: item.EID,
                    MgrName: item.MgrName,
                    FirstName: item.FirstName,
                    LastName: item.LastName,
                    FTE: item.FTE,
                    Department: item.DeptUnitOrClinic,
                    location: item.location,
                    vendor: item.vendor,
                    CourseTitle: item.title,
                    StartDate: item.start_date,
                    EndDate: item.end_date,
                    notes: item.notes


                }));

                setAPIData(response.data);
                setModifiedData(mappedData);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    useEffect(() => {
        getReviewData();
    }, []);

    //CHANGE INPUT EVENTS

    const handleEdit = (viewRegId) => {
        console.log(`made it here with ${viewRegId}`);
        alert(`TODO - pass this value to the SupervisorPage and request the fields from tblRequests ${viewRegId}`);
    };
    const handleSave = () => {
        setIsEditing(false);
        setEditedData({});
    };
    const handleDeleteButtonClick = (alertRegId) => {
        // setRegIDData<String>(alertRegId);
        console.log(`made it here with useState variable ${alertRegId}`);
        alert(`TODO - pass this value to the Delete API to delete the following review ${APIData}`);
    };
    const handleReadButtonClick = (reviewRegID) => {
        //setRegIDData(reviewRegID);
        //console.log(`Selected Record to review is  ${reviewRegID}`);
        //navigate(`/ManagerPage/${reviewRegID}`); //for ver 6
        //history.push('/ManagerPage/${reviewRegID}'); ver 5 only        
    };

    //BUTTON EVENTS
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? modifiedData.length - 1 : prevIndex - 1
        );
    };
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % modifiedData.length);
    };
    //LOADING EVENTS
    if (loading) {
        return <p>Loading Form...</p>;
    }

    //RETURN
    return (
        <>
            <div id="headerform" class="row">
                <label htmlFor="tbName"> Name: </label>
                <InputText id="tbName" />
                <label htmlFor="tbEmployeeID"> Employee ID: </label>
                <InputText id="tbEmployeeID" />
                <label htmlFor="tbFTE"> FTE%:</label>
                <InputText id="tbFTE" />
                <label htmlFor="tbDepartment"> Department:</label>
                <InputText id="tbDepartment" />
            </div>
            <div class="mgrcontainer">



                <div class="mgrcourseform">
                    <FundsForm />
                </div>
                <div class="mgrfundsform">
                    <FundsForm />
                </div>
               
                <div class="mgremail-buttons">
                    <EmailButtonsForm />
                    <SupervisorApprovalDetailsForm />
                </div>
                <div class="mgrsupervisorapprovalform">
                    <ManagerApprovalForm />
                </div>
            </div>

            <div>
                {modifiedData.length > 0 && (
                    <>

                        <h2>{modifiedData[currentIndex].RegID}</h2>
                        <h2>{modifiedData[currentIndex].notes}</h2>
                        <h2>{modifiedData[currentIndex].dept}</h2>
                        <h2>{modifiedData[currentIndex].location}</h2>
                        <h2>{modifiedData[currentIndex].StartDate}</h2>
                        <h2>{modifiedData[currentIndex].EndDate}</h2>
                        <h2>{modifiedData[currentIndex].End_Date}</h2>
                        <h2>{modifiedData[currentIndex].CourseTitle}</h2>
                        <div>
                            <button onClick={goToPrevious}>Previous</button>
                            <button onClick={goToNext}>Next</button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default SupervisorPage;
