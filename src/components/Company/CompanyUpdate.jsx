import React, { useState } from 'react';
import {updateCompany} from '../../lib/Company/libUpdate';

const CompanyUpdate = ({company,setIsShow}) => {
    const id =  company._id
    const [formData,setFormData]=useState({
        Name: company.Name,
        Service: company.Service,
        AreaSize: company.AreaSize,
        Location:  company.Location,
        Admin: company.Admin
    })


    const [isSubmiting , setIsSubmiting] = useState(false);

     const handleChange = (event) => {


        const currentFormData = { ...formData }
        const inputName = event.target.name
        const inputValue = event.target.value
        currentFormData[inputName] = inputValue
        console.log(inputValue)
        setFormData(currentFormData)

    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(isSubmiting) return
        setIsSubmiting(true)
        const response = await updateCompany(id,formData)
        console.log(response)
        if(response.status == 201) {
            setIsShow(false)

        }
        setIsSubmiting(false)
    }

    return (
        <div>
            <h2>Edit Admin</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Name">Name:</label>
                <input id="Name" name="Name" onChange={handleChange} value={formData.Name} />
                <label htmlFor="Service">Service:</label>
                <input name="Service" id="Service" onChange={handleChange} value={formData.Service} />
                <label htmlFor="AreaSize">AreaSize:</label>
                <input id="AreaSize" name="AreaSize" onChange={handleChange} value={formData.AreaSize} />
                <label htmlFor="Location">Location:</label>
                <input name="Location" id="Location" onChange={handleChange} value={formData.Location} />
                <label htmlFor="Admin">Admin:</label>
                <input name="Admin" id="Admin" onChange={handleChange} value={formData.Admin} />
                <button type="submit">Update</button>
            </form>
        </div>

// Name: company.Name,
// Service: company.Service,
// AreaSize: company.AreaSize,
// Location:  company.Location,
// Admin: company.Admin
    )
}
export default CompanyUpdate