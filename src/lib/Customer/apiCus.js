import axios from "axios"

const baseUrl = "http://localhost:3000"

const createNewCus =async (data) =>{
    try{
        const url=`${baseUrl}/customer/new`
       const response=await axios.post(url,data)
       return response
    }
    catch(err){
return err
    }
}
const deleteCustomer=async (id) => {
      try{
        const url=`${baseUrl}/admin/${id}`
       const response=await axios.delete(url)
       return response
    }
    catch(err){
return err
    }
}

export{
    createNewCus,
    deleteCustomer
}