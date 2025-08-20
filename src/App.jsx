
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { Link } from 'react-router'
import ParkList from './components/park/ParkList'
import { BrowserRouter as  Router , Route , Routes  } from 'react-router'
import ParkListV from './components/park/ParkListV'
import './App.css'
import AdminHomePage from './components/Admin/homePage/homepage'
import AddminListPage from './components/Admin/ListAdmin/listAllAdmin'
import CompanyListC from './components/Company/CompanyListC';
import NavBar from './components/Admin/homePage/navBar'

const App = () => {

  return (
    <>
  <div id="xlGrid">
  <div id="Grid">

<Router>

<NavBar/>
<Routes> 
 <Route path='/' element={<AdminHomePage/>} />
 <Route path='/admin' element={<AddminListPage/>} /> 
<Route path = "/Park/:id"element={   <ParkList />}/> 
<Route path = "/Park/company"element= {< CompanyListC />} /> 
<Route path = "/Park/:id/view" element = {< ParkListV/> }/>

</Routes>


</Router>


<> 
     {/* <div id="sideMenu">
      <ul> 
            <li> <Link to = {"/Park/Parking"}> Parking</Link> </li>
            <li>  <Link to = {"/Park/Admin"}> Admin</Link> </li>
            <li> <Link to = {"/Park/Companies"}> Companies</Link>  </li>
            </ul>
          </div> */}
    </>


    


     

         

        </div>

       
<div>


{/* <CompanyListC /> */}
{/* { < ParkList/>} */}

</div>


      </div>

    </>
  )
}


export default App

