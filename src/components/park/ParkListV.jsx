import { useEffect, useState } from "react";
import { createNewPark, UpdatePark, deletePark, ListAllPark, listParkById } from "../../lib/park/apipark";
import '../../App.css'
import axios from 'axios'

import { Link, useParams } from "react-router";



const ParkListV = () => {

    const params = useParams() 
    //MARK: using state

    const [slots, setSlots] = useState([])

    const [Park, setPark] = useState({});

    const [Company, setCompany] = useState([]);
    
    const[Companies , setCompanies] = useState([]);

    const [ParkForm, setParkForm] = useState({
        state: "",
        StartTime: new Date("2022-03-25"),
        EndTime: new Date("2022-03-25"),
        Paid: false,
        Companies: "",
        slot:""
    })

 
    //MARK: Handler creation

    const handlerGetter = () => {
        console.log("I'm in the handleGetter");
        ListAllPark();

        //  console.log(data)
        //   setPark(... Park , ListAllPark);
        console.log("This is the park information = ", Park);
    }

    const handlerReader = () => {
        setParkForm({ ...ParkForm, [event.target.name]: event.target.value });
    }

    const handlerSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log("I'm here in the handlerSubmit");
            createNewPark(ParkForm);
            console.log(" I'm here after  passing the create functionality")
        } catch (err) {
            console.log("Their is an error submititing it , ", err)
        }

    }

    //MARK: CompanyGetter (outside Model) 

    // const CompanyGetterByID = async () => {

    //     const urlCall = await axios.get(`http://localhost:3000/company/${params.id}`);
    //     console.log(urlCall);
    //     setCompany(urlCall.data);
    //     setSlots(Array.from({ length: urlCall.data.ParkNumber })        )
        

    // }


    const ParkGetterByID = async () => {

        const urlCall = await axios.get(`http://localhost:3000/park/${params.id}`);
        console.log(urlCall);
        setCompany(urlCall.data);
        setSlots(Array.from({ length: urlCall.data.ParkNumber })        )
        

    }

    const ParkGetter = async () => {

        const urlCall = await axios.get("http://localhost:3000/park");
        console.log(urlCall);
        setCompany(urlCall.data);
    }
    
    
 


    useEffect(() => {
       
        handlerGetter();
        ParkGetter();
        
    }, [])

    return (

        <>

            { }
<div id="AllGrid"> 

         
{Company.map((obj) => {
return (
    <> 
    <p> {obj.slot}</p>
    <p>  {obj.slot}</p>
    </>
)
})}

         

</div>



        </>

    )
}

export default ParkListV;