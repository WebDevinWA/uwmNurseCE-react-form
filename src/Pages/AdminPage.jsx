import React, { useState, useEffect, createContext, useContext } from 'react';
//import HeaderForm from "../Components/HeaderForm";
//import Footer from "../Components/Footer"
//import { Divider } from 'primereact/divider';
import { useLocation, useParams } from "react-router-dom";

//import 'primeflex/primeflex.css';
import { useNavigate, } from "react-router-dom";

import HeaderForm from '../Components/HeaderForm';
import CourseForm from '../Components/CourseForm';
import FundsForm from '../Components/FundsForm';
import EmailButtonsForm from '../Components/EmailButtonsForm';

import axios from 'axios';
import '../Utils/gridStyles.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import SupervisorApprovalDetailsForm from '../Components/SupervisorApprovalDetailsForm';
import { PrimeIcons } from 'primereact/api';
import RetractApprovalForm from '../Components/RetractApprovalForm';

const FormDataContext = createContext();
   
    
function AdminPage() {
    //ALL CONSTS
    /*const { dept } = useParams();*/

    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    //const [APIData, setAPIData] = useState([]);
    //const [approvalmodifiedData, setApprovalModifiedData] = useState([]);

    //const [regid, setRegID] = useState();
    //const [currentIndex, setCurrentIndex] = useState(0);
    //const [vendor, setVendor] = useState();
    //const [firstName, setFirstName] = useState();
    //const [lastName, setLastName] = useState();
    //const [fullName, setFullName] = useState();
   
    //const [department, setDepartment] = useState();
    //const [title, setTitle] = useState();  
    //const [notes, setNotes] = useState();
    //const [suprvreviewed, setSuprvReviewed] = useState(true);
    //const [denyreview, setDenyReview] = useState();
    //const [mgr_ID, setMgrID] = useState();
    //const [suprv_ID, setSuprvID] = useState();
    //const [mgr_approved, setMgrApproved] = useState();
    //const [mgr_hours_approved, setMgrhoursApproved] = useState();
    //const [mgr_amt_approved, setMgrAmtApproved] = useState();
    //const [date_mgr_approval, setDateMgrApproval] = useState();
    //const [mgr_notes, setMgrNotes] = useState();
    //const [final_approved, setFinalApproved] = useState();
    //const [final_hours_approved, setFinalHoursApproved] = useState();
    //const [final_amt_approved, setFinalAmtApproved] = useState();
    //const [date_final_approval, setDateFinalApproval] = useState();
    //const [admin_notes, setAdminNotes] = useState();
    //const [pooled_funds_amount, setPooledFundsAmount] = useState();
    //const [self_pay_amt, setSelfPayAmt] = useState();   
    //const [lvhoursapproved, setLvHoursApproved] = useState(); 
    
    //const [ManagerID, SetManagerID] = useState();
    //DEBUG LINES
    console.log('line 35 from Supervisor Page - ');


    //API CALLS  
    const apiApprovalUrl = 'https://nursecedev.uwmedicine.org/api/Approvals/regId=FY20-0001';               //for testing we need to hardcode this
   /* const apiApprovalUrl = `http://localhost:3001/api/Approvals/regId=${formData.regid}`; */  //for production this will be needed to get the specific approval
   

    console.log(apiApprovalUrl);
    console.log('API for axios ' + apiApprovalUrl);

    //const getApprovalData = async () => {
    //    try {
    //        const response = await axios.get(apiUrl);
    //        const mappedData = response.data.map((item) => ({
    //            RegID: item.RegID,
    //            SupervisorID: item.suprv_ID,   
                
               
    //            Department: item.DeptUnitOrClinic,
    //            location: item.location,
               
    //            CEFundsRequested: item.purchase_CE_funds,
    //            CEFundsAllotted: item.Allotted_Funds,
    //            CEFundsUsed: item.Used_CE_Funds,
    //            CEFundsBalance: item.Used_CE_Funds,
    //            PooledFundsRequested: item.pooled_funds_amount,
    //            PooledFundsAllotted: item.Allotted_Pooled_Funds,
    //            PooledFundsUsed: item.Used_Pooled_Funds,
    //            PooledFundsBalance: item.pooled_funds_amount,
    //            LvHoursRequested: item.prof_lv_hours,
    //            AllottedFunds: item.Allotted_Funds,
    //            AllottedHours: item.Allotted_Hrs,
    //            AllottedPooledFunds: item.Allotted_Pooled_Funds,
    //            LvHoursAllotted: item.Allotted_Hrs,
    //            LvHoursUsed: item.Used_Hrs,
    //            LvHoursBalance: item.prof_lv_hrs,
    //            CertificationSupportRequested: item.cert_support_amount,
    //            BudgetNumber: item.budget_no,
    //            UWemail: item.UWEmail,
    //            NSApproved: item.NSApproved,
    //            JobTitle: item.JobTitle,
    //            DateSupervisorApproval: item.date_suprv_approval,
    //            SupervisorAmountApproved: item.suprv_amt_approved,
    //            SupervisorHoursApproved: item.suprv_hrs_approved,
    //            SupervisorNotes: item.suprv_notes,
    //            SupervisorReviewed: item.suprv_reviewed,
    //            DateManagerApproval: item.date_mgr_approval,
    //            ManagerAmountApproved: item.mgr_amt_approved,
    //            ManagerHoursApproved: item.mgr_hrs_approved,
    //            ManagerNotes: item.mgr_notes,
    //            ManagerReviewed: item.mgr_Approved,
    //            ManagerEmail: item.ManagerEmail,
    //            ManagerID: item.mgr_ID,
    //            ManagerApproved: item.mgr_approved,
    //            Denied: item.denied,
    //            FinalApproved: item.final_approved,
    //            FinalHoursApproved: item.final_hrs_approved,
    //            FinalAmtApproved: item.final_amt_approved,
    //            DateFinalApproval: item.date_final_approval,
    //            AdminNotes: item.admin_notes,
    //            PooledFundsAmount: item.pooled_funds_amount,
    //            CertSupportRequested: cert_support_amount,
    //            SelfPayAmount:self_pay_amt,


    //        }));
    //        setAPIData(response.data);
    //        setModifiedData(mappedData);
    //        setLoading(false);
    //        console.log(response.data);
    //    } catch (error) {
    //        console.error('Error:', error);
    //    }
    //};

    //const getRegistrationData = async () => {
    //    try {
    //        const response = await axios.get(apiRegistrationUrl);
    //        const mappedRegistrationData = response.data.map((item) => ({
    //            RegID: item.RegID,
    //            SupervisorID: item.suprv_ID,
    //            MgrName: item.MgrName,
    //            FirstName: item.FirstName,
    //            LastName: item.LastName,
    //            FTE: item.FTE,
    //            Department: item.DeptUnitOrClinic,
    //            location: item.location,
    //            vendor: item.vendor,
    //            CourseTitle: item.title,
    //            StartDate: item.start_date,
    //            EndDate: item.end_date,
    //            notes: item.notes,
    //            CEFundsRequested: item.purchase_CE_funds,
    //            CEFundsAllotted: item.Allotted_Funds,
    //            CEFundsUsed: item.Used_CE_Funds,
    //            CEFundsBalance: item.Used_CE_Funds,
    //            PooledFundsRequested: item.pooled_funds_amount,
    //            PooledFundsAllotted: item.Allotted_Pooled_Funds,
    //            PooledFundsUsed: item.Used_Pooled_Funds,
    //            PooledFundsBalance: item.pooled_funds_amount,
    //            LvHoursRequested: item.prof_lv_hours,
    //            AllottedFunds: item.Allotted_Funds,
    //            AllottedHours: item.Allotted_Hrs,
    //            AllottedPooledFunds: item.Allotted_Pooled_Funds,
    //            LvHoursAllotted: item.Allotted_Hrs,
    //            LvHoursUsed: item.Used_Hrs,
    //            LvHoursBalance: item.prof_lv_hrs,
    //            CertificationSupportRequested: item.cert_support_amount,
    //            BudgetNumber: item.budget_no,
    //            UWemail: item.UWEmail,
    //            NSApproved: item.NSApproved,
    //            JobTitle: item.JobTitle,
    //            DateSupervisorApproval: item.date_suprv_approval,
    //            SupervisorAmountApproved: item.suprv_amt_approved,
    //            SupervisorHoursApproved: item.suprv_hrs_approved,
    //            SupervisorNotes: item.suprv_notes,
    //            SupervisorReviewed: item.suprv_reviewed,
    //            DateManagerApproval: item.date_mgr_approval,
    //            ManagerAmountApproved: item.mgr_amt_approved,
    //            ManagerHoursApproved: item.mgr_hrs_approved,
    //            ManagerNotes: item.mgr_notes,
    //            ManagerReviewed: item.mgr_Approved,
    //            ManagerEmail: item.ManagerEmail,
    //            ManagerID: item.mgr_ID,
    //            ManagerApproved: item.mgr_approved,
    //            Denied: item.denied,
    //            FinalApproved: item.final_approved,
    //            FinalHoursApproved: item.final_hrs_approved,
    //            FinalAmtApproved: item.final_amt_approved,
    //            DateFinalApproval: item.date_final_approval,
    //            AdminNotes: item.admin_notes,
    //            PooledFundsAmount: item.pooled_funds_amount,
    //            CertSupportRequested: cert_support_amount,
    //            SelfPayAmount: self_pay_amt,


    //        }));
    //        setAPIData(response.data);
    //        setModifiedData(mappedData);
    //        setLoading(false);
    //        console.log(response.data);
    //    } catch (error) {
    //        console.error('Error:', error);
    //    }
    //};


    useEffect(() => {
        setLoading(true);
        //getApprovalData();
        //getRegistrationData();
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
        alert(`TODO - pass this value to the Delete API to delete the following review `);
    };
    const handleReadButtonClick = (reviewRegID) => {
        //setRegIDData(reviewRegID);
        //console.log(`Selected Record to review is  ${reviewRegID}`);
        //navigate(`/ManagerPage/${reviewRegID}`); //for ver 6
        //history.push('/ManagerPage/${reviewRegID}'); ver 5 only        
    };

    //const EmailManagerlRequester = () => {
    //    alert(`opens up Outlook and email the requestor`);
    //};

    //const handleButtonClickEmailManager = () => {
    //    alert(`opens up Outlook and email the Manager`);
    //}

    //BUTTON EVENTS

    //const goToPrevious = () => {
    //    setCurrentIndex((prevIndex) =>
    //        prevIndex === 0 ? modifiedData.length - 1 : prevIndex - 1
    //    );
    //    setFirstName(modifiedData[currentIndex].FirstName);
    //    setLastName(modifiedData[currentIndex].LastName);
    //    setFullName(`${lastName},${firstName}`);
    //    setEID(modifiedData[currentIndex].EID);
    //    setFTE(modifiedData[currentIndex].FTE);
    //    setDepartment(modifiedData[currentIndex].Department);
    //    setRegID(modifiedData[currentIndex].RegID);
    //    setTitle(modifiedData[currentIndex].CourseTitle);
    //    setVendor(modifiedData[currentIndex].vendor);
    //    setLocation(modifiedData[currentIndex].location);
    //    setStartDate(modifiedData[currentIndex].StartDate);
    //    setEndDate(modifiedData[currentIndex].EndDate);
    //    setNotes(modifiedData[currentIndex].notes);
    //    setCEFundsRequested(modifiedData[currentIndex].CEFundsRequested);
    //    setLvHoursUsed(modifiedData[currentIndex].LvHoursUsed);
    //    setLvHoursAllotted(modifiedData[currentIndex].Allotted_Hrs);
    //    setLvHoursRequested(modifiedData[currentIndex].prof_lv_hours);
    //    setCEFundsAllotted(modifiedData[currentIndex].CEFundsAllotted);
    //    setPooledFundsAllotted(modifiedData[currentIndex].PooledFundsAllotted);
    //    setPooledFundsRequested(modifiedData[currentIndex].PooledFundsRequested);
    //    setCEFundsUsed(modifiedData[currentIndex].CEFundsUsed);
    //    setPooledFundsUsed(modifiedData[currentIndex].PooledFundsUsed);
    //    setPooledFundsBalance(modifiedData[currentIndex].PooledFundsBalance);
    //    setCEFundsBalance(modifiedData[currentIndex].CEFundsBalance);
    //    setLvHoursBalance(modifiedData[currentIndex].LvHoursBalance);
    //    setCertSupportRequested(modifiedData[currentIndex].CertificationSupportRequested);

    //};
    //const goToNext = () => {
    //    setCurrentIndex((prevIndex) => (prevIndex + 1) % modifiedData.length);
    //    setFirstName(modifiedData[currentIndex].FirstName);
    //    setLastName(modifiedData[currentIndex].LastName);
    //    setFullName(`${lastName},${firstName}`);
    //    setEID(modifiedData[currentIndex].EID);
    //    setFTE(modifiedData[currentIndex].FTE);
    //    setDepartment(modifiedData[currentIndex].Department);
    //    setRegID(modifiedData[currentIndex].RegID);
    //    setTitle(modifiedData[currentIndex].CourseTitle);
    //    setVendor(modifiedData[currentIndex].vendor);
    //    setLocation(modifiedData[currentIndex].location);
    //    setStartDate(modifiedData[currentIndex].StartDate);
    //    setEndDate(modifiedData[currentIndex].EndDate);
    //    setNotes(modifiedData[currentIndex].notes);
    //    setCEFundsRequested(modifiedData[currentIndex].CEFundsRequested);
    //    setCEFundsUsed(modifiedData[currentIndex].CEFundsUsed);
    //    setLvHoursUsed(modifiedData[currentIndex].LvHoursUsed);
    //    setLvHoursAllotted(modifiedData[currentIndex].Allotted_Hrs);
    //    setLvHoursRequested(modifiedData[currentIndex].prof_lv_hours);
    //    setCEFundsAllotted(modifiedData[currentIndex].CEFundsAllotted);
    //    setPooledFundsAllotted(modifiedData[currentIndex].PooledFundsAllotted);
    //    setPooledFundsRequested(modifiedData[currentIndex].PooledFundsRequested);
    //    setPooledFundsUsed(modifiedData[currentIndex].PooledFundsUsed);
    //    setPooledFundsBalance(modifiedData[currentIndex].PooledFundsBalance);
    //    setCEFundsBalance(modifiedData[currentIndex].CEFundsBalance);
    //    setLvHoursBalance(modifiedData[currentIndex].LvHoursBalance);
    //    setCertSupportRequested(modifiedData[currentIndex].CertificationSupportRequested);
    //};
    //LOADING EVENTS
    if (loading) {
        return <p>Loading Form...</p>;
    }

    //FORM DATA
    //const formData = {
    //    regid,
    //    ManagerID,
    //    ManagerApproved,
    //    Denied,
    //    FinalApproved,
    //    FinalHoursApproved,
    //    FinalAmtApproved,
    //    DateFinalApproval,
    //    AdminNotes,
    //    PooledFundsAmount,
    //    CertSupportRequested,
    //    SelfPayAmount,

    //    title,
    //    location,
    //    startdate,
    //    enddate,
    //    notes,
    //    cefundsrequested,
    //    lvhoursused,
    //    lvhoursallotted,
    //    cefundsallotted,
    //    pooledfundsallotted,
    //    pooledfundsrequested,
    //    pooledfundsused,
    //    cefundsused,
    //    cefundsbalance,
    //    pooledfundsbalance,
    //    lvhoursbalance,
    //    certsupportrequested,

    //    // ... (other form data)
    //};

    //RETURN
    return (
        <>
            <FormDataContext.Provider >
            
                <div >                     
                    <RetractApprovalForm />
                    </div>    
               
                {/*<div className="record-navigation">*/}
                {/*    <Button label="Previous Record"*/}
                {/*        onClick={goToPrevious}*/}
                {/*        icon={PrimeIcons.ARROW_LEFT} />*/}

                {/*    <Button label="Next Record"*/}
                {/*        onClick={goToNext}*/}
                {/*        icon={PrimeIcons.ARROW_RIGHT} />*/}
                {/*</div>*/}
            </FormDataContext.Provider>

        </>
    );
}




export default AdminPage;
