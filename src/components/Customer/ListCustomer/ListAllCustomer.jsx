import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { ListAllCustomer } from "../../../lib/Customer/apiCus"
const AddminListPage = () => {
    const [customer, setCustomer] = useState([])

    async function fetchCustomer() {
        const admins = await ListAllCustomer()
       
        setCustomer(admins)

    }

    useEffect(() => {
        fetchCustomer()
    }, [])

    return (
        <div>
            <AddAdminForm />

            <ol>

                {
                    customer.length
                        ?
                        customer.map((customers, i) => {
                            return (
                                <div key={i}>
                                    <p >{customers.Name}</p>
                                    <p >{customers.email}</p>
                                   

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