import React from 'react';
import axios from 'axios';
import { CompanyCreation } from './CompanyCreate';

import{ClipLoader} from "react-spinners";
import { useEffect , useState } from 'react';



const CompanyListC = ({ID}) => {
    const[Company , setCompany] = useState([]);

    const [CompanyData , setCompanyData] = useState({
        Name: '',
        Service: '',
        AreaSize: '',
        Location: '',
        Admin:''
    })

    const handleChange = (event) => {
        setCompanyData({...CompanyData , [event.target.name]:event.target.value});
}


    const CompanyGetter = async () => {

    const urlCall = await axios.get("http://localhost:3000/company");     
           console.log(urlCall);
           setCompany(urlCall.data);
    } 

    useEffect (() => {
        CompanyGetter();
    } , []);

    return (

    <> 
    
    <ol> 

    {
                   
                        Company.map( (Company , id )=> {

                          
                            return (

                                
                                <>
                                <div key={id} id="CompanyCard"> 
                                    <p>{Company.Name}</p>
                                    <p>{Company.Service}</p>
                                    <p>{Company.AreaSize}</p>
                                    <p>{Company.Location}</p>
                                    <p>{Company.Admin}</p>

                                    </div>
                                </>
                            )
                         
                        })

                       
                  
                     
                }




            <form
        
            >
                <label htmlFor ="Name" >Name</label>
                <input
                  
                    name= "Name"
                    onChange={handleChange}
                    value={CompanyData.title}
                />

            <label htmlFor ="Service" >Service</label>
                <input
                  
                    name= "Service"
                    onChange={handleChange}
                    value={CompanyData.Service}
                />

        <label htmlFor ="AreaSize" >AreaSize</label>
                <input
                    
                    name= "AreaSize"
                    onChange={handleChange}
                    value={CompanyData.AreaSize}
                />

        <label htmlFor ="Location" >Location</label>
                <input
                  
                    name= "Location"
                    onChange={handleChange}
                    value={CompanyData.Location}
                />


            <label htmlFor ="Admin" >Admin</label>
                <input
               
                    name= "Admin"
                    onChange={handleChange}
                    value={CompanyData.Admin}
                />
             
             <CompanyCreation data = {CompanyData}/>
             
            </form>



    </ol>
    
    
    
    
    </>

    )
}


export default CompanyListC;