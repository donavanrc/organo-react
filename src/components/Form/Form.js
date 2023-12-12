import { useState } from "react";
import Button from "../Button";
import ComboBox from "../ComboBox"
import TextField from "../TextField"

import './Form.css'

export const Form = (props) => {
    const model = {
        name: '',
        position: '',
        image_url: '',
        group_id: ''
    };

    const [formData, setFormData] = useState(model);

    const onSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(formData);
        setFormData(model);
    }

    return(
        <section className="form-box">
            <form onSubmit={onSubmit}>
                <h2>Fill in the employee's details</h2>
                <TextField 
                    required={true} 
                    label="Name" 
                    placeholder="Type you name" 
                    value={formData.name}
                    onChange={value => setFormData({ ...formData, name: value })} />
                <TextField 
                    required={true} 
                    label="Position" 
                    placeholder="Type you position in the company" 
                    value={formData.position}
                    onChange={value => setFormData({ ...formData, position: value })} />
                <TextField 
                    label="Image" 
                    placeholder="Type an image URL" 
                    value={formData.image_url}
                    onChange={value => setFormData({ ...formData, image_url: value})} />
                <ComboBox 
                    required={true} 
                    label="Group" 
                    placeholder="Select a group" 
                    items={props.groups}
                    value={formData.group_id}
                    onChange={value => setFormData({ ...formData, group_id: parseInt(value) })} />
                <div><Button>Create card</Button></div>
            </form>
        </section>
    )
}