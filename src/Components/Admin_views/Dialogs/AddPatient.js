import React from 'react'

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

function AddPatient({ openAdd, handleClose }) {

    
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

    const inputsContainerStyle = {
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 500,
        justifyContent: 'center',
        textAlign: 'center'
    }

    const tfieldStyle = {
        margin: 10
    }

    const buttonStyle = {
        textTransform: 'none', 
        color: 'var(--global-primary)',
        borderColor: 'var(--global-primary)',
        margin: 10
    }

    const pickerItems = () => {
        var items = []
        for(var i = 20; i < 100; i++) {
            items.push(<MenuItem value={i}>{i}</MenuItem>)
        }
        return items
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
                        <TextField style={tfieldStyle} id="outlined-basic" label="Full name" variant="outlined" />
                        <TextField style={tfieldStyle} id="outlined-basic" label="Email address" variant="outlined" />
                        <TextField style={tfieldStyle} id="outlined-basic" label="Home Adress" variant="outlined" />
                        <TextField style={tfieldStyle} id="outlined-basic" label="Phone number" variant="outlined" />
                        <TextField style={tfieldStyle} id="outlined-basic" label="Previous diseases" variant="outlined" />

                        <DialogContentText>Gender</DialogContentText>
                        <RadioGroup
                            defaultValue="male"
                            name="radio-buttons-group"
                            style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}
                        >
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
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
                            style={buttonStyle}
                            >
                            Upload patient image
                            <input
                                type="file"
                                hidden
                            />
                        </Button>
                    </DialogContent>
                    <DialogActions>
                        <Button style={buttonStyle} autoFocus variant="contained" sx={{backgroundColor: 'green', color: 'white !important'}} onClick={handleClose}>
                            Submit patient
                        </Button>
                    </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddPatient