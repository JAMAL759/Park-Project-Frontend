import { deleteAdmin } from "../../../lib/Admin/api"
const AdminDeleteButton = ({ AdminId }) => {

    const handleDelete = async () => {
        await deleteAdmin(AdminId)
        
    }
    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default AdminDeleteButton