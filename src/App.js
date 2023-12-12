import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Group from './components/Group';
import Footer from './components/Footer';

import groups from './groups.json'

function App() {
    const [employees, setEmployees] = useState([]);

    const onSubmit = (newEmployee) => {
        debugger
        newEmployee.id = employees.length;
        const updatedEmployees = [...employees, newEmployee];
        setEmployees(updatedEmployees)
    }

    return (
        <div className="App">
            <Banner />
            <Form groups={groups} onSubmit={onSubmit} />
            {groups.map(group => <Group
                key={group.id}
                title={group.name}
                textColor={group.text_color}
                primaryColor={group.primary_color}
                secondaryColor={group.secondary_color}
                employees={employees.filter(employee => employee.group_id === group.id)} />)}
            <Footer />
        </div>
    );
}

export default App;
