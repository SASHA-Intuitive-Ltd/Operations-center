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

import storage from '../../../configs/firebaseConfig';

import axios from 'axios'
import { MuiStyles } from '../../../styles/Mui_styles';

function AddAdmin({ openAdd, handleClose }) {

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [location, setLocatiom] = useState("")
    
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

    

    const submitNewAdmin = useCallback(async () => {
        // Send info to webserver
        await axios.post('https://operations-center-dev.herokuapp.com/admins', {
            fullname: fullname,
            password: password,
            email: email,
            location: location
        })

        // Handle dialog closing
        handleClose()
    })

    async function handleOnChangeInput(e) {
        const { name, value } = e.target

        if (name === 'fullname') {
            setFullname(value)
        }

        else if (name === 'password') {
            setPassword(value)
        }

        else if (name === 'email') {
            setEmail(value)
        }

        else if (name === 'location') {
            setLocatiom(value)
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

                        <TextField style={MuiStyles.TextField} name="email" label="Email address" variant="outlined"
                            value={email}
                            onChange={e => handleOnChangeInput(e)} 
                        />

                        <TextField style={MuiStyles.TextField} name="password" label="User password" variant="outlined" 
                            value={password}
                            onChange={e => handleOnChangeInput(e)} 
                        />
                        
                        <TextField style={MuiStyles.TextField} name="location" label="Home Adress" variant="outlined" 
                            value={location}
                            onChange={e => handleOnChangeInput(e)} 
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button style={MuiStyles.ButtonStyle} onClick={submitNewAdmin} autoFocus variant="contained">
                            Submit patient
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    )
}

export default AddAdmin