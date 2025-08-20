import React from 'react';
import axios from 'axios';
import CompanyUpdate from "./CompnayDelete"

import{ClipLoader} from "react-spinners";
import { useEffect , useState } from 'react';



const CompanyListU = ({ID}) => {
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
                    Company.length
                        ?
                        Company.filter(Company=> {

                            Company._id == ID ?
                            <>
                            return (

                                
                                <>
                               


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
             
             
            </form>

                                </>
                            )
                            </>
                            :
                            <ClipLoader
                            color='#FF00FF'
                        />
                        })
                        :
                        <ClipLoader
                        color='#FF00FF'
                    />
                     
                }


    </ol>
    
    
    
    
    </>

    )
}


export default CompanyListU;