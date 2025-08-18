import axios from "axios"

const baseUrl = "http://localhost:3000"

const create =async (data) =>{
    try{
        const url=`${baseUrl}/admin/new`
       const response=await axios.post(url,data)
       return response
    }
    catch(err){
return err
    }
}

const deleteParking=async (id) => {
      try{
        const url=`${baseUrl}/admin/${id}`
       const response=await axios.delete(url)
       return response
    }
    catch(err){
return err
    }
}
const ListAllAdmin=async () => {
      try{
        const url=`${baseUrl}/admin/`
       const response=await axios.get(url)
       return response
    }
    catch(err){
return err
    }
}

const UpdateAdmin=async (id)=>{
      try{
        const url=`${baseUrl}/admin/${id}`
       const response=await axios.put(url)
       return response
    }
    catch(err){
return err
    }
}

const listAdminById=async (id)=>{
      try{
        const url=`${baseUrl}/admin/${id}`
       const response=await axios.get(url)
       return response
    }
    catch(err){
return err
    }
}

export{
    create,
    deleteParking,
    ListAllAdmin,
    listAdminById,
    UpdateAdmin

}

