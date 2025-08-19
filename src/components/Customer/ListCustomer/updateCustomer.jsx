import{useState} from "react"
import { UpdateCustoemr } from "../../../lib/Customer/apiCus"

const UpdateCustomerForm=({customer})=>{
    const id=customer._id
    const [formData,setFormData]=useState({
         Name:customer.Name,
    email:customer.email,
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
        const response = await UpdateCustoemr(id,formData)
        console.log(response)
    }

    return (
        <div>
            <h2>Edit Admin</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Name">Name:</label>
                <input id="Name" name="Name" onChange={handleChange} value={formData.Name} />
                <label htmlFor="email">Email:</label>
                <input name="email" id="email" onChange={handleChange} value={formData.email} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default UpdateCustomerForm