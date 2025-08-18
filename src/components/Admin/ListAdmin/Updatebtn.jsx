import{useState} from "react"
import {  UpdateAdmin } from "../../../../../../../../classwork/unit3/day-4/react-pets-frontend/lib/api"

const UpdateAdminForm=({admin})=>{
    const [formData,setFormData]=useState({
         Name:admin.Name,
    email:admin.email,
    })

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
        const response = await UpdateAdmin(formData)
        console.log(response)
    }

    return (
        <div>
            <h2>Edit Admin</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input id="name" name="name" onChange={handleChange} value={formData.name} />
                <label htmlFor="email">Email:</label>
                <input name="email" id="email" onChange={handleChange} value={formData.email} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default UpdateAdminForm