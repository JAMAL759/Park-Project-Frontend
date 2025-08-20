import { useEffect, useState } from "react";
import { createNewPark, UpdatePark, deletePark, ListAllPark, listParkById } from "../../lib/park/apipark";
import '../../App.css'
import axios from 'axios'

import { Link, useParams } from "react-router";



const ParkList = () => {

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

    const CompanyGetterByID = async () => {

        const urlCall = await axios.get(`http://localhost:3000/company/${params.id}`);
        console.log(urlCall);
        setCompany(urlCall.data);
        setSlots(Array.from({ length: urlCall.data.ParkNumber })        )
        

    }

    const CompanyGetter = async () => {

        const urlCall = await axios.get("http://localhost:3000/company");
        console.log(urlCall);
        setCompany(urlCall.data);
    }
    
    
 


    useEffect(() => {
        CompanyGetterByID()
        handlerGetter();
        
    }, [])

    return (

        <>

            { }
<div id="AllGrid"> 

            {<form onSubmit={handlerSubmit}>

                <label htmlFor="state" >state</label>
                <select name="state" onChange={handlerReader} >

                    <option value="available"> available </option>
                    <option value="unavailable"> unavailable </option>
                </select>
        <br/> 
        <br/> 
                <label htmlFor="StartTime" >StartTime</label>
                <input
                    type="date"
                    name="StartTime"
                    onChange={handlerReader}
                    value={ParkForm.StartTime}
                />
                    <br/> 
                    <br/> 

                <label htmlFor="EndTime" >EndTime</label>
                <input
                    type="date"
                    name="EndTime"
                    onChange={handlerReader}
                    value={ParkForm.EndTime}
                />
    <br/> 
    <br/> 


                <label htmlFor="Paid" >Paid</label>
                <select name="Paid" onChange={handlerReader} >

                    <option value={true}> True </option>
                    <option value={false}> False </option>
                </select>


                <br/> 
                <br/> 

                <label htmlFor="slot" >slot</label>
                <input
                    type="text"
                    name="slot"
                    onChange={handlerReader}
                    value={ParkForm.slot}
                />

<br/> 
<br/> 

                <label htmlFor="Companies"  hidden>Company</label>


                


                <input

                    name="Companies"
                    onChange={handlerReader}
                    value={params.id}
                    hidden
                />

<br/> 
<br/> 
                <button type="submit"> Submit </button>
                <Link to = {`/Park/${params.id}/view`}>  
            
            View
        </Link>
        

            </form>}


            {

                <div id="ParkGrid">
                    {slots.map((parkingNum , id) => {

                        return (
                            <button onClick={()=>{        setParkForm({ ...ParkForm, slot: `${id}f` });
                        }}  class="park"> Park {id} </button>

                        )
                    })

                    }

                </div>








            }
         

</div>



        </>

    )
}

export default ParkList;