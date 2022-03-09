import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import { DialogContent, DialogTitle, TextField, DialogActions, Button } from "@mui/material";
import DateTimePicker from '@mui/lab/DateTimePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import axios from 'axios'
import { MuiStyles } from '../../../styles/Mui_styles';

export default function MoreInfo({ openAdd, handleClose, info }) {
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

    function getDateFormat(date) {
        if (typeof date === "string") {
            var sliceDate =  date.substring(0, 10).split('-')
            var sliceTime = date.substring(11, 16)

            return sliceDate[2] + '/' + sliceDate[1] + '/' + sliceDate[0] + ' at '
            + sliceTime
        }
        return date
    }
    
    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={openAdd}
                onClose={handleClose}
            >
                <DialogTitle style={{ fontSize: 'x-large' }}>
                    <b>Topic: {info.topic}</b>
                </DialogTitle>
                <DialogContent style={MuiStyles.InputsContainerStyleNoHorizScroll}>
                    <h2>Patient: {info.user}</h2>
                    <p>
                        On: {getDateFormat(info.date)}
                        <br/>
                        Link: <a href={info.link}>{info.link}</a>
                    </p>
                </DialogContent>
                <DialogActions>
                    <Button style={MuiStyles.ButtonStyleRed} autoFocus variant="outlined" onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}