import React, { useCallback, useEffect, useState } from 'react'

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
import { id } from 'date-fns/locale';
import { useParams } from 'react-router-dom';
import AdminView from '../AdminView';

function AddAdmin({ openAdd, handleClose, adminInfo }) {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [location, setLocation] = useState("")

    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

    if (location === null) {
        setLocation(adminInfo.location)
    }

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
            setLocation(value)
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
                        <h1 style={{...MuiStyles.TitleStyle, width: '100%', textAlign: 'center', fontSize: 'xx-large'}}>Enter new admin info</h1>
                    </DialogTitle>
                    <DialogContent style={{...MuiStyles.InputsContainerStyleNoHorizScroll, textAlign: 'center', marginTop: '0' }}>
                        <TextField style={MuiStyles.TextField} name="fullname" label="Fullname" variant="outlined" 
                            value={fullname}
                            onChange={e => handleOnChangeInput(e)} 
                        />

                        <TextField style={MuiStyles.TextField} name="email" label="Email" variant="outlined"
                            value={email}
                            onChange={e => handleOnChangeInput(e)} 
                        />

                        <TextField style={MuiStyles.TextField} name="password" label="Password" variant="outlined" 
                            value={password}
                            onChange={e => handleOnChangeInput(e)} 
                        />
                        
                        { 
                            adminInfo.location === 'Home' ?
                            <TextField style={MuiStyles.TextField} name="location" label="Address" variant="outlined" 
                                value={location}
                                onChange={e => handleOnChangeInput(e)} 
                            />
                            :
                            null
                        }

                    </DialogContent>
                    <DialogActions>
                        <Button style={MuiStyles.ButtonStyle} onClick={submitNewAdmin} autoFocus variant="contained">
                            Submit admin
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    )
}

export default AddAdmin