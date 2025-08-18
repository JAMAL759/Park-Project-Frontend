import { deleteCustomer } from "../../../lib/Customer/apiCus"
const AdminDeleteButton = ({ CustomerId ,getAllCustomer}) => {

    const handleDelete = async () => {
        await deleteCustomer(CustomerId)
        getAllCustomer()
    }
    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default AdminDeleteButton