import { deleteAdmin } from "../../../lib/Admin/api"
const AdminDeleteButton = ({ AdminId ,getAllAdmin}) => {

    const handleDelete = async () => {
        await deleteAdmin(AdminId)
        getAllAdmin()
    }
    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default AdminDeleteButton