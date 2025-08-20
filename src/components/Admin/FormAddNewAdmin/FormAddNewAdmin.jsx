import{useState} from "react"
import { create } from "../../../lib/Admin/api"

const AddAdminForm=({setFormIsShown})=>{
     const [isSubmitting, setIsSubmitting] = useState(false)
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
        if (isSubmitting) return
        setIsSubmitting(true)
        const response = await create(formData)
        console.log(response)
                window.location.reload()
        if (response.status === 201) {
          setFormIsShown(false)
        }
        setIsSubmitting(false)
    }

    return (
        <div>
            <h2>Add New Admin</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Name">Name:</label>
                <input id="Name" name="Name" onChange={handleChange} value={formData.Name} />
                <label htmlFor="email">Email:</label>
                <input name="email" id="email" onChange={handleChange} value={formData.email} />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" onChange={handleChange} value={formData.password} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AddAdminForm