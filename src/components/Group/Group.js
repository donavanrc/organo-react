import { Employee } from '../Employee/Employee';
import './Group.css'

export const Group = ({employees, title, textColor, primaryColor, secondaryColor}) => {
    return (
        (employees.length > 0) && <section 
            className='group' 
            style={{backgroundColor: secondaryColor}}>
            <h3 style={{color: textColor}}>{title}</h3>
            <div className='employees'>
                {employees.map(employee => <Employee 
                    key={employee.id}
                    textColor={textColor} 
                    backgroundColor={primaryColor} 
                    data={{ 
                        name: employee.name, 
                        position: employee.position, 
                        image_url: employee.image_url 
                    }} />)}
            </div>
        </section>
    );
}