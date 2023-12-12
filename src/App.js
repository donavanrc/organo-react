import { useState } from 'react';
import Banner from './components/Banner';
import Form  from './components/Form';
import Group from './components/Group';

import groups from './groups.json'

function App() {
  const [employeeList, setEmployeeList] = useState([]);

  const onSubmit = (newEmployee) => {
    newEmployee.id = employeeList.length;
    const updatedEmployeeList = [...employeeList, newEmployee];
    setEmployeeList(updatedEmployeeList)

    console.log(updatedEmployeeList);
  }

  return (
    <div className="App">
      <Banner/>
      <Form groups={groups} onSubmit={onSubmit}/>
      {groups.map(group => <Group 
        key={group.id} 
        title={group.name} 
        textColor={group.text_color}
        primaryColor={group.primary_color}
        secondaryColor={group.secondary_color} />)}
      
    </div>
  );
}

export default App;
