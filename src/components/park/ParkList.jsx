import { useEffect, useState } from "react";
import { createNewPark , UpdatePark , deletePark , ListAllPark , listParkById } from "../../lib/park/apipark";



const ParkList = () => {

    //MARK: using state
    
    [Park , setPark] = useState({});

    //MARK: Handler creation

    const handlerGetter = () => {
            console.log("I'm in the handleGetter");
            setPark(... Park , ListAllPark);
            console.log("This is the park information = ", Park);
    }


    useEffect =(  () => {
        handlerGetter();
    }, [])

    return (

            <> 




            </>

    )
} 