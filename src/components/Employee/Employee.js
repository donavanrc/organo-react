import './Employee.css'

export const Employee = ({data, textColor, backgroundColor}) => {
    const {name, position, image_url} = data;
    return(
        <div className='employee'>
            <div className='header' style={{ backgroundColor: backgroundColor }}>
                <img src={image_url} alt={name}/>
            </div>
            <div className='footer'>
                <h4 style={{ color: textColor }}>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}