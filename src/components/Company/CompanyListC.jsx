import React from 'react';
import axios from 'axios';
import { CompanyCreation } from './CompanyCreate';

import{ClipLoader} from "react-spinners";
import { useEffect , useState } from 'react';

const Companies = ({ID}) => {
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
                   
                        Company.map(Company=> {

                          
                            return (

                                
                                <>
                                    <p>{Company.Name}</p>
                                    <p>{Company.Service}</p>
                                    <p>{Company.AreaSize}</p>
                                    <p>{Company.Location}</p>
                                    <p>{Company.Admin}</p>


                                </>
                            )
                         
                        })

                       
                  
                     
                }



<h3> {Track.title} </h3>
            <form
             
            >
                <label htmlFor= {key}>title</label>
                <input
                    id= {key}
                    name= "Name"
                    onChange={handleChange}
                    value={formData.title}
                />

                <input
                    id= {key}
                    name= "Service"
                    onChange={handleChange}
                    value={formData.Service}
                />

                <input
                    id= {key}
                    name= "AreaSize"
                    onChange={handleChange}
                    value={formData.AreaSize}
                />

                <input
                    id= {key}
                    name= "Location"
                    onChange={handleChange}
                    value={formData.Location}
                />

                <input
                    id= {key}
                    name= "Admin"
                    onChange={handleChange}
                    value={formData.Admin}
                />
             
             
            </form>



    </ol>
    
    
    
    
    </>

    )
}


export default Companies;