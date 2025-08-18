import axios from "axios";

const updateCompany = async (Identity, data) => {
    try {
        const response = await axios.put(`http://localhost:3000/company/${Identity}` , data);
        return response
    } catch(err) {
        return err
    }
}

export {
    updateCompany
}