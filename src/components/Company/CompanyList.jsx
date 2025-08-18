import React from 'react';
import axios from 'axios';
import CompnayDelete from "./CompnayDelete"

import{ClipLoader} from "react-spinners";
import { useEffect , useState } from 'react';


const Companies = () => {
    const[Company , setCompany] = useState([]);

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
                        Company.map(Company=> {
                            return (
                                <>
                                    <p>{Company.title}</p>
                                    <CompnayDelete
                                        ID={Company._id}
                                        AllCompany={getAllPets}
                                    />
                                </>
                            )
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


export default Companies;