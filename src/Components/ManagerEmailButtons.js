import React from 'react';
import { Button } from 'primereact/button';
function EmailButtonsForm() {
    return (React.createElement("div", null,
        React.createElement("br", null),
        React.createElement("div", { id: "btnGroup" },
            React.createElement(Button, { id: "emailRequester" }, "Click to email requester"),
            React.createElement(Button, { id: "viewRequest" }, "Click to view request"),
            React.createElement(Button, {  id: "emailSupervisor" }, "click to email supervisor"))));
}
export default EmailButtonsForm;
