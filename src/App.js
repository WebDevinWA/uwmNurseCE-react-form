import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import "./index.css";
import "./Utils/NavBar.css"

import SupervisorPage from "./Pages/SupervisorPage";
import AdminPage from "./Pages/AdminPage";
import LoginPage from "./Pages/LoginPage";
import LogoutPage from "./Pages/LogoutPage";
import ManagerPage from "./Pages/ManagerPage";
import ReportPage from "./Pages/ReportPage";
import HomePage from "./Pages/HomePage";

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path='/'                 element={<LoginPage      />} />
                <Route path='/Home'             element={<HomePage       />} />
                <Route path="/Supervisor/:dept" element={<SupervisorPage />} />
                <Route path='/Manager'          element={<ManagerPage    />} />                
                <Route path='/ReportPage'       element={<ReportPage     />} />
                <Route path='/Admin/:dept'      element={<AdminPage      />} />           
                <Route path='/Logout'           element={<LogoutPage     />} />
            </Routes>
            <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        </QueryClientProvider>
    );
}

export default App;
