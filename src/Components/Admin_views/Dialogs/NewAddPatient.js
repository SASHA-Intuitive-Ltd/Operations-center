import React, { useCallback, useState } from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Button, RadioGroup, TextField } from '@mui/material';
import { Radio } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { textAlign } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { auth, realtimeDb } from '../../../configs/newFirebaseConfig';

import axios from 'axios'
import { MuiStyles } from '../../../styles/Mui_styles';

function NewAddPatient({ openAdd, handleClose }) {

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState("")
    
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

    const submitNewPatient = useCallback(async () => {
        
        // Auth register action - Firebase Auth - email & password
        await auth.createUserWithEmailAndPassword(email, password).then((user) => {
            //Send email verification link
            console.log("Success")

            realtimeDb.ref("users/").push({
                username: username,
                password: password,
                email: email,
                phone: phone,
                fullname: fullname
            }).then(() => {

            })
            
        })
          .catch((error)=>{console.log(error)})
        // Handle dialog closing
        handleClose()
    })
    

    async function handleOnChangeInput(e) {
        const { name, value } = e.target

        if (name === 'fullname') {
            setFullname(value)
        }

        else if (name === 'username') {
            setUsername(value)
        }

        else if (name === 'password') {
            setPassword(value)
        }

        else if (name === 'email') {
            setEmail(value)
        }

        else if (name === 'phone') {
            setPhone(value)
        }
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
                        <h1 style={{...MuiStyles.TitleStyle, width: '100%', textAlign: 'center', fontSize: 'xx-large'}}>Enter new patient info</h1>
                    </DialogTitle>
                    <DialogContent style={{...MuiStyles.InputsContainerStyleNoHorizScroll, textAlign: 'center', marginTop: '0' }}>
                        <TextField style={MuiStyles.TextField} name="fullname" label="Full name" variant="outlined" 
                            value={fullname}
                            onChange={e => handleOnChangeInput(e)} 
                        />

                        <TextField style={MuiStyles.TextField} name="email" label="Email Address" variant="outlined"
                            value={email}
                            onChange={e => handleOnChangeInput(e)} 
                        />

                        <TextField style={MuiStyles.TextField} name="username" label="Username" variant="outlined"
                            value={username}
                            onChange={e => handleOnChangeInput(e)} 
                        />


                        <TextField style={MuiStyles.TextField} name="password" label="Password" variant="outlined" 
                            value={password}
                            onChange={e => handleOnChangeInput(e)} 
                        />

                        <TextField style={MuiStyles.TextField} name="phone" label="Phone number" variant="outlined" 
                            value={phone}
                            onChange={e => handleOnChangeInput(e)} 
                        />
                        
                    </DialogContent>
                    <DialogActions>
                        <Button style={MuiStyles.ButtonStyle} onClick={submitNewPatient} autoFocus variant="contained">
                            Submit
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    )
}

export default NewAddPatient