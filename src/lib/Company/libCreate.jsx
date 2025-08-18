import axios from "axios";

const createCompany  = (data) => {

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