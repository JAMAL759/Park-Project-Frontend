import React from 'react';
import {updateCompany} from '../../lib/Company/libDelete';

const CompanyUpdate = ({ID  , AllCompany , data}) => {
    
    const Update = async () => {

            await updateCompany(ID , data);
            AllCompany();
    }

    return (
        <button onClick = {Update}> Update </button>
    )
}
export default CompanyUpdate