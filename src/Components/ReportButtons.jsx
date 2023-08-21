import React, { useState } from 'react';
import { Button } from 'primereact/button';

function ReportButtons() {

    const [reviewData, setReviewData] = useState([]);

    const fetchURL = 'http://nursecedev.uwmedicine.org/api/FYReviews?fy=FY23';
    //const fetchURL = 'http://localhost:3001/api/SupervisorDeptReviewCounts?fy=FY22';

    

        function handleRetractSupervisorApprovalClick() { 
             console.log('TODO handleRetractSupervisorApprovalClick');
            }  

        function handleViewReportClick() { 
            console.log('TODO handleViewReportClick');
                }  

        function handleManagerReportClick() { 
            console.log('TODO handleManagerReportClick');
                    }  

    return (
        <div>
            <br />
            <div id="btnGroup" >
                <h2 >Requests</h2>
                <Button  id="btnReviewRequests" >   Review Requests   </Button>
                <br />
                <br />
                <h2 >Approvals</h2>
                <Button
                    href="https://public.tableau.com/app/profile/kris.white1511"
                    target="_blank"
                    rel="noopener noreferrer"
                   
                    id="btnRetractSupvervisorApprovals"
                    onClick={handleRetractSupervisorApprovalClick}>Retract Supervisor Approvals</Button>
                <br />
                <br />
                <h2 >Reports</h2>
                <Button
                    href="https://public.tableau.com/app/profile/kris.white1511"
                    target="_blank"
                    rel="noopener noreferrer"
                  
                    id="btnReviewRequests"
                    onClick={handleViewReportClick}>View Report</Button>
                <br />
                <br />
                <Button
                    href="https://public.tableau.com/app/profile/kris.white1511"
                    target="_blank"
                    rel="noopener noreferrer"
                    
                    id="btnManagerReport"
                    onClick={handleManagerReportClick}>Manager Report</Button>
            </div>
        </div>

    );
}

export default ReportButtons;