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

function AddPatient({ openAdd, handleClose, adminInfo }) {

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [diseases, setDiseases] = useState([])
    const [gender, setGender] = useState("male")
    const [age, setAge] = useState(20)
    const [profileImg, setProfileImg] = useState("default")
    const [img, setImage] = useState(null)
    
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

    const imgStyle = {
        padding: 20,
        maxHeight: 75,
        maxWidth: 45
    }


    const submitNewPatient = useCallback(async () => {
        // Send info to webserver
        await axios.post('https://operations-center-dev.herokuapp.com/users', {
            fullname: fullname,
            password: password,
            email: email,
            address: adminInfo.location,
            phone: phone,
            profileImg: profileImg,
            gender: gender,
            device: 'temp'
        })

        // Handle dialog closing
        handleClose()
    })
    

    async function handleOnChangeInput(e) {
        const { name, value } = e.target

        if (name === 'picture') {
            if (e.target.files && e.target.files[0]) {
                let img1 = e.target.files[0];
                setImage(URL.createObjectURL(img1))
                
                storage.refFromURL(`gs://sasha-cds-poc.appspot.com/${img1.name}`).put(img1).on("state_changed" , alert("success") , alert);

                setProfileImg(`https://firebasestorage.googleapis.com/v0/b/sasha-cds-poc.appspot.com/o/${img1.name}?alt=media`)
            }
        }

        else if (name === 'fullname') {
            setFullname(value)
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

        else if (name === 'gender_male') {
            setGender(value)
        }

        else if (name === 'gender_female') {
            setGender(value)
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

                        <TextField style={MuiStyles.TextField} name="password" label="User password" variant="outlined" 
                            value={password}
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

                        <DialogContentText>Gender</DialogContentText>
                        <RadioGroup
                            defaultValue="male"
                            name="radio-buttons-group"
                            style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}
                        >
                            <FormControlLabel name='gender_male' onChange={e => handleOnChangeInput(e)}  value="male" label="Male"
                                control={
                                    <Radio 
                                        checked={gender === 'male'}
                                    />
                                } 
                            />
                            <FormControlLabel name='gender_female' onChange={e => handleOnChangeInput(e)} value="female" label="Female" 
                                control={
                                    <Radio 
                                        checked={gender === 'female'}
                                    />
                                } 
                            />
                        </RadioGroup>
                      
                        {
                            profileImg === "default" 
                            ?
                            <Button
                            variant="outlined"
                            component="label"
                            style={MuiStyles.ButtonStyle}
                            >
                            Upload patient image
                            <input
                                type="file"
                                hidden
                                name="picture"
                                onChange={handleOnChangeInput}
                            />
                            </Button>
                            : 
                            null
                        }
                        <img src={img} style={imgStyle}/>
                    </DialogContent>
                    <DialogActions>
                        <Button style={MuiStyles.ButtonStyle} onClick={submitNewPatient} autoFocus variant="contained">
                            Submit patient
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    )
}

export default AddPatient