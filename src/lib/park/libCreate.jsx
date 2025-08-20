import axios from "axios";

const createPark  = (data) => {

try {
    const Create = axios.post(`http://localhost:3000/company/new` , data);
    console.log(Create);
}catch(err) {
    return err
}
 
}

export {
    createCompany
}