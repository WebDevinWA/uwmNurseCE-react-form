import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

function HeaderForm() {

    const [name, setName] = useState();
    const [eid, setEID] = useState();
    const [fte, setFTE] = useState();
    const [department, setDepartment] = useState();

  return ( 
    <div id="headerform" class="header-form">          
          <label htmlFor="tbName"> Name: </label>
          <InputText id="tbName" />        
          <label htmlFor="tbEmployeeID"> Employee ID: </label>
          <InputText id="tbEmployeeID" />        
          <label htmlFor="tbFTE"> FTE%:</label>
          <InputText id="tbFTE"  />        
          <label htmlFor="tbDepartment"> Department:</label>
          <InputText id="tbDepartment" />  
      </div>
  );
}
export default HeaderForm;
