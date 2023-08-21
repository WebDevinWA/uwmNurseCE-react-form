import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Checkbox } from 'primereact/checkbox';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import moment from 'moment';


function RetractApprovalForm({ formData }) {
    const [approvalData, setApprovalData] = useState();

    const { register, handleSubmit, setValue, watch, getValues } = useForm();
    const fetchURL = `https://nursecedev.uwmedicine.org/api/Approval?RegID=${formData.RegID}`;

    const [reviewed, setReviewed] = useState(true);
    const [denyreview, setDenyReview] = useState();
    const [mgr_ID, setMgrID] = useState();
    const [mgr_approved, setMgrApproved] = useState();
    const [mgr_hours_approved, setMgrhoursApproved] = useState();
    const [mgr_amt_approved, setMgrAmtApproved] = useState();
    const [date_mgr_approval, setDateMgrApproval] = useState();
    const [mgr_notes, setMgrNotes] = useState();
    const [final_approved, setFinalApproved] = useState();
    const [final_hours_approved, setFinalHoursApproved] = useState();
    const [final_amt_approved, setFinalAmtApproved] = useState();
    const [date_final_approval, setDateFinalApproval] = useState();
    const [admin_notes, setAdminNotes] = useState();
    const [pooled_funds_amount, setPooledFundsAmount] = useState();
    const [self_pay_amt, setSelfPayAmt] = useState();


    const handleGetApproval = async () => {
        try {
            const response = await axios.get(fetchURL);
           // setLoading(false);
            const approvalmodifiedData = response.data.map((item, index) => ({
                id: index + 1,
                ...item,
            }));
            //set the data to the modifieddata using the item index as the id
            setApprovalData(approvalmodifiedData);
            console.log(approvalmodifiedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    //const handleGetApproval = (data) => {
    //    try {
    //        const approvalFormData = {
    //            RegID: getValues("RegID"),
    //            suprv_reviewed: reviewed,
    //            date_suprv_approval: getValues("DateApproved"),
    //            suprv_ID: getValues("SupervisorAMCUsername"),
    //            suprv_hrs_approved: getValues("professionalLeaveHours"),
    //            suprv_amt_approved: getValues("cedollars"),
    //            cert_support_amount: getValues("certificationsupportdollars"),
    //            suprv_notes: getValues("supervisornotes"),
    //            denied: getValues("denyReview"),
    //            budget_no: getValues("budget"),
    //            mgr_ID: mgr_ID,
    //            mgr_approved: mgr_approved,
    //            mgr_hours_approved: mgr_hours_approved,
    //            mgr_amt_approved: mgr_amt_approved,
    //            date_mgr_approval: date_mgr_approval,
    //            mgr_notes: mgr_notes,
    //            final_approved: final_approved,
    //            final_hours_approved: final_hours_approved,
    //            final_amt_approved: final_amt_approved,
    //            date_final_approval: date_final_approval,
    //            admin_notes: admin_notes,
    //            pooled_funds_amount: pooled_funds_amount,
    //            self_pay_amt: self_pay_amt,
    //        }
    //        // const response = await axios.post('https://nursecedev.uwmedicine.org/api/Approval', approvalFormData);
    //        // console.log("API response " + response.data);
    //        console.log("API POST DATA is ", approvalFormData);
    //    } catch (error) {
    //        console.error("There was an error in saving to the database", error);
    //    }
    //};


    const onRetractApproval = (data) => {
        try {
            const retractFormData = {
                RegID: getValues("RegID"),
                suprv_reviewed: reviewed,
                date_suprv_approval: "",
                suprv_ID: getValues("SupervisorAMCUsername"),
                suprv_hrs_approved: 0,
                suprv_amt_approved: 0,
                cert_support_amount: 0,
                suprv_notes: "",
                denied: denyreview,
                budget_no: "",
                mgr_ID: mgr_ID,
                mgr_approved: "",
                mgr_hours_approved: 0,
                mgr_amt_approved: 0,
                date_mgr_approval: "",
                mgr_notes: "",
                final_approved: 0,
                final_hours_approved: 0,
                final_amt_approved: 0,
                date_final_approval: 0,
                admin_notes: "",
                pooled_funds_amount: 0,
                self_pay_amt: 0,


            }
            // const response = await axios.post('https://nursecedev.uwmedicine.org/api/Approvals?regId=FY20-0002', retractFormData);
            // console.log("API response " + response.data);
            console.log("API POST DATA for Supervisor Retraction is ", retractFormData);
        } catch (error) {
            console.error("There was an error in saving to the database", error);
        }
    };

    const [currentDate, setCurrentDate] = useState();

    return (
        <div className="supervisorapprovalform">
            <h3>Fill in the RegID and click here to get the information</h3>
            <Button id="btnRetractSupervisorApproval" onClick={handleGetApproval()} label="Get Supervisor Approval"></Button>    
            <div class="TableBackground">
                <table class="TableBackground">                   
                    <tbody>
                        <tr>
                            <td>
                                RegID:
                            </td>
                            <td>
                                <InputText id="tbRegID"
                                    value={formData.RegID} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Requesters Name:
                            </td>
                            <td>
                                <InputText id="tbRequesterName"
                                    value={formData.RegID} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Department:
                            </td>
                            <td>
                                <InputText id="tbDepartment"
                                    value={formData.RegID} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Course Title:
                            </td>
                            <td>
                                <InputText id="tbCourseTitle"
                                    value={formData.title} />
                            </td>
                        </tr>
                        <Divider />
                        <tr>
                            <td>
                                Approvers ID:
                            </td>
                            <td>
                                <InputText id="tbApproverID"
                                    value={formData.MgrID} />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Hours Approved:
                            </td>
                            <td>
                                <InputText id="tbHoursApproved" value={formData.professionalleavehours} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Date Approved:
                            </td>
                            <td>
                                <InputText id="tbDateApproved" Value={formData.date_aaproved } />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Supervisor Notes:
                            </td>
                            <td>
                                <InputTextarea
                                    id="taSupervisorNotes"
                                    aria-label="minimum height"
                                    minRows={3}
                                    value={formData.suprv_notes }
                                    
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>  
            </div>
            <Button id="btnRetractSupervisorApproval" label="Retract Supervisor Approval"></Button>
        </div>
       
    );

};

export default RetractApprovalForm;

