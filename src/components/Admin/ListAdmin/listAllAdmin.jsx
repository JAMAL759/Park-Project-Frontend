import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { ListAllAdmin } from "../../../lib/Admin/api"
import AdminDeleteButton from "./deleteBtn"
import UpdateAdminForm from "./Updatebtn"
import AddAdminForm from "../FormAddNewAdmin/FormAddNewAdmin"
import './admin.css'

const AddminListPage = () => {
    const [admin, setAdmin] = useState([])
    const [formIsShow, setFormIsShow] = useState(false)
    const [adminToUpdate, setAdminToUpdate] = useState(null)

    async function fetchAdmins() {
        const admins = await ListAllAdmin()
        setAdmin(admins)
    }

    const handleShowFormCLick = () => setFormIsShow(true)
    const handleShowFormClickUpdate = (admins) => setAdminToUpdate(admins)

    useEffect(() => {
        fetchAdmins()
    }, [])

    return (
        <div className="container">
            <button className="button-add" onClick={handleShowFormCLick}>Add new admin</button>
            {formIsShow && <div className="form-container"><AddAdminForm setFormIsShown={setFormIsShow} /></div>}
            <ol className="admin-list">
                {admin.length
                    ? admin.map((admins) => (
                          <div key={admins._id} className="admin-card">
                              <div className="admin-info">
                                  <p className="name">{admins.Name}</p>
                                  <p className="email">{admins.email}</p>
                              </div>
                              <div className="admin-actions">
                                  <button className="button-update" onClick={() => handleShowFormClickUpdate(admins)}>Update</button>
                                  <AdminDeleteButton AdminId={admins._id} className="button-delete" />
                              </div>
                              {adminToUpdate && adminToUpdate._id === admins._id && (
                                  <div className="update-form-wrapper">
                                      <UpdateAdminForm admin={adminToUpdate} setFormIsShown={setAdminToUpdate} />
                                  </div>
                              )}
                          </div>
                      ))
                    : <div className="loader"><ClipLoader color="#FF00FF" /></div>
                }
            </ol>
        </div>
    )
}

export default AddminListPage
