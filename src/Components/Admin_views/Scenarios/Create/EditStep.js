// Import react modules
import React, { useState } from "react"
import { MuiStyles } from "../../../../styles/Mui_styles";

// Import MUI icons and components
import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent, DialogActions, TextField, Fab } from "@mui/material";
import { useTheme } from '@mui/material/styles'
import CheckIcon from '@mui/icons-material/Check';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography } from "@mui/material";
import Edit from "@mui/icons-material/Edit";

// Dialog function component for adding step to a scenario
export default function CreateStep({ open, handleClose, editStep, stepInfo }) {

    // Theme and full screen settings
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

    // Inputs states reset
    const [ stepTitle, setTitle ] = useState(stepInfo.item.title)
    const [ stepDesc, setDesc ] = useState(stepInfo.item.desc)

    const handleInputChange = (e) => {
        // Const of name and value
        const { name, value } = e.target

        // If step title
        if (name === 'stepTitle') {
            setTitle(value)
        }

        // If scenario description
        else if (name === 'stepDesc') {
            setDesc(value)
        }
    }

    const onSubmit = () => {
        editStep({
            stepTitle: stepTitle,
            stepDesc: stepDesc
        })

        setTitle("")
        setDesc("")

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