import React from 'react';
import {deleteCompany} from '../../lib/Company/libDelete';

const CompnayDelete = ({ID  , AllCompany}) => {
    
    const Deletion = async () => {

            await deleteCompany(ID);
            AllCompany();
    }

    return (
        <button onClick = {Deletion}> Delete </button>
    )
}
export default CompnayDelete