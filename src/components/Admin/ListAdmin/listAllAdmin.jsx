import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { ListAllAdmin } from "../../../lib/Admin/api"
import AdminDeleteButton from "./deleteBtn"
import UpdateAdminForm from "./Updatebtn"
const PetList = () => {
    const [admin, setAdmin] = useState([])

 
    useEffect(() => {
        setAdmin(ListAllAdmin().data)
    }, [])

    return (
        <div>
        
            <ol>
                
                {
                    admin.length
                        ?
                        admin.map((admins, i) => {
                            return(
                            <>
                            <p key={i}>{admins.name}</p>
                            <p key={i}>{admins.email}</p>
                      
                            </>


                            
                            )
                        }) :
                        <ClipLoader color="#FF00FF" />

                }
            </ol>
        </div>
    )
}
export default PetList