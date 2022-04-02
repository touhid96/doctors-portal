import React from 'react';
import '../../App.css'

const PatientTable = ({ data }) => {
    return (
        <tr>
            <th>{data.name}</th>
            <th>10.00 AM</th>
            <th>
                <button className="text-light p-1 rounded"
                style={{backgroundImage: 'linear-gradient(to right, #18d2b2, #0fcfe8)',border:'none',}}>
                    Pending
                </button>
            </th>
        </tr>
    );
};

export default PatientTable;