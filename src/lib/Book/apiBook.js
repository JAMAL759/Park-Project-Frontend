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
        const url=`${baseUrl}/book/${id}`
       const response=await axios.delete(url)
       return response
    }
    catch(err){
return err
    }
}
const ListAllBook=async () => {
      try{
        const url=`${baseUrl}/book/`
        console.log(url)
       const response=await axios.get(url)
       console.log(response)
       return response.data
    }
    catch(err){
return err
    }
}

export{
    createNewBook,
    deleteBook,
    ListAllBook
}