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

export default function DeletePatient({ patientInfo, open, handleClose, setTrigger }) {

    const [ admin, setAdmin ] = useState({})
    const { id } = useParams()
    

    /*async function deleteUser() {
    
    }*/

    async function deleteUser() {
        console.log(`Removing ${patientInfo._id}`)
        await axios.delete(`https://operations-center-dev.herokuapp.com/users/${patientInfo._id}`)
        setTrigger(true)
        // TODO: Update admin's users list, remove the useId of the removed user from this array, not crucial, cause the user won't be shown in the table cause his
        // Id value, returns null value, but for efficient the process and save data transport between client and server, we remove it from admin's list as well.
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
                    <Alert variant='filled' severity='error' sx={{ fontSize: 'large', fontWeight: 'bold', borderRadius: 0 }}> Are you sure you want to delete <u>{patientInfo.fullname}'s</u> account ?</Alert>
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
                        deleteUser()
                        handleClose()
                    }} autoFocus>
                        <ThumbUpAltIcon style={{ marginRight: 5 }}/> Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}