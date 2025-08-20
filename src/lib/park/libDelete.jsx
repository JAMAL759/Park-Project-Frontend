import axios from "axios";

const deletePark = async (Identity) => {
    try {
        const response = await axios.delete(`http://localhost:3000/company/${Identity}`);
        return response
    } catch(err) {
        return err
    }
}

export {
    deletePark
}