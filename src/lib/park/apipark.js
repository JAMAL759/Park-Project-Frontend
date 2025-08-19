import axios from "axios"

const baseUrl = "http://localhost:3000"

const createNewPark =async (data) =>{
    try{
        const url=`${baseUrl}/park/new`
       const response=await axios.post(url,data)
       return response
    }
    catch(err){
return err
    }
}
const deletePark=async (id) => {
      try{
        const url=`${baseUrl}/park/${id}`
       const response=await axios.delete(url)
       return response
    }
    catch(err){
return err
    }
}
const ListAllPark=async () => {
      try{
        const url=`${baseUrl}/park/`
        console.log(url)
       const response=await axios.get(url)
       console.log(response)
       return response.data
    }
    catch(err){
return err
    }
}
const UpdatePark=async (id, data)=>{
      try{
        const url=`${baseUrl}/park/${id}`
       const response=await axios.put(url, data)
       return response
    }
    catch(err){
return err
    }
}
const listParkById=async (id)=>{
      try{
        const url=`${baseUrl}/park/${id}`
       const response=await axios.get(url)
       return response
    }
    catch(err){
return err
    }
}

export{
    createNewPark,
    deletePark,
    UpdatePark,
    ListAllPark,
    listParkById
}