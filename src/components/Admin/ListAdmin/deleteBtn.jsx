import { deleteAdmin } from "../../../lib/Admin/api"
const AdminDeleteButton = ({ AdminId }) => {

    const handleDelete = async () => {
        await deleteAdmin(AdminId)
                window.location.reload()
    }
    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default AdminDeleteButton