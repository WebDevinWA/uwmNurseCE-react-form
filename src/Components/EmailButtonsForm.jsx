import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';


function EmailButtonsForm({ formData, currentIndex }) {

    const UWrecipient = formData.UWEmail;
    const Mgrrecipient = formData.ManagerEmail;

    // I found the correct data in SQL. Leaving this here for now so in version 2 we clean up the database.
    //function extractEmailAddress(text) {
    //    const emailRegex = /mailto:([^?]+)/;
    //    const matches = text.match(emailRegex);

    //    if (matches && matches.length >= 2) {
    //        const emailAddress = matches[1];
    //        console.log('the manager email is now correct', emailAddress)
    //        return emailAddress;
    //    }

    //    return null;
    //}


    console.log("email buttons", formData)
    
        const UWsubject = 'Needs additional information';
        const UWbody = 'Please submit additional information in your recent CE Registration';
        const UWmailtoLink = `mailto:${UWrecipient}?subject=${UWsubject}&body=${UWbody}`;

        console.log("sending email to ", UWmailtoLink);

      //  const Manageremailtext = formData.ManagerEmail;

        const Mgrsubject = 'Needs additional information';
        const Mgrbody = 'Please submit additional information in your recent CE Registration';
        const MgrmailtoLink = `mailto:${Mgrrecipient}?subject=${Mgrsubject}&body=${Mgrbody}`;

        console.log("sending email to manager", MgrmailtoLink);
    
  


    return (
        <>
            <div id="btnGroup" >
                <Button
                    label="Click to email requester"
                    icon="pi pi-envelope"
                    onClick={() => window.location.href = UWmailtoLink}
                    id="emailRequester"
                />
                <Button
                    label="Click to email Nurse Manager"
                    icon="pi pi-envelope"
                    onClick={() => window.location.href = MgrmailtoLink}
                    id="emailManager"
                />
            </div>
        </>
    );
}

export default EmailButtonsForm;