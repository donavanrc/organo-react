import './TextField.css';

export const TextField = (props) => {

    const onChange = (event) => {
        props.onChange(event.target.value);
    }

    return(
        <div className='textfield'>
            <label htmlFor={props.label}>{props.label}</label>
            <input 
                id={props.label} 
                value={props.value} 
                onChange={onChange} 
                required={props.required} 
                placeholder={props.placeholder}/>
        </div>
    )
}
