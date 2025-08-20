import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { ListAllAdmin } from "../../../lib/Admin/api"
import AdminDeleteButton from "./deleteBtn"
import UpdateAdminForm from "./Updatebtn"
import AddAdminForm from "../FormAddNewAdmin/FormAddNewAdmin"
const AddminListPage = () => {
    const [admin, setAdmin] = useState([])
    const [formIsShow, setFormIsShow] = useState(false)
    const [formIsShowUpdate, setFormIsUpdate] = useState(false)
    const [adminToUpdate, setAdminToUpdate] = useState(null)
    async function fetchAdmins() {
        const admins = await ListAllAdmin()
        console.log(admins)
        setAdmin(admins)

    }

    const handleShowFormCLick = () => {
        setFormIsShow(true)
    }
    const handleShowFormCLickUpdate = () => {
     
        setFormIsUpdate(true)
    }

    useEffect(() => {
        fetchAdmins()
    }, [])

    return (
        <div>
            <button onClick={handleShowFormCLick}>Add new admin</button>
            {
                formIsShow
                    ?
                    <AddAdminForm setFormIsShown={setFormIsShow} />
                    :
                    null
            }


            <ol>

                {
                    admin.length
                        ?
                        admin.map((admins, i) => {
                            return (
                                <div key={i}>
                                    <p >{admins.Name}</p>
                                    <p >{admins.email}</p>


                                    <button onClick={handleShowFormCLickUpdate}>Update</button>
                                    <AdminDeleteButton AdminId ={admins._id}  />

                                       {
                                        formIsShowUpdate
                                            ?
                                            <UpdateAdminForm admin={admins} setFormIsShown={setFormIsShow} />
                                            :
                                            null
                                    }   
                                </div>
                                

                            )
                        })
                        
                               
                        :
                        <ClipLoader color="#FF00FF" />

                }
            </ol>

    {/* if there is an admin to update render the update admin form component and hand it the admin to update as props */}
        </div>
    )
}
export default AddminListPage