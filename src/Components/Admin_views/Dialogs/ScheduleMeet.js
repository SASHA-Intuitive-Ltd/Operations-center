import React, { useCallback, useEffect, useState } from 'react'

import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import { DialogContent, DialogTitle, TextField, DialogActions, Button } from "@mui/material";
import DateTimePicker from '@mui/lab/DateTimePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import axios from 'axios'
import { MuiStyles } from '../../../styles/Mui_styles';

function ScheduleMeet({ openAdd, handleClose, patientsList, adminName }) {

    const [date, setDate] = useState(new Date())
    const [patient, setPatient] = useState("")
    const [topic, setTopic] = useState("")

    const [patInfoList, setInfoList] = useState([])
    const [current, setCurrent] = useState()

    /**useEffect(() => {
        var lst = []

        for (var i = 0; i < patientsList.length; i++) {

            fetch(`http://localhost:5000/users/${patientsList[i]}`)
                .then((response) => response.json())
                .then((data) => {
                    setCurrent(data)
                }
            )
    
            console.log(current)

            lst.push(current.fullname)
        }

        console.log(lst)

        setInfoList(lst)
    })*/

    const submitNewMeeting = useCallback(async () => {
        // TODO: Validators
        // TODO: Get generated link for this date ? decide how.

        // FIXME: Broken meeting link 

        // Send info to webserver 
        await axios.post('http://localhost:5000/meetings', {
            admin: adminName,
            user: patient,
            date: date,
            link: "https://zoom.us/",
            topic: topic
        })

        // Handle dialog closing
        handleClose()
    })

    const handleOnChangeDate = (newValue) => {
        setDate(newValue)
    }

    const handleOnChangeInput = (e) => {
        const { name, value } = e.target

        if (name === 'topic') {
            setTopic(value)
        }

        else if (name === 'patient_name') {
            setPatient(value)
        }
    }

    // Styles:
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
    const inputsContainerStyle = {
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 500,
        justifyContent: 'center',
        textAlign: 'center'
    }
    const tfieldStyle = {
        margin: 10,
        minHeight: 50
    }
    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={openAdd}
                onClose={handleClose}
            >
                <div style={{
                    border: '3px solid var(--global-primary)',
                }}>
                    <DialogTitle id="responsive-dialog-title" style={{minWidth: 400}}>
                        <h1 style={{...MuiStyles.TitleStyle, fontSize: 'x-large'}}>Schedule a new meeting with a patient</h1>
                    </DialogTitle>

                    <DialogContent style={inputsContainerStyle}>
                        <TextField style={tfieldStyle} id="topic" name="topic"
                            value={topic}
                            onChange={e => handleOnChangeInput(e)} 
                            label="Topic" variant="outlined" 
                        />

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                label="Date & Time"
                                value={date}
                                onChange={handleOnChangeDate}
                                renderInput={(params) => <TextField {...params} style={tfieldStyle}/>}
                            />
                        </LocalizationProvider>

                        <TextField style={tfieldStyle} id="patient_name" name="patient_name"
                            value={patient}
                            onChange={e => handleOnChangeInput(e)}
                            label="Patient name" variant="outlined"
                        />
                    </DialogContent>

                    <DialogActions>
                            <Button style={
                                MuiStyles.ButtonStyle
                            } 
                                autoFocus 
                                variant="outlined"
                                onClick={submitNewMeeting}
                            >
                                Schedule
                            </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    )
}

export default ScheduleMeet