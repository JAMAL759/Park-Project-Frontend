import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { Link } from 'react-router'

import { BrowserRouter as  Router , Route , Routes  } from 'react-router'

import './App.css'

import CompanyListC from './components/Company/CompanyListC';
import ParkList from './components/park/ParkList';

const App = () => {

  return (
    <>
  <div id="xlGrid">
  <div id="Grid">

{/* <Router>

<Routes>

  <Route path="" element = {
    <> 
     <div id="sideMenu">
      <ul> 
            <li> <Link to = {"/Park/Parking"}> Parking</Link> </li>
            <li>  <Link to = {"/Park/Admin"}> Admin</Link> </li>
            <li> <Link to = {"/Park/Companies"}> Companies</Link>  </li>
            </ul>
          </div>
    </>}/>
</Routes>

</Router> */}


    


     

         

        </div>

       
<div>
<h1> Welcome </h1>

{/* <CompanyListC /> */}
{ < ParkList/>}
</div>


      </div>

    </>
  )
}


export default App

