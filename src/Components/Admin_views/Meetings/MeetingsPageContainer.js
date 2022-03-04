import { Fab } from '@mui/material'
import React, { useState, useEffect } from 'react'
import MeetingsList from './MeetingsList'
import ScheduleMeet from '../Dialogs/ScheduleMeet'
import DateTimePicker from '@mui/lab/DateTimePicker'
import { Add, AddCircleOutline, AddLocation } from '@mui/icons-material'
import { MuiStyles } from '../../../styles/Mui_styles'


function MeetingsPageContainer({ }) {

    const [open, setOpen] = useState(false)
    const [meetings, setMeetings] = useState([{
        "fullname": "ADMIN_NAME",
        "patient": "Patient_id",
        "date": "03/01/2022 04:05 pm",
        "link": "",
        "topic": "TOPIC_DESC"
    }]
    )

    const [ adminInfo, setInfo ] = useState({})

    useEffect(() => {
        // Find all admin's booked meetings starting from today's date and on, by admin name
        
        // Starture for example
        
        fetch('http://localhost:5000/admins/620a324365bd8515cf1a7ba3').then((response) => response.json())
        .then((data) => {
            setInfo(data);
        })
        console.log(adminInfo)
        
    }, [])

    // Dialog opening and closing handlers
    const handleClickOpen = () => () => {
        setOpen(true)
    }
    
    const handleClose = () => {
          setOpen(false)
    }
    
    return (
        <div>
            {/* Meetings list according to admin ordered by chronological order of dates and times: high priority */}
            <center><MeetingsList meetings={meetings}/></center>
            {/* Floating action button for dialog of creating new meeting high priority */}
            <Fab className='insert-fab' 
                style={MuiStyles.FabStyle} onClick={handleClickOpen()}>
                <Add className='fab-icon' style={{color: 'var(--global-primary)', fontSize: 'xx-large'}}/>
            </Fab>
            {/* Schedule dialog containing */}
            <ScheduleMeet openAdd={open} handleClose={handleClose} patientsList={adminInfo.patients} adminName={adminInfo.fullname}/>
        </div>
    )
}

export default MeetingsPageContainer