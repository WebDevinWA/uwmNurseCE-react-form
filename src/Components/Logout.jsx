import React, { useEffect } from 'react';
//import Auth from "../util/Auth";
//import {executeUserLogoutService} from "../services/UserService";

/**
 * Logout.js - the logout page.
 *
 * @author Penglong Wang
 * @version 1.0
 * @since 2023-03-17
 */
function Logout() {
    useEffect(() => {
      /*   executeUserLogoutService()
            .then()
            .catch(error => {
                console.log("Logout process got error: " + error);
            })

        // Deactivate the session.
        Auth.deauthenticateUser();
        window.location.href = '/'; */
    }, []);
    return (
        <>
            <h3 style={{paddingLeft: 38}}>Thank you for using the CE Registration App! You have been signed out.</h3>
        </>
    );
}

export default Logout;