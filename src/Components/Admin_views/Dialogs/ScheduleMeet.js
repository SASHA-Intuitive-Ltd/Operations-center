import React, { useCallback, useEffect, useState } from 'react'

import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import { DialogContent, DialogTitle, TextField, DialogActions, Button } from "@mui/material";
import DateTimePicker from '@mui/lab/DateTimePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import axios from 'axios'

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

        // Send info to webserver
        await axios.post('http://localhost:5000/meetings', {
            admin: adminName,
            user: patient,
            date: date,
            link: "",
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
                <DialogTitle id="responsive-dialog-title" style={{minWidth: 400}}>
                        Schedule a new meeting with a patient
                </DialogTitle>

                <DialogContent style={inputsContainerStyle}>
                    <TextField style={tfieldStyle} id="topic" name="topic"
                        value={topic}
                        onChange={e => handleOnChangeInput(e)} 
                        label="Topic" variant="outlined" 
                    />

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            label="Date&Time picker"
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

                    {/* Pick patient from patients list (Get name by objectId for each patient of an admin, via server...) */}
                    <div>
                        {patientsList}
                    </div>
                </DialogContent>

                <DialogActions>
                        <Button style={{textTransform: 'none',
                            color: 'var(--global-primary)', borderColor: 'var(--global-primary)'}} 
                            autoFocus 
                            variant="outlined"
                            onClick={submitNewMeeting}
                        >
                            Schedule
                        </Button>
                    </DialogActions>
            </Dialog>
        </div>
    )
}

export default ScheduleMeet