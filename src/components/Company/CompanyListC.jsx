import React from 'react';
import axios from 'axios';
import { CompanyCreation } from './CompanyCreate';
import { ClipLoader } from "react-spinners";
import { useEffect, useState } from 'react';
import { listAdminById } from '../../lib/Admin/api';
import CompnayDelete from "./CompnayDelete"
import CompanyUpdate from './CompanyUpdate';

import "../../App.css"


const CompanyListC = ({ ID }) => {
    const [Company, setCompany] = useState([]);

    const [Admin, setAdmin] = useState({});


    const [isForm , setIsForm] = useState(false);

    const [CompanyData, setCompanyData] = useState({
        Name: '',
        Service: '',
        AreaSize: '',
        Location: '',
        Admin: ''
    })


    const [UForm, setUForm] = useState({
        Name: '',
        Service: '',
        AreaSize: '',
        Location: '',
        Admin: ''
    })

    const handleChange = (event) => {
        setCompanyData({ ...CompanyData, [event.target.name]: event.target.value });
    }


    const handleChangeU = (event) => {
        setS({ ...UForm, [event.target.name]: event.target.value });
    }
    


    const handleChecker = () => {
        
        setIsForm(true);

        console.log( "This is FormU = " , isForm)
       
    }

    const CompanyGetter = async () => {

        const urlCall = await axios.get("http://localhost:3000/company");
        console.log(urlCall);
        setCompany(urlCall.data);
    }


    useEffect(() => {
        CompanyGetter();
    }, []);

  



    return (

        <>

            <div id = "gridCompanyxll">

                {

                    Company.map((Company, id) => {


                        return (
                                

                            <>
                                <div id="CardMainGrid">
                                    <div key={id} id="CompanyCard">
                                        <h1>{Company.Name}</h1>
                                        <h2 id="h2COmpanyCard"> Service : {Company.Service}</h2>
                                        <h2 id="h2COmpanyCard2" > area size : {Company.AreaSize}</h2>
                                        <h2> Location: {Company.Location}</h2>

                                    
                                    
                                        {Company.Admin.map ((obj) => {

                                            return (
                                                <>
                                                <h2> {obj.Name} </h2>
                                                </>
                                            )
                                        })}
                                      
                                        {/* const listAdminById=async (id)=>{
      try{
        const url=`${baseUrl}/admin/${id}`
       const response=await axios.get(url)
       return response
    }
    catch(err){
return err
    }
} */}
                                    </div>
                                </div>
                                <div id='delete-container'> 
                                <CompnayDelete
                                        ID = {Company._id} />


                                </div>

                                <button onClick={handleChecker}>update</button>
                                         {
                                            isForm
                                            ?
                                            <CompanyUpdate company={Company} setIsShow={isForm}/>
                                            : 
                                            null
                                         }
                               
                                            
                                            {/* {isForm 
                                            
                                            ? 

                                             <> 

<form

>
    <label htmlFor="Name" >Name</label>
    <input

        name="Name"
        onChange={handleChange}
        value={CompanyData.title}
    />

    <label htmlFor="Service" >Service</label>
    <input

        name="Service"
        onChange={handleChange}
        value={CompanyData.Service}
    />

    <label htmlFor="AreaSize" >AreaSize</label>
    <input

        name="AreaSize"
        onChange={handleChange}
        value={CompanyData.AreaSize}
    />

    <label htmlFor="Location" >Location</label>
    <input

        name="Location"
        onChange={handleChange}
        value={CompanyData.Location}
    />


    <label htmlFor="Admin" >Admin</label>
    <input

        name="Admin"
        onChange={handleChange}
        value={CompanyData.Admin}
    />

    <CompanyCreation data={CompanyData} />

</form> */}


                                            {/* </>  
                                            
                                            : 
                                            "ds"} */}
                            </>
                        )

                    })




                }




                {/* <form

                >
                    <label htmlFor="Name" >Name</label>
                    <input

                        name="Name"
                        onChange={handleChange}
                        value={CompanyData.title}
                    />

                    <label htmlFor="Service" >Service</label>
                    <input

                        name="Service"
                        onChange={handleChange}
                        value={CompanyData.Service}
                    />

                    <label htmlFor="AreaSize" >AreaSize</label>
                    <input

                        name="AreaSize"
                        onChange={handleChange}
                        value={CompanyData.AreaSize}
                    />

                    <label htmlFor="Location" >Location</label>
                    <input

                        name="Location"
                        onChange={handleChange}
                        value={CompanyData.Location}
                    />


                    <label htmlFor="Admin" >Admin</label>
                    <input

                        name="Admin"
                        onChange={handleChange}
                        value={CompanyData.Admin}
                    />

                    <CompanyCreation data={CompanyData} />

                </form> */}



            </div>




        </>

    )
}


export default CompanyListC;