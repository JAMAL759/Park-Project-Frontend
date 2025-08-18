import React from 'react';
import { createCompany } from '../../lib/Company/libCreate';


const CompanyCreation = ({data , AllCompany}) => {
    
    const Creation = async () => {

        await createCompany(data);
        AllCompany();
}

return (
    <button onClick = {Creation}> Create </button>
)
}