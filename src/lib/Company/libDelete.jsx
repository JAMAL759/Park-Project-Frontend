import axios from "axios";

const deleteCompany = async (Identity) => {
    try {
        const response = await axios.delete("http://localhost:3000/company");
        return response
    } catch(err) {
        return err
    }
}

export {
    deleteCompany
}