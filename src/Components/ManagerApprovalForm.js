import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';
//import 'primeflex/primeflex.css';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';



//const props = {
//  RegID: "FY23-0895",  
//  date_approved: "1/17/2023",
//  supervisorAMCusername: "kwhite25",
//  professionallvhours: 0,
//  cedollars: 0.0,
//  certificationSupport: 0.0,
//  DenyRequest: false  
//};

function SupervisorApprovalDetailsForm() {

    const [regID, setRegID] = useState();
    const [dateApproved, setDateApproved] = useState();
    const [supervisorAMCusername, setSupervisorAMCusername] = useState("Eric Test");
    const [professionalLvHours, setProfessionalLvHours] = useState("");
    const [ceDollars, setCeDollars] = useState("");
    const [certificationSupport, setCertificationSupport] = useState("");
    const [reviewedRequest, setReviewRequest] = useState(true);
    const [denyRequest, setDenyRequest] = useState(false);
    const [notes, setNotes] = useState("");
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        // Function to get the current date in the desired format (YYYY-MM-DD)
        const getCurrentDate = () => {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        };

        const formattedDate = getCurrentDate();
        setCurrentDate(formattedDate);
    }, []); // Run this effect only once on component mount


    return (
        <>
              <div class="SupervisorApprovalForm">
                        <h3>Manager Approvals</h3>
                <form >
                        <div class="row">
                             <label class="label" htmlFor="tbManager">Manager</label>
                             <InputText class type="text" id="tbManager" name="tbManager" />
                             <label class="label" htmlFor="tbBudgetNumber">Budget number: </label>
                             <InputText type="text" id="tbBudgetNumber" name="tbBudgetNumber" />   
                             <label class="label" htmlFor="tbApprovalDate">Approval Date:</label>
                             <InputText type="text" id="tbApprovalDate" name="tbApprovalDate"  />                             
                        </div>
                    <h4 class="redbold">PLEASE ANSWER THE FOLLOWING:</h4>
                    <div class="row">
                        <h6>Supervisor AMC user name:</h6>
                        <InputText  type="text"  id="tbSupervisorAMCUsername"  value={supervisorAMCusername} />
                        <h6 class="italicbold">(enter first part of UW e-mail account)</h6>
                    </div>
                    <div class="row">
                    <div class="flex1">
                    <table>
                        <thead>
                            <th class="underlinebold">
                            Category
                            </th>
                            <th class="underlinebold">
                            Amount Recommended
                            </th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                               Professional Leave Hours:
                               </td>
                                <td>
                                    <InputText type="text" id="tbProfessionalLeaveHours"  />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    CE Dollars
                                </td>
                                <td>
                                    <InputText type="text" id="tbCEDollars" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Certification Support Dollars
                                </td>
                                <td>
                                    <InputText type="text" id="tbCertificationSupportDollars"  />
                                </td>
                            </tr>
                            <tr>
                                <td>

                                </td>
                                
                            </tr>
                          
                        </tbody>
                     </table>
                    </div>
                    <div class="flex2">
                        <h6>OR</h6>
                        <label class="label" for="cbDeny">Deny Request:</label>
                        <Checkbox
                            id="cbDeny"
                            checked={denyRequest}
                        />

                        </div>
                    </div>

                    <div class="row">
                        <h6>Notes</h6>
                        <InputText type="text" id="tbCertificationSupportDollars"  />
                    </div>   
                </form>                   
                       
                </div>
               <div class="row">
                <Button id="submitApproval" >Deactivate CE Record </Button>
                <Button id="submitApproval" >Save and Submit </Button>                
            </div>
        </>
        
    );
}

export default SupervisorApprovalDetailsForm;
