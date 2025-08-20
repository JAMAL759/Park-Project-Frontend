import AddminListPage from "../ListAdmin/listAllAdmin"
import AdminHomePage from "./homepage"
import { BrowserRouter as Router, Routes, Route } from 'react-router'

import NavBar from "./navBar"
const ListAdminPage = () => {
  return (

      <Router>
        <NavBar />
        <Routes>

          <Route path='/' element={<AdminHomePage/>} />
          <Route path='/admin' element={<AddminListPage/>} />
        </Routes>
      </Router>
  )
}

export default ListAdminPage