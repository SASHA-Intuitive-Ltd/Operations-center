// Import react modules
import React, { useState } from "react"
import { MuiStyles } from "../../../../styles/Mui_styles";

// Import MUI icons and components
import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent, DialogActions, TextField, Fab, FormControlLabel, RadioGroup, Radio, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles'
import CheckIcon from '@mui/icons-material/Check';
import useMediaQuery from '@mui/material/useMediaQuery';
import { set } from "date-fns";

// Dialog function component for adding step to a scenario
export default function CreateStep({ open, handleClose, addStep }) {

    // Theme and full screen settings
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

    // Inputs states reset
    const [ stepTitle, setTitle ] = useState('')
    const [ stepDesc, setDesc ] = useState('')
    const [ shown, setShown ] = useState(true)
    const [ pers, setPers ] = useState(0)


    // Handle text fields inputs changes
    const handleInputChange = (e) => {
        // Const of name and value
        const { name, value } = e.target

        // If step title
        if (name === 'stepTitle') {
            // Set step's title
            setTitle(value) 
        }

        // If scenario description
        else if (name === 'stepDesc') {
            // Set step's description
            setDesc(value)
        }
    }

    // Handle radio buttons value change
    const handleShown = (e) => {

        // If radio button represents true
        if (e.target.value === 'true') {
            // Set shown true
            setShown(true) 
        }

        // If radio button represents false 
        else if (e.target.value === 'false') {
            // Set shown to false
            setShown(false)
        }
    }

    // On clicking V 
    const onSubmit = () => {
        // Use the addStep hook from the params for adding a new step to the steps list
        addStep({
            stepTitle: stepTitle,
            stepDesc: stepDesc,
            isShown: shown,
            pers: pers
        })

        // Clean input states
        setTitle("")
        setDesc("")
        setShown(true)
        setPers(0)

        // Handling dialog closing
        handleClose()
    }

    return (
        <div>
             <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle id="responsive-dialog-title" style={{minWidth: 400}}>
                    <Typography variant="h4"><b>Add new step</b></Typography>
                </DialogTitle>

                <DialogContent style={MuiStyles.InputsContainerStyleNoHorizScroll}>
                    <TextField style={MuiStyles.TextField} name='stepTitle' id="outlined-basic" label="Step title" variant="outlined" value={stepTitle} onChange={handleInputChange}/>
                    
                    <TextField style={MuiStyles.TextField}
                        name='stepDesc'
                        id="outlined-basic"
                        label="Step description"
                        variant="outlined"
                        multiline
                        rows={5}     
                        maxRows={20} 
                        value={stepDesc}
                        onChange={handleInputChange}
                    />


                    <Typography sx={{ textAlign: 'center', width: '100%' }} ><b>Choose step's visibillity</b></Typography>
                    <RadioGroup
                        defaultValue="true"
                        name="radio-buttons-group"
                        style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}
                    >
                        <FormControlLabel name='true_option' onChange={handleShown} value="true" control={<Radio checked={shown} />} label="True" />
                        <FormControlLabel name='false_option'  onChange={handleShown} value="false" control={<Radio checked={!shown}/>} label="False" />
                    </RadioGroup>
                </DialogContent>

                <DialogActions>
                    <Fab style={MuiStyles.ButtonStyle} autoFocus variant="outlined" onClick={onSubmit}>
                        <CheckIcon/>
                    </Fab>
                </DialogActions>
            </Dialog>
        </div>
    )
}