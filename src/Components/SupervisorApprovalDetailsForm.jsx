import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
//import { Checkbox } from "primereact/checkbox";
import { useForm } from 'react-hook-form';
import moment from 'moment';
import axios from 'axios';


//type FormValues = {
//    RegID: string;// "FY20-0003",    
//    suprv_reviewed: boolean; // true,
//    suprv_hrs_approved: number; // 8,
//    suprv_amt_approved: number; // 0,
//    date_suprv_approval: date; // null,
//    suprv_notes: string; // "Supervisor",
//    mgr_ID: number; // 417,
//    budget_number: string; // "99-9999",
//    mgr_approved: boolean; // false,
//    mgr_hours_approved: number; // 0,
//    mgr_amt_approved: number; // 0,
//    date_mgr_approval: date; // null,
//    mrg_notes: string; // "Manager notes",
//    denied: boolean; // false,
//    final_approved: boolean; // false,
//    final_hrs_approved: number; // 0,
//    final_amt_approved: number; // 0,
//    date_final_approval: date; // null,
//    admin_notes: string;// "Administrator notes",
//    pooled_funds_amount: number; // 0,
//    cert_support_amount: number; // 0,
//    self_pay_amt: number; // 0  
//}
//suprv_ID: string; // "cooperd1",
function SupervisorApprovalDetailsForm({ formData }) {
    const [currentDate, setCurrentDate] = useState();
    

    console.log("Supervisor Approval Details form data only", formData)
    const approvalform = useForm ({
        defaultValues:{
            RegID: formData.regid,
            suprv_ID: "kwhite25",
            suprv_reviewed: true,                 //required to be true 
            suprv_hrs_approved: 0,                // 8,
            suprv_amt_approved: 0, 
            date_suprv_approval:currentDate,      // null,
            suprv_notes: "UPDATED BY CODE",       // "Supervisor",
            mgr_ID: 408,                          // 417,    
            budgetnumber: formData.budgetnumber,  //budget_number: "99-9999"
            mgr_approved: null,                   // false,
            mgr_hours_approved: 0,                // 0,
            mgr_amt_approved: 0,                  // 0,
            date_mgr_approval: null,              // null,
            mrg_notes: "UPDATED VIA CODE",        // "Manager notes",  
            denied: false,                        //denied and reviewed can be checked
            final_approved: false,                // false,
            final_hrs_approved: 0,                // 0,
            final_amt_approved: 0,                // 0,
            date_final_approval: null,            // null,
            admin_notes: "",                      // "Administrator notes",
            pooled_funds_amount: 0,               // 0,
            cert_support_amount: 0,               // 0,
            self_pay_amt: 0           
           
        }, //// UPDATE: this is required to be PUT since there is no PATCH
    });

    const { register, handleSubmit, setValue, watch, getValues, onError, reset} = useForm();


    //HANDLE EVENTS


    const handleDenyCheckboxChange = (e) => {
       alert("I was denied")
        //console.log("deny checkbox is ", deniedRef);
    }

    const onRetractApproval = (e) => {
        e.preventDefault();
        getCurrentDate();
        setTimeout(() => {
            //reset(); // Reset the form after successful submission
            alert("Retraction successful");
        }, 1000);
        const retractFormData = {
            RegID: formData.regid,                                  //string
            suprv_ID: getValues("SupervisorAMCUsername"),
            suprv_reviewed: true,                                   //bool
            suprv_hrs_approved: getValues("professionalLeaveHours"), //int
            suprv_amt_approved: 0,
            date_suprv_approval: currentDate,
            suprv_notes: "Retracted",
            mgr_ID: 408,                                            //int
            budget_no: formData.budgetnumber,                       //string
            mgr_approved: false,                                    //bool 
            mgr_hours_approved: 0,                                  //int
            mgr_amt_approved: 0,                                    //decimal
            date_mgr_approval: null,                                //short date string
            mrg_notes: " ",                                         //string
            denied: getValues("denied"),                            //bool
            final_approved: 0,                                      //bool
            final_hrs_approved: 0,                                  //int
            final_amt_approved: 0,                                  //decimal
            date_final_approval: null,                              //short date string
            admin_notes: "RETRACTION TEST kw",                              //string
            pooled_funds_amount: 0,                                         //int
            cert_support_amount: getValues("certificationsupportdollars"),  //int REQUIRED DB CANNOT BE NULL - NEED TO UPDATE API DOCS :-(
            self_pay_amt: 0,                                                //int
        }

        const customHeaders = {
            'Content-Type': 'application/json',
            //'Authorization': 'jwt token here?'  //SOON YES - John Aug 12
        }

        const approvalurl = `https://nursecedev.uwmedicine.org/api/Approvals/?regId=${retractFormData.RegID}`;
        console.log('RETRACT DATA for this URL is', approvalurl);
        console.log('RETRACT DATA is', retractFormData);

        axios.put(approvalurl, retractFormData, { headers: customHeaders })
                             
       
    };


    const onSubmit = (data) => {
        setTimeout(() => {          
            //reset(); // Reset the form after successful submission
            alert("Saved to the database");
        }, 1000);

        const approvalFormData = {
            RegID: formData.regid,                                         //string
            suprv_ID: getValues("SupervisorAMCUsername") ,
            suprv_reviewed: getValues("reviewed"),                         //bool
            suprv_hrs_approved: getValues("professionalLeaveHours"),       //int
            suprv_amt_approved: getValues("cedollars"),
            date_suprv_approval: currentDate,
            suprv_notes: getValues("supervisornotes") ,
            mgr_ID: 408,
            budget_no: formData.budgetnumber,                              //string
            mgr_approved:  false,                                          //bool 
            mgr_hours_approved: 0,                                         //int
            mgr_amt_approved: 0 ,                                          //decimal
            date_mgr_approval: null,                                       //short date string
            mrg_notes: " " ,                                               //string
            denied: getValues("denied"),                                   //bool
            final_approved: 0,                                             //bool
            final_hrs_approved: 0,                                         //int
            final_amt_approved: 0,                                         //decimal
            date_final_approval: null,                                     //short date string
            admin_notes: "this is approved",                               //string
            pooled_funds_amount: 0,                                        //int
            cert_support_amount: getValues("certificationsupportdollars"), //int
            self_pay_amt: 0,                                               //int
        }


        const customHeaders = {
            'Content-Type': 'application/json',
            //'Authorization': 'jwt token here?'  //SOON YES - John Aug 12
        }

        const approvalurl = `https://nursecedev.uwmedicine.org/api/Approvals/?regId=${approvalFormData.RegID}`;
            console.log('THIS IS THE URL THAT WORKS IN POSTMAN BUT NOT IN REACT CODE', approvalurl);
            console.log(approvalFormData);
            
            axios.put(approvalurl, approvalFormData, { headers: customHeaders });

    };

       const getCurrentDate = () => {
                var currentDate = moment().format('MM/DD/YYYY');                
                setCurrentDate(currentDate);
                console.log("The current date is ", currentDate);                 
            };

        useEffect(() => {            
            getCurrentDate();
        }, []);

       
        return (
            <div className="supervisorapprovalform">
                <h2>Supervisor Approval Details</h2>  
               
                <form name="approvalform" onSubmit={handleSubmit(onSubmit, onError)}>
                    <div className="row">
                        <label className="label" htmlFor="tbRegID">RegID</label>
                        <InputText
                            id="tbRegID"
                            name="RegID" 
                            required
                            defaultValue={formData.regid}
                            {...register("RegID")}
                        />
                        <label className="label" htmlFor="tbBudget">Budget</label>
                        <InputText
                            id="tbBudget"
                            name="Budget"
                            required
                            readOnly
                            value={formData.budgetnumber}
                            {...register("Budget")}
                        />
                        <label className="label" htmlFor="cbReviewed">Reviewed:</label>
                        <input
                            type="checkbox"
                            id="cbReviewed"
                            name="reviewed"
                            defaultChecked={true}
                            {...register("reviewed")}                                                    
                        />
                        <label className="label" htmlFor="tbDateApproved">Date Approved:</label>
                        <InputText
                            type="text"
                            id="tbDateApproved"
                            name="DateApproved"
                            defaultValue={currentDate}
                            {...register("DateApproved")}
                        />
                    </div>
                    <h4 className="redbold">PLEASE ANSWER THE FOLLOWING:</h4>
                    <div className="row">
                        <label className="label" htmlFor="tbSupervisorAMCUsername">Supervisor AMC user name:</label>
                        <InputText
                            id="tbSupervisorAMCUsername"
                            name="SupervisorAMCUsername"
                            {...register("SupervisorAMCUsername")}

                        />
                        <label className="label italicbold">(enter first part of UW e-mail account)</label>
                    </div>
                    <div className="row">
                        <div className="flex1">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="underlinebold">Category</th>
                                        <th className="underlinebold">Amount Recommended</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label htmlFor="tbProfessionalLeaveHours">Professional Leave Hours:</label>
                                        </td>
                                        <td>
                                            <InputText
                                                type="number"
                                                id="tbProfessionalLeaveHours"
                                                name="professionalLeaveHours"
                                                defaultValue={0}
                                                {...register("professionalLeaveHours")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="tbCEDollars">CE Dollars: $</label>
                                        </td>
                                        <td>
                                            <InputText
                                                type="number"
                                                id="tbCEDollars"
                                                name="cedollars"
                                                defaultValue={0.00}
                                                {...register("cedollars")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="tbCertificationSupportDollars">Certification Support Dollars: $</label>
                                        </td>
                                        <td>
                                            <InputText
                                                type="number"
                                                id="tbCertificationSupportDollars"
                                                name="certificationsupportdollars"
                                                defaultValue={0.00}                                           
                                                {...register("certificationsupportdollars")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="tbNotes">Notes: </label>
                                        </td>
                                        <td>
                                            <InputText
                                                type="text"
                                                id="tbNotes"
                                                name="supervisornotes"
                                                {...register("supervisornotes")}
                                            />
                                        </td>
                                    </tr>                               
                                </tbody>
                            </table>
                        </div>
                        <div className="flex2">
                            <h6>OR</h6>
                            <label className="label" htmlFor="cbDenied">Deny Request:</label>
                            <input
                                type="checkbox"
                                id="cbDenied"
                                name="denied"    
                                defaultValue={true}
                                {...register("denied")}
                            />
                        </div>
                    </div>
                    <Button id="submitApproval"   icon="pi pi-save" type="submit">Save and Submit</Button>
                   
                    <Button id="submitRetraction" icon="pi pi-undo" onClick={onRetractApproval}>Retract Approval</Button>
                </form>
               
            </div>
        );
    }


export default SupervisorApprovalDetailsForm;
