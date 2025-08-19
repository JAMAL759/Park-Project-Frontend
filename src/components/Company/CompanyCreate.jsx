import React from 'react';
import { createCompany } from '../../lib/Company/libCreate';


const CompanyCreation = ({data }) => {
    
    const Creation = async () => {

        await createCompany(data);
  
}

return (
    <button onClick = {Creation}> Create </button>
)
}

export {
    CompanyCreation
}