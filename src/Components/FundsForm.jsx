import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';


//const props = {RequestedCE:150.00,RequestedPooled:0.00,RequestedLvHours:10.00,
//               AllocatedCE:250.00,AllocatedPooled:250.00,AllocatedLvHours:24.00,
//               UsedCE:0.00,UsedCE:0.00,UsedLvHours:0.00,
//               BalanceCE:250.00,BalancePooled:250.00,BalanceLvHours:24.00,
//               CertificationSupportRequested:0.00
//              };





//const FundsForm = ({ cefundsrequested, lvhoursused, lvhoursallotted, lvhoursrequested, lvhoursbalance, cefundsbalance, pooledfundsbalance, cefundsallotted, cefundsused, pooledfundsallotted, pooledfundsrequested, pooledfundsused, certificationsupportrequested }) => {  
const FundsForm = ({ formData }) => {

    console.log("Funds form data only", formData)

    const [requestedCE, setRequestedCE] = useState();
    const [allocatedCE, setAllocatedCE] = useState();
    const [usedCE, setUsedCE] = useState();
    const [balanceCE, setBalanceCE] = useState();
    const [certificationSupportRequested, setCertificationSupportRequested] = useState();
    const [requestedPooled, setRequestedPooled] = useState();
    const [requestedLvHours, setRequestedLvHours] = useState();
    const [allocatedPooled, setAllocatedPooled] = useState();
    const [allocatedLvHours, setAllocatedLvHours] = useState();
    const [usedLvHours, setUsedLvHours] = useState();
    const [balanceLvHours, setBalanceLvHours] = useState();
    const [usedPooled, setUsedPooled] = useState();
    const [balancePooled, setBalancePooled] = useState();

    return (
        <div >
            {/*  <div className="Funds-form">  */}
            <h3>Funds/Hours:</h3>
            <table class="TableBackground">
                <thead>
                    <tr class="boldblack">
                        <th></th>
                        <th>
                            Funds ($)
                        </th>
                        <th>
                            Pooled ($)
                        </th>
                        <th>
                            Lv Hours (hrs)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Requested:
                        </td>
                        <td>
                            <InputText id="tbRequestedCE" value={formData.cefundsrequested} />
                        </td>
                        <td>
                            <InputText id="tbRequestedPooled" value={formData.pooledfundsrequested} />
                        </td>
                        <td>
                            <InputText id="tbRequestedLvHours" value={formData.lvhoursrequested} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Allocated:
                        </td>
                        <td>
                            <InputText id="tbAllottedCE" value={formData.cefundsallotted} />
                        </td>
                        <td>
                            <InputText id="tbAllottedPooled" value={formData.pooledfundsallotted} />
                        </td>
                        <td>
                            <InputText id="tbAllottedLvHours" value={formData.lvhoursallotted} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Used:
                        </td>
                        <td>
                            <InputText id="tbUsedCE" value={formData.cefundsused} />
                        </td>
                        <td>
                            <InputText id="tbUsedPooled" value={formData.pooledfundsused} />
                        </td>
                        <td>
                            <InputText id="tbUsed" value={formData.lvhoursused} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Balance:
                        </td>
                        <td>
                            <InputText id="tbBalanceCE" value={formData.cefundsbalance} />
                        </td>
                        <td>
                            <InputText id="tbBalancePooled" value={formData.pooledfundsbalance} />
                        </td>
                        <td>
                            <InputText id="tbBalanceLvHours" value={formData.lvhoursbalance} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table class="TableBackground">
                <tbody>
                    <tr>
                        <td>
                            Certification Support Requested:
                        </td>
                        <td>
                            <InputText id="tbCertificationSupportRequested" value={formData.certsupportrequested} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    );

}

export default FundsForm;

