import React, { useState } from 'react';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import 'primeicons/primeicons.css';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';

//import {executeUserLoginService} from "./UserService"
//import { createTheme, ThemeProvider } from '@mui/material/styles'
//import Auth from '../util/Auth'


function LoginPage() {
    //  const handleSubmit = (e) => {
    //    e.preventDefault();
    //  };

    return (
        <div className="Container" style={ {marginTop:'200px' } }>
            <div className="centeredform">
                <form className="centeredloginform" >
                    <Panel>
                        <Avatar icon="pi pi-user" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} /> 
                        <h2>Sign in</h2>
                    </Panel>
                  
                    <Panel>
                        <label htmlFor="username">Username: </label>
                        <InputText id="username" />
                        <br />
                        <label htmlFor="password">Password: </label>
                        <Password id="password" feedback={false} />
                    </Panel>
                </form>
                <br />
                <br />
            </div>
            <div className="centeredform">
                <br />
                <br />
                <Button id="btnLogin" label="Login" type="submit" icon="pi pi-lock" />
            </div>
        </div>
    );
}

export default LoginPage;
