import axios from "axios"

const baseUrl = "http://localhost:3000"
const createNewBook =async (data) =>{
    try{
        const url=`${baseUrl}/book/new`
       const response=await axios.post(url,data)
       return response
    }
    catch(err){
return err
    }
}

export{
    createNewBook,
}