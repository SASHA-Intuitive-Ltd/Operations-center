
import React, { useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { MuiStyles } from '../../../styles/Mui_styles';

export default function Emergency({ emergency, open, handleClose }) {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                
                <DialogTitle sx={{ padding: 0, marginBottom: 2 }} id="alert-dialog-title">
                    <Alert variant='filled' severity='error' sx={{ fontSize: 'large', fontWeight: 'bold', borderRadius: 0 }}>Emergency! In room: {emergency.room_id}</Alert>
                </DialogTitle>
                <DialogContent style={MuiStyles.InputsContainerStyleNoHorizScroll}>
                    <h1>Patient: {emergency.patient}</h1>
                    <p>Description: {emergency.issue}</p>
                </DialogContent>
                <DialogActions>
                    <Button style={MuiStyles.ButtonStyleRed} onClick={handleClose}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
