import './Employee.css'

export const Employee = (props) => {
    return(
        <div className='employee'>
            <div className='header' style={{ backgroundColor: props.backgroundColor }}>
                <img src={props.data.imageUrl} alt='Employee'/>
            </div>
            <div className='footer'>
                <h4 style={{ color: props.textColor }}>{props.data.name}</h4>
                <h5>{props.data.position}</h5>
            </div>
        </div>
    )
}