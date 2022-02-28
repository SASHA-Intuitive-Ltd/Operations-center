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

import axios from 'axios'
import { MuiStyles } from '../../../styles/Mui_styles';

function AddPatient({ openAdd, handleClose }) {

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAdress] = useState("")
    const [phone, setPhone] = useState("")
    const [diseases, setDiseases] = useState([])
    const [gender, setGender] = useState("")
    const [profileImg, setProfileImg] = useState("default")

    const [img, setImage] = useState(null)
    
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

    const inputsContainerStyle = {
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 500,
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'scroll'
    }

    const imgStyle = {
        padding: 20,
        maxHeight: 75,
        maxWidth: 45
    }

    const tfieldStyle = {
        margin: 10
    }

    const submitNewPatient = useCallback(async () => {
        // TODO: Validators

        // Send info to webserver
        await axios.post('http://localhost:5000/users', {
            fullname: fullname,
            password: password,
            email: email,
            address: address,
            phone: phone,
            profileImg: profileImg,
            gender: gender
        })

        // Handle dialog closing
        handleClose()
    })
    
    const pickerItems = () => {
        var items = []
        
        for(var i = 20; i < 100; i++) {
            items.push(<MenuItem value={i}>{i}</MenuItem>)
        }

        return items
    }

    const handleOnChangeInput = (e) => {
        const { name, value } = e.target

        if (name === 'picture') {
            if (e.target.files && e.target.files[0]) {
                let img1 = e.target.files[0];
                setImage(URL.createObjectURL(img1)) }
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

        else if (name === 'address') {
            setAdress(value)
        }

        else if (name === 'phone') {
            setPhone(value)
        }

        //else if (name === 'gender') {
          //  setEmail(value)
        //}
    }

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={openAdd}
                onClose={handleClose}
            >
                    <DialogTitle id="responsive-dialog-title" style={{minWidth: 400}}>
                        <p>Enter new patient info</p>
                    </DialogTitle>
                    <DialogContent style={inputsContainerStyle}>
                        <TextField style={tfieldStyle} name="fullname" label="Full name" variant="outlined" 
                            value={fullname}
                            onChange={e => handleOnChangeInput(e)} 
                        />

                        <TextField style={tfieldStyle} name="email" label="Email address" variant="outlined"
                            value={email}
                            onChange={e => handleOnChangeInput(e)} 
                        />

                        <TextField style={tfieldStyle} name="password" label="User password" variant="outlined" 
                            value={password}
                            onChange={e => handleOnChangeInput(e)} 
                        />
                        
                        <TextField style={tfieldStyle} name="address" label="Home Adress" variant="outlined" 
                            value={address}
                            onChange={e => handleOnChangeInput(e)} 
                        />

                        <TextField style={tfieldStyle} name="phone" label="Phone number" variant="outlined" 
                            value={phone}
                            onChange={e => handleOnChangeInput(e)} 
                        />
                        
                        <TextField style={tfieldStyle} name="disease" label="Previous diseases" variant="outlined" 
                            value={diseases}
                            onChange={e => handleOnChangeInput(e)} 
                        />

                        <DialogContentText>Gender</DialogContentText>
                        <RadioGroup
                            defaultValue="male"
                            name="radio-buttons-group"
                            style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}
                        >
                            <FormControlLabel name='gender_male' value="male" control={<Radio />} label="Male" />
                            <FormControlLabel name='gender_female' value="female" control={<Radio />} label="Female" />
                        </RadioGroup>
                        <FormControl style={tfieldStyle}>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                >
                                    {
                                        pickerItems()
                                    }
                                </Select>
                        </FormControl>
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
                        <img src={img} style={imgStyle}/>
                    </DialogContent>
                    <DialogActions>
                        <Button style={MuiStyles.ButtonStyle} onClick={submitNewPatient} autoFocus variant="contained">
                            Submit patient
                        </Button>
                    </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddPatient