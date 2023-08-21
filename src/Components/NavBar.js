import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/uwmedicinelogo.svg';
import '../Utils/NavBar.css';

//import { use } from 'passport';

function NavBar() {
    return (
       <div>
            <nav className="nav">
                <img id="logo" src={logo} alt="uwlogo" />
                <Link to="/" className="site-title"></Link>
                <ul>
                    <li>
                        <Link to="/Home" activeclassname="activetab">Home</Link>
                    </li>
                    <li>
                        <Link to="/Supervisor" activeclassname="activetab">Supervisors</Link>
                    </li>
                    <li>
                        <Link to="/Manager" activeclassname="activetab">Managers</Link>
                    </li>

                    <li>
                        <Link to="/Report" activeclassname="activetab">Reports</Link>
                    </li>
                    <li >
                        <Link to="/Admin" activeclassname="activetab">Admin</Link>
                    </li>
                    <li >
                        <Link to="/Logout" activeclassname="activetab">Logout</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;

