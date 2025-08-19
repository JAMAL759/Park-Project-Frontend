import React from 'react';
import {deleteCompany} from '../../lib/Company/libDelete';

const CompnayDelete = ({ID}) => {
    
    const Deletion = async () => {

            await deleteCompany(ID);

    }

    return (
        <button onClick = {Deletion}> Delete </button>
    )
}
export default CompnayDelete