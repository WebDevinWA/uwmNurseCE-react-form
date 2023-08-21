import React, {useState, useEffect} from "react";
import { InputText} from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import {useTable} from 'react-table';
import { Checkbox }  from 'primereact/Checkbox';


function DepartmentList() {
    //API CALLS for this Page
    //const fetchURL = 'https://nursece-dev.azurewebsites.net/api';
    //const fetchURL = 'http://localhost:3001/api/FYReviews?fy=FY23';
      const fetchURL = 'http://nursecedev.uwmedicine.org/api/SupervisorDeptReviewCounts?fy=FY22';

    function getData() { 
      fetch(fetchURL)
      .then( (response) => response.json() )
      .then( (data) =>      setOptions(data) )
     // .catch((error)=> console.log('Error fetching data from API', error));
    }     

    
    const [selectedDept, setSelectedDept] = useState('');   
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //const fetchURL = "MOCK_DATA.json file here... ";
    const [filteredData, setfilteredData] = useState('');
    const [additionalData, setAdditionalData] = useState([]);
    const [isSelectOpen, setIsSelectOpen] = useState(false); 


    
    useEffect(() => {
      // Fetch the API data
      fetch(fetchURL)
        .then(response => response.json())
        .then(data => {
          setOptions(data); // Set the response data as options
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    useEffect(() => {
      // Filter the data based on the selected department
      if (selectedOption) {
        fetch(`nursecedev.uwmedicine.org/api/FYReviews?fy=FY23&${selectedOption}`)
        .then(response => response.json())
        .then(data => {
          setAdditionalData(data); // Set the additional data based on the selected department
        })
        .catch(error => {
          console.error('Error fetching additional data:', error);
        });
    } else {
      setAdditionalData([]); // Reset additional data if no department is selected
    }
  }, [selectedOption]);

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(e.target.value);    
    setIsSelectOpen(false); 
  };

  const handleListItemClick = (DeptUnitOrClinic) => {
    console.log( DeptUnitOrClinic );
  };


   // React Table setup for additional data
   const columns = React.useMemo(() => additionalColumns, [additionalColumns]);
   const tableInstance = useTable({ columns, data: additionalData });
 
   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
 
    return (
        <div>
            {/*  
   <div>
   <FormControl>   
        <InputLabel id="department-label">Click the down arrow to view all departments</InputLabel>
        <Select
          labelId="departent-label"
          id="departmentSelect"
          value={selectedDepartment}
          open={isSelectOpen}
          onOpen={() => setIsSelectOpen(true)}
          onClose={() => setIsSelectOpen(false)}
          onChange={handleDepartmentChange}
          style={{ minWidth: 400 }} 
          MenuProps={{
            open: isSelectOpen ,
            PaperProps: {
              style: {
                maxHeight: 400,
              },
            },
          }}
        > 
        <MenuItem value="">
            <em style={{ fontWeight: 'bold', color: 'black', textAlign: 'right' }}>
              Loading Reviews by Department - select a department to continue.
            </em>
        </MenuItem>
          {options.map(option => (
          <MenuItem key={option.id} value={option.Dept} >
                 <em style={{ color: 'black' }}> {option.ReviewCount } </em> ....reviews for Dept.... <em style={{ color: 'black' }}>{option.Dept}</em>    
          </MenuItem>
          ))} 
        </Select>          
    </FormControl> 
     </div>
    */}





            <div >
                <FormControl>
                    <List style={{ maxHeight: '800px', overflowY: 'auto' }}>
                        {options.map(option => (
                            <ListItem
                                key={option.id}
                                value={option.Dept}
                                ListItembutton='true'
                                onClick={() => handleListItemClick({ DeptUnitOrClinic })}
                            >
                                <em style={{ color: 'black' }}> Count: {option.ReviewCount} </em> for <em style={{ color: 'black' }}>{option.Dept}</em>
                            </ListItem>
                        ))}
                    </List>

                </FormControl>
            </div>

            {selectedOption && (
                <>
                    <table {...getTableProps()} style={{ marginTop: '1rem' }}>
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map(row => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );

}



export default DepartmentList;
