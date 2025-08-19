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
const deleteBook=async (id) => {
      try{
        const url=`${baseUrl}/customer/${id}`
       const response=await axios.delete(url)
       return response
    }
    catch(err){
return err
    }
}

export{
    createNewBook,
    deleteBook
}