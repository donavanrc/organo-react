import './ComboBox.css'

export const ComboBox = (props) => {
    const onChange = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <div className='combo-box'>
            <label htmlFor={props.label}>{props.label}</label>
            <select 
                id={props.label}
                required={props.required} 
                value={props.value}
                onChange={onChange}>
                <option value="">{props.placeholder}</option>
                {props.items.map((item, index) => <option value={item.id} key={item.id}>{item.name}</option>)}
            </select>
        </div>
    )
}
