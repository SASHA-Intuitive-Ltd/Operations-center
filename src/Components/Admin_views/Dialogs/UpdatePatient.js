import React, { useState, useCallback } from 'react'
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

import axios from 'axios'
import { MuiStyles } from '../../../styles/Mui_styles';

export default function UpdatePatient({ patientInfo, openAdd, handleClose, setTrigger }) {

    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
    
    const [ fullname, setName ] = useState(patientInfo.fullname)
    const [email, setEmail] = useState(patientInfo.email)
    const [password, setPassword] = useState(patientInfo.password)
    const [address, setAdress] = useState(patientInfo.address)
    const [phone, setPhone] = useState(patientInfo.phone)
    const [diseases, setDiseases] = useState(patientInfo.diseases)
    const [profileImg, setProfileImg] = useState("default")

    const handleOnChangeInput = (e) => {
        const { name, value } = e.target

        /** if (name === 'picture') {
            if (e.target.files && e.target.files[0]) {
                let img1 = e.target.files[0];
                setImage(URL.createObjectURL(img1)) }
        }*/

        if (name === 'fullname') {
            setName(value)
        }

        else if (name === 'password') {
            setPassword(value)
        }

        else if (name === 'email') {
            setEmail(value)
        }

        else if (name === 'address') {
            setAdress(value)
        }

        else if (name === 'phone') {
            setPhone(value)
        }
    }

    const submitEdits = useCallback(async () => {
        // TODO: Validators

        // Send info to webserver
        await axios.put(`http://localhost:5000/users/${patientInfo._id}`, {
            fullname: fullname,
            password: password,
            email: email,
            address: address,
            phone: phone,
            profileImg: profileImg,
            gender: patientInfo.gender
        })

        // Handle dialog closing
        handleClose()
        setTrigger(true)
    })

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={openAdd}
                onClose={handleClose}
            >
                <DialogTitle id="responsive-dialog-title" style={{minWidth: 400}}>
                    <p>Edit {patientInfo.fullname}'s information</p>
                </DialogTitle>
                <DialogContent style={MuiStyles.InputsContainerStyle}>
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
                        
                        <TextField style={MuiStyles.TextField} name="address" label="Home Adress" variant="outlined" 
                            value={address}
                            onChange={e => handleOnChangeInput(e)} 
                        />

                        <TextField style={MuiStyles.TextField} name="phone" label="Phone number" variant="outlined" 
                            value={phone}
                            onChange={e => handleOnChangeInput(e)} 
                        />
                        
                        <TextField style={MuiStyles.TextField} name="disease" label="Previous diseases" variant="outlined" 
                            value={diseases}
                            onChange={e => handleOnChangeInput(e)} 
                        />
                </DialogContent>
                <DialogActions>
                    <Button style={MuiStyles.ButtonStyle} onClick={submitEdits} autoFocus variant="contained">
                        Edit {patientInfo.fullname}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}