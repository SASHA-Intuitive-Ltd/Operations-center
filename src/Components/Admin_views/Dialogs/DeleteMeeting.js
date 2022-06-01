/**
 * @Purpose React alert doalog for making sure that the user should be deleted from the database and from the admin's users
 */

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
 
 // HTTP
 import axios from 'axios'
 import { MuiStyles } from '../../../styles/Mui_styles';
 
 export default function DeleteMeeting({ meetingInfo, open, handleClose, setTrigger }) {
 
    /**
     * Function for removing the specified meeting from the meetings collection
     */
    async function deleteMeeting() {
        console.log(`Removing ${meetingInfo._id}`)
        await axios.delete(`https://operations-center-dev.herokuapp.com/meetings/${meetingInfo._id}`)
        setTrigger(true)
    }
 
    return (
         <div>
             <Dialog
                 open={open}
                 onClose={handleClose}
                 aria-labelledby="alert-dialog-title"
                 aria-describedby="alert-dialog-description"
             >
                 <DialogTitle sx={{ padding: 0, marginBottom: 2 }} id="alert-dialog-title">
                     <Alert variant='filled' severity='error' sx={{ fontSize: 'large', fontWeight: 'bold', borderRadius: 0 }}> Are you sure you want to cancel this meeting ?</Alert>
                 </DialogTitle>
                 <DialogContent>
                 <DialogContentText id="alert-dialog-description">
                     <h1 style={{fontSize: 'medium', padding: 0, margin: 0}}>This action is permanent and you would'nt be able to go back</h1>
                 </DialogContentText>
                 </DialogContent>
                 <DialogActions>
                     <Button style={MuiStyles.ButtonStyleRed} onClick={handleClose}>
                         <ThumbDownIcon style={{ marginRight: 5 }}/>Cancel
                     </Button>
                     <Button style={MuiStyles.ButtonStyle} onClick={() => {
                         deleteMeeting()
                         handleClose()
                     }} autoFocus>
                         <ThumbUpAltIcon style={{ marginRight: 5 }}/> Ok
                     </Button>
                 </DialogActions>
             </Dialog>
         </div>
     )
 
 }