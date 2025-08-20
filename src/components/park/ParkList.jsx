import { useEffect, useState } from "react";
import { createNewPark, UpdatePark, deletePark, ListAllPark, listParkById } from "../../lib/park/apipark";
import '../../App.css'

import { useParams } from "react-router";



const ParkList = () => {
    
    const params = useParams() 
    //MARK: using state

    const slots = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [Park, setPark] = useState({});

    const [Company, setCompany] = useState([]);

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

    const CompanyGetter = async () => {

        const urlCall = await axios.get("http://localhost:3000/company");
        console.log(urlCall);
        setCompany(urlCall.data);
    }


    useEffect(() => {
        handlerGetter();
    }, [])

    return (

        <>

            { }


            {<form onSubmit={handlerSubmit}>

                <label htmlFor="state" >state</label>
                <select name="state" onChange={handlerReader} >

                    <option value="available"> available </option>
                    <option value="unavailable"> unavailable </option>
                </select>

                <label htmlFor="StartTime" >StartTime</label>
                <input
                    type="date"
                    name="StartTime"
                    onChange={handlerReader}
                    value={ParkForm.StartTime}
                />

                <label htmlFor="EndTime" >EndTime</label>
                <input
                    type="date"
                    name="EndTime"
                    onChange={handlerReader}
                    value={ParkForm.EndTime}
                />



                <label htmlFor="Paid" >Paid</label>
                <select name="Paid" onChange={handlerReader} >

                    <option value={true}> True </option>
                    <option value={false}> False </option>
                </select>

                <label htmlFor="slot" >slot</label>
                <input
                    type="text"
                    name="slot"
                    onChange={handlerReader}
                    value={ParkForm.slot}
                />

                <label htmlFor="Companies" >Company</label>
                <input

                    name="Companies"
                    onChange={handlerReader}
                    value={ParkForm.Companies}
                />

                <button type="submit"> Submit </button>

            </form>}


            {

                <div id="ParkGrid">
                    {slots.map((parkingNum) => {

                        return (
                            <button onClick={()=>{        setParkForm({ ...ParkForm, slot: `${parkingNum}f` });
                        }}  class="park"> </button>

                        )
                    })

                    }

                </div>








            }


        </>

    )
}

export default ParkList;