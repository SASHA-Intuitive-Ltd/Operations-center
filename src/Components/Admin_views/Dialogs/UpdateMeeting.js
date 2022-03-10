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
    const [date, setDate] = useState(new Date())
    const [topic, setTopic] = useState("")

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle id="responsive-dialog-title" style={{minWidth: 400}}>
                    <b>Edit meeting info, (meeting id: <u>{meetingInfo._id}</u>)</b>
                </DialogTitle>
            </Dialog>
        </div>
    )
}