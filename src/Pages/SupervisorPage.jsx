//All IMPORTS
import React, { useState, useEffect, createContext, useContext } from 'react';
import HeaderForm from '../Components/HeaderForm';
import CourseForm from '../Components/CourseForm';
import FundsForm from '../Components/FundsForm';
import EmailButtonsForm from '../Components/EmailButtonsForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Utils/gridStyles.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import SupervisorApprovalDetailsForm from '../Components/SupervisorApprovalDetailsForm';
import { PrimeIcons } from 'primereact/api';
import moment from 'moment';

const FormDataContext = createContext();

function SupervisorPage() {

    //ALL CONSTS
    const { dept } = useParams();
    console.log(dept);

    const [loading, setLoading] = useState(false);       
    const [isEditing, setIsEditing] = useState(false);
   
    const [APIData, setAPIData] = useState([]);
    const [modifiedData, setModifiedData] = useState([]);

    const [currentIndex, setCurrentIndex] = useState(1);
    const [vendor, setVendor] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [fullName, setFullName] = useState();
    const [EID, setEID] = useState();
    const [FTE, setFTE] = useState();
    const [department, setDepartment] = useState();
    const [regid, setRegID] = useState();
    const [title, setTitle] = useState();
    const [location, setLocation] = useState();
    const [startdate, setStartDate] = useState();
    const [enddate, setEndDate] = useState();
    const [notes, setNotes] = useState();
    const [cefundsrequested, setCEFundsRequested] = useState();
    const [cefundsused, setCEFundsUsed] = useState();
    const [lvhoursused, setLvHoursUsed] = useState();
    const [lvhoursallotted, setLvHoursAllotted] = useState();
    const [lvhoursrequested, setLvHoursRequested] = useState();
    const [cefundsallotted, setCEFundsAllotted] = useState();
    const [pooledfundsallotted, setPooledFundsAllotted] = useState();
    const [pooledfundsrequested, setPooledFundsRequested] = useState();
    const [pooledfundsused, setPooledFundsUsed] = useState();
    const [pooledfundsbalance, setPooledFundsBalance] = useState();
    const [cefundsbalance, setCEFundsBalance] = useState();
    const [lvhoursbalance, setLvHoursBalance] = useState();
    const [certsupportrequested, setCertSupportRequested] = useState();
    const [budgetnumber, setBudgetNumber] = useState();
    const [UWEmail, setUWEmail] = useState();
    const [ManagerEmail, setManagerEmail] = useState();
    const [documentpath, setDocumentPath] = useState();
    const [link, setLink] = useState();


   /* API CALLS     https://nursecedev.uwmedicine.org/api/FYReviews?fy=FY23&departments=Operating%20room */
    const apiUrl = `https://nursecedev.uwmedicine.org/api/FYReviews?fy=FY23&departments=${dept}`;   
    console.log('SELECTED DEPT API IS ', apiUrl);
       
    const getReviewData = async () => {
        try {
            const response = await axios.get(apiUrl);
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
                StartDate: moment(item.start_date).format('MM/DD/YYYY'),
                EndDate: moment(item.end_date).format('MM/DD/YYYY'),
                notes: item.notes,
                CEFundsRequested: item.purchase_CE_funds,
                CEFundsAllotted: item.Allotted_Funds,
                CEFundsUsed: item.Used_CE_Funds,
                CEFundsBalance: item.Used_CE_Funds,
                PooledFundsRequested: item.pooled_funds_amount,
                PooledFundsAllotted: item.Allotted_Pooled_Funds,
                PooledFundsUsed: item.Used_Pooled_Funds,
                PooledFundsBalance: item.pooled_funds_amount,                
                AllottedFunds: item.Allotted_Funds,
                AllottedHours: item.Allotted_Hrs,
                AllottedPooledFunds: item.Allotted_Pooled_Funds,
                LvHoursAllotted: item.Allotted_Hrs,
                LvHoursUsed: item.Used_Hrs,
                LvHoursBalance: item.prof_lv_hrs,
                LvHoursRequested: item.Discretionary_ProfLvHrs,
                CertSupportRequested: item.cert_support_amount,
                BudgetNumber: item.budget_no,                
                NSApproved: item.NSApproved,
                JobTitle: item.JobTitle,
                DateSupervisorApproval: moment(item.date_suprv_approval).format('MM/DD/YYYY'),
                SupervisorAmountApproved: item.suprv_amt_approved,
                SupervisorHoursApproved: item.suprv_hrs_approved,
                SupervisorNotes: item.suprv_notes,
                SupervisorReviewed: item.suprv_reviewed,
                DateManagerApproval: item.date_mgr_approval,
                ManagerAmountApproved: item.mgr_amt_approved,
                ManagerHoursApproved: item.mgr_hrs_approved,
                ManagerNotes: item.mgr_notes,
                ManagerReviewed: item.mgr_Approved,
                UWemail: item.UWEmail,
                ManagerEmail: item.MgrEmail,
                Path: item.path,
                Link: item.Link,
                
            }));
            setAPIData(response.data);
            setModifiedData(mappedData);
            setLoading(false);
            console.log(mappedData);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        setLoading(true);
        getReviewData();
    }, []);

    //CHANGE INPUT EVENTS

    const handleEdit = (viewRegId) => {
        console.log(`made it here with ${viewRegId}`);
        alert(`TODO - pass this value to the SupervisorPage and request the fields from tblRequests ${viewRegId}`);
    };
    const handleSave = () => {
        setIsEditing(false);
        alert(`TODO - pass this value to the POST API`);
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

    const EmailManagerlRequester = () => {
        alert(`opens up Outlook and email the requestor`);
    };

    const handleButtonClickEmailManager = () => {
        alert(`opens up Outlook and email the Manager`);
    }

    //BUTTON EVENTS
    
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? modifiedData.length - 1 : prevIndex - 1
        );
    
        setRegID(modifiedData[currentIndex].RegID);
        setFirstName(modifiedData[currentIndex].FirstName);
        setLastName(modifiedData[currentIndex].LastName);
        setFullName(`${modifiedData[currentIndex].LastName},${modifiedData[currentIndex].FirstName}`);
        setEID(modifiedData[currentIndex].EID);
        setFTE(modifiedData[currentIndex].FTE);
        setDepartment(modifiedData[currentIndex].Department);
        setUWEmail(modifiedData[currentIndex].UWemail);
        setManagerEmail(modifiedData[currentIndex].ManagerEmail);
        setDocumentPath(modifiedData[currentIndex].Path);
        setLink(modifiedData[currentIndex].Link);
      /*  Course Info*/
        setTitle(modifiedData[currentIndex].CourseTitle);
        setVendor(modifiedData[currentIndex].vendor);
        setLocation(modifiedData[currentIndex].location);
        setStartDate(modifiedData[currentIndex].StartDate);
        setEndDate(modifiedData[currentIndex].EndDate);
        setNotes(modifiedData[currentIndex].notes);
      /*  Funds Info*/
        setCEFundsRequested(modifiedData[currentIndex].CEFundsRequested);
        setLvHoursUsed(modifiedData[currentIndex].LvHoursUsed);
        setLvHoursAllotted(modifiedData[currentIndex].LvHoursAllotted);
        setLvHoursRequested(modifiedData[currentIndex].LvHoursRequested);
        setCEFundsAllotted(modifiedData[currentIndex].CEFundsAllotted);
        setPooledFundsAllotted(modifiedData[currentIndex].PooledFundsAllotted);
        setPooledFundsRequested(modifiedData[currentIndex].PooledFundsRequested);
        setCEFundsUsed(modifiedData[currentIndex].CEFundsUsed);
        setPooledFundsUsed(modifiedData[currentIndex].PooledFundsUsed);
        setPooledFundsBalance(modifiedData[currentIndex].PooledFundsBalance);
        setCEFundsBalance(modifiedData[currentIndex].CEFundsBalance);
        setLvHoursBalance(modifiedData[currentIndex].LvHoursBalance);
        setCertSupportRequested(modifiedData[currentIndex].CertSupportRequested);
        setBudgetNumber(modifiedData[currentIndex].BudgetNumber);
    };

const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % modifiedData.length);

        setRegID(modifiedData[currentIndex].RegID);
        setFirstName(modifiedData[currentIndex].FirstName);
        setLastName(modifiedData[currentIndex].LastName);
        setFullName(`${lastName},${firstName}`);
        setEID(modifiedData[currentIndex].EID);
        setFTE(modifiedData[currentIndex].FTE);
        setDepartment(modifiedData[currentIndex].Department);
        setUWEmail(modifiedData[currentIndex].UWemail);
        setManagerEmail(modifiedData[currentIndex].ManagerEmail);
        setDocumentPath(modifiedData[currentIndex].Path);
        setLink(modifiedData[currentIndex].Link);
     /*   Course Info*/
        setTitle(modifiedData[currentIndex].CourseTitle);
        setVendor(modifiedData[currentIndex].vendor);
        setLocation(modifiedData[currentIndex].location);
        setStartDate(modifiedData[currentIndex].StartDate);
        setEndDate(modifiedData[currentIndex].EndDate);
        setNotes(modifiedData[currentIndex].notes);
      /*  Funds Info*/
        setCEFundsRequested(modifiedData[currentIndex].CEFundsRequested);
        setCEFundsUsed(modifiedData[currentIndex].CEFundsUsed);
        setLvHoursUsed(modifiedData[currentIndex].LvHoursUsed);
        setLvHoursAllotted(modifiedData[currentIndex].LvHoursAllotted);
        setLvHoursRequested(modifiedData[currentIndex].LvHoursRequested);
        setCEFundsAllotted(modifiedData[currentIndex].CEFundsAllotted);
        setPooledFundsAllotted(modifiedData[currentIndex].PooledFundsAllotted);
        setPooledFundsRequested(modifiedData[currentIndex].PooledFundsRequested);
        setPooledFundsUsed(modifiedData[currentIndex].PooledFundsUsed);
        setPooledFundsBalance(modifiedData[currentIndex].PooledFundsBalance);
        setCEFundsBalance(modifiedData[currentIndex].CEFundsBalance);
        setLvHoursBalance(modifiedData[currentIndex].LvHoursBalance);
        setCertSupportRequested(modifiedData[currentIndex].CertSupportRequested);
        setBudgetNumber(modifiedData[currentIndex].BudgetNumber);
    };
    //LOADING EVENTS


    

    //FORM DATA
    const formData = {
        regid,
        vendor,
        title,
        location,
        startdate,
        enddate,
        notes,
        cefundsrequested,
        lvhoursused,
        lvhoursallotted,
        cefundsallotted,
        pooledfundsallotted,
        pooledfundsrequested,
        pooledfundsused,
        cefundsused,
        cefundsbalance,
        pooledfundsbalance,
        lvhoursbalance,
        certsupportrequested,
        budgetnumber,
        lvhoursrequested, 
        UWEmail,
        link,
        documentpath,
        ManagerEmail,
        // ... (other form data)
    };


    const currentRecord = modifiedData[currentIndex];

    // Update the state variables once the data is loaded
    useEffect(() => {
        if (currentRecord) {
            setRegID(currentRecord.RegID);
            setFirstName(currentRecord.FirstName);
            setLastName(currentRecord.LastName);
            setFullName(`${currentRecord.LastName},${currentRecord.FirstName}`);
            setEID(currentRecord.EID);
            setFTE(currentRecord.FTE);
            setDepartment(currentRecord.Department);
            setUWEmail(currentRecord.UWemail);
            setManagerEmail(currentRecord.ManagerEmail);
            setDocumentPath(currentRecord.Path);
            setLink(currentRecord.Link);
            /*   Course Info*/
            setTitle(currentRecord.CourseTitle);
            setVendor(currentRecord.vendor);
            setLocation(currentRecord.location);
            setStartDate(currentRecord.StartDate);
            setEndDate(currentRecord.EndDate);
            setNotes(currentRecord.notes);
            /*  Funds Info*/
            setCEFundsRequested(currentRecord.CEFundsRequested);
            setCEFundsUsed(currentRecord.CEFundsUsed);
            setLvHoursUsed(currentRecord.LvHoursUsed);
            setLvHoursAllotted(currentRecord.LvHoursAllotted);
            setLvHoursRequested(currentRecord.LvHoursRequested);
            setCEFundsAllotted(currentRecord.CEFundsAllotted);
            setPooledFundsAllotted(currentRecord.PooledFundsAllotted);
            setPooledFundsRequested(currentRecord.PooledFundsRequested);
            setPooledFundsUsed(currentRecord.PooledFundsUsed);
            setPooledFundsBalance(currentRecord.PooledFundsBalance);
            setCEFundsBalance(currentRecord.CEFundsBalance);
            setLvHoursBalance(currentRecord.LvHoursBalance);
            setCertSupportRequested(currentRecord.CertSupportRequested);
            setBudgetNumber(currentRecord.BudgetNumber);
        

            
            setLoading(false); //All finished loading
        }
    }, [currentRecord]);


    //RETURN
    return (
        <>
            <FormDataContext.Provider value={formData }>
             <div id="headerform" class="row">
                <label htmlFor="tbName"> Name: </label>
                <InputText id="tbName" value={fullName} />
                <label htmlFor="tbEmployeeID"> Employee ID: </label>
                <InputText id="tbEmployeeID" value={EID} />
                <label htmlFor="tbFTE"> FTE%:</label>
                <InputText id="tbFTE" value={FTE} />
                <label htmlFor="tbDepartment"> Department:</label>
                <InputText id="tbDepartment" value={department} />
            </div>
            <div className="container">  
                <div className="courseform">
                        <CourseForm formData={formData}                     
                    />
                </div>
                <div className="fundsform">
                        <FundsForm formData={formData }    
                    />
                </div>                
                <div className="email-buttons">
                        <EmailButtonsForm formData={formData} />                  
                </div>
                <div className="supervisorapprovalform"></div>  
                    <SupervisorApprovalDetailsForm formData={formData } />
                </div>
                <div className="record-navigation">
                    <Button label="Previous Record"
                        onClick={goToPrevious}
                        icon={PrimeIcons.ARROW_LEFT} />                        
                     <label text ={modifiedData[currentIndex]}></label>
                    <Button label="Next Record"
                        onClick={goToNext}
                        icon={PrimeIcons.ARROW_RIGHT} />
                </div>
            </FormDataContext.Provider>
           
        </>
    );
}

export default SupervisorPage;
