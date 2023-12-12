import { Employee } from '../Employee/Employee';
import './Group.css'

export const Group = (props) => {
    return (
        <section 
            className='group' 
            style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{color: props.textColor}}>{props.title}</h3>
            <Employee textColor={props.textColor} backgroundColor={props.primaryColor} data={{name: 'Donavan Carvalho', position: 'Developer', imageUrl: 'https://github.com/donavanrc.png'}}/>
        </section>
    );
}