import React from 'react';
import DepartmentListHeader from '../Components/DepartmentListHeader';
import Table from '../Components/Table';

function HomePage() { 
    const homedivstyle = { backgroundColor: 'white' }

  return (
      <div>         
          <div >
             <DepartmentListHeader />
          </div>
          <div style={homedivstyle} className="centeredform">
              <Table />  
          </div>   
      </div>     
  );
}

export default HomePage;
