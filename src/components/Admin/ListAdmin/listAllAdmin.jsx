import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { ListAllAdmin } from "../../../lib/Admin/api"
import AdminDeleteButton from "./deleteBtn"
import UpdateAdminForm from "./Updatebtn"
import AddAdminForm from "../FormAddNewAdmin/FormAddNewAdmin"
const AddminListPage = () => {
    const [admin, setAdmin] = useState([])

    async function fetchAdmins() {
        const admins = await ListAllAdmin()
        console.log(admins)
        setAdmin(admins)

    }

    useEffect(() => {
        fetchAdmins()
    }, [])

    return (
        <div>
            <AddAdminForm />

            <ol>

                {
                    admin.length
                        ?
                        admin.map((admins, i) => {
                            return (
                                <div key={i}>
                                    <p >{admins.Name}</p>
                                    <p >{admins.email}</p>
                                    <UpdateAdminForm admin={admins} />

                                </div>



                            )
                        }) :
                        <ClipLoader color="#FF00FF" />

                }
            </ol>
        </div>
    )
}
export default AddminListPage