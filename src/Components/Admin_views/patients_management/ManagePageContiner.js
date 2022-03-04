import React, { useState, useEffect } from 'react'
import PatientsList from './PatientsList'

function ManagePageContiner({ }) {
    
    // Search admin's patients by admin ID (According to route param)
    const [ adminInfo, setInfo ] = useState({})

    useEffect(() => {}, [])

    return (
        <div>
            {/* Filters bar */}
            
            {/* Table that displays (for each user): Name (link to view all details), age, gender, latest heart info, update and delete dialog triggers */}
            <PatientsList/>
        </div>
    )
}

export default ManagePageContiner