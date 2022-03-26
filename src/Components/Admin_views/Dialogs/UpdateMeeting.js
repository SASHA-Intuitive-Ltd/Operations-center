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


    
export default function UpdateMeeting({ open, handleClose, meetingInfo, setTrigger }) {

    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

    // Doable updates are: changing date or topic
    const [date, setDate] = useState(meetingInfo.date)
    const [topic, setTopic] = useState(meetingInfo.topic)

    // Submit the edits to the server
    async function submitEdits() {

        axios.put(`http://localhost:5000/meetings/${meetingInfo._id}`, {
            _id: meetingInfo._id,
            user: meetingInfo.user,
            admin: meetingInfo.admin,
            link: meetingInfo.link,
            date: date,
            topic: topic
        })

        setTrigger(true)
        handleClose()
    }

    // Handle date changes 
    const handleOnChangeDate = (newValue) => {
        setDate(newValue)
    }

    // Handle input changes 
    const handleOnChangeInput = (e) => {
        const { name, value } = e.target

        if (name === 'topic') {
            setTopic(value)
        }

        /**
         * In case we add more possible params, handle value changes like that:
            else if (name === 'X_param_name') {
                setX(value)
            }
         */
    }

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
            >
                <div style={{
                    border: '3px solid var(--global-primary)',
                }}>
                    <DialogTitle id="responsive-dialog-title" style={{minWidth: 100}}>
                        <h1 style={{...MuiStyles.TitleStyle, fontSize: 'x-large'}}>Edit meeting info, (meeting id: <u>{meetingInfo._id}</u>)</h1>
                    </DialogTitle>

                    <DialogContent style={MuiStyles.InputsContainerStyleNoHorizScroll}>
                        <TextField style={MuiStyles.TextField} id="topic" name="topic"
                            value={topic}
                            onChange={e => handleOnChangeInput(e)} 
                            label="Topic" variant="outlined" 
                        />

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                label="Date & Time"
                                value={date}
                                onChange={handleOnChangeDate}
                                renderInput={(params) => <TextField {...params} style={MuiStyles.TextField}/>}
                            />
                        </LocalizationProvider>
                    </DialogContent>

                    <DialogActions>
                        <Button style={MuiStyles.ButtonStyle} onClick={submitEdits} autoFocus variant="contained">
                            Confirm
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    )
}