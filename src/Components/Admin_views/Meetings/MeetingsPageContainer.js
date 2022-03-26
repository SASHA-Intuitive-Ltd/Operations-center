import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import MeetingsList from './MeetingsList'
import ScheduleMeet from '../Dialogs/ScheduleMeet'
import DateTimePicker from '@mui/lab/DateTimePicker'
import { Add, AddCircleOutline, AddLocation, Home } from '@mui/icons-material'
import { MuiStyles } from '../../../styles/Mui_styles'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { borderLeft } from '@mui/system'


function MeetingsPageContainer({ }) {

    const { id } = useParams()
    const history = useHistory()

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
            <div style={{ ...MuiStyles.FabStyle, top: '90%', left: '90%', border: 'none', backgroundColor: 'transparent' }}>
                <Button 
                    className='insert-fab'
                    style={{...MuiStyles.IconButtonStyle1, border: '3px solid var(--global-primary)', 
                        borderRight:  '1.5px solid var(--global-primary)',
                        borderRadius: '20px 0 0 20px'
                    }} onClick={handleClickOpen()}>
                    <Add className='fab-icon' style={{color: 'var(--global-primary)', fontSize: 'xx-large'}}/>
                </Button>
                <Button 
                        className='insert-fab'
                        onClick={() => {
                            history.push(`/home_admin/${id}`)
                        }}
                        style={{...MuiStyles.IconButtonStyle1, border: '3px solid var(--global-primary)',
                            borderLeft:  '1.5px solid var(--global-primary)'
                            , borderRadius: '0 20px 20px 0'
                        }}
                >
                    <Home className='fab-icon' style={{color: "var(--global-primary)", fontSize: 'xx-large'}}/>
                </Button>
            </div>
            {/* Schedule dialog containing */}
            <ScheduleMeet openAdd={open} handleClose={handleClose} patientsList={adminInfo.patients} adminName={adminInfo.fullname}/>
        </div>
    )
}

export default MeetingsPageContainer