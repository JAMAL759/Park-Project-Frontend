import React from 'react';
import {updateCompany} from '../../lib/Company/libDelete';

const CompanyUpdate = ({ID, data}) => {
    
    const Update = async () => {

            await updateCompany(ID , data);
          
    }

    return (
        <button onClick = {Update}> Update </button>
    )
}
export default CompanyUpdate