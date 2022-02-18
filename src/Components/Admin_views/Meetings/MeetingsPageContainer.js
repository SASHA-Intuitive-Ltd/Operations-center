import { Fab } from '@mui/material'
import React, { useState, useEffect } from 'react'
import MeetingsList from './MeetingsList'
import ScheduleMeet from '../Dialogs/ScheduleMeet'
import DateTimePicker from '@mui/lab/DateTimePicker'


function MeetingsPageContainer({ adminInfo }) {

    const [open, setOpen] = useState(false)
    const [meetings, setMeetings] = useState([{}])

    useEffect(() => {
        // Find all admin's booked meetings starting from today's date and on, by admin name
        
        // Starture for example
        var meetings = [{
            "fullname": "ADMIN_NAME",
            "patient": "Patient_id",
            "date": "03/01/2022 04:05 pm",
            "link": "",
            "topic": "TOPIC_DESC"
        }]
        
    }, [adminInfo])

    // Dialog opening and closing handlers
    const handleClickOpen = () => () => {
        setOpen(true)
    }
    
    const handleClose = () => {
          setOpen(false)
    }
    
    return (
        <div>
            <p>{adminInfo.fullname}</p>
            {/* Floating action button for dialog of creating new meeting high priority */}
            <Fab onClick={handleClickOpen()}/>

            {/* Filters bar TODO: not a high priority for now... */}

            {/* Meetings list according to admin ordered by chronological order of dates and times: high priority */}
            <MeetingsList meetings={meetings}/>
           
            {/* Schedule dialog containing */}
            <ScheduleMeet openAdd={open} handleClose={handleClose} patientsList={adminInfo.patients} adminName={adminInfo.fullname}/>
        </div>
    )
}

export default MeetingsPageContainer