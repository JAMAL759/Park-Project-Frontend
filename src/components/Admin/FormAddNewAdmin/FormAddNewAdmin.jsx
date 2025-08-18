import{useState} from "react"
import { create } from "../../../../../../../../classwork/unit3/day-4/react-pets-frontend/lib/api"

const AddAdminForm=()=>{
    const [formData,setFormData]=useState({
         Name: '',
    email: '',
    password:''

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
        const response = await create(formData)
        console.log(response)
    }

    return (
        <div>
            <h2>Add your Pet</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input id="name" name="name" onChange={handleChange} value={formData.name} />
                <label htmlFor="email">Email:</label>
                <input name="email" id="email" onChange={handleChange} value={formData.email} />
                <label htmlFor="password">Breed:</label>
                <input id="password" name="password" onChange={handleChange} value={formData.password} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AddAdminForm