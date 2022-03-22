// Import react modules
import React, { useEffect, useState } from "react"
import { MuiStyles } from "../../../../styles/Mui_styles";

// Import MUI icons and components
import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent, DialogActions, TextField, Fab, FormControlLabel, RadioGroup, Radio, Typography, MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import { useTheme } from '@mui/material/styles'
import CheckIcon from '@mui/icons-material/Check';
import useMediaQuery from '@mui/material/useMediaQuery';
import { set } from "date-fns";

// Dialog function component for adding step to a scenario
export default function CreateStep({ open, handleClose, addStep }) {

    // Theme and full screen settings
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

    // Input states definition
    const [ pers, setPers ] = useState(0)

    // Steps and chosen step states definition
    const [ steps, setSteps ] = useState([{}])
    const [ chosen, setChosen ] = useState({})

    // Async function for accessing the steps from the database
    async function getSteps() {
        // Fetch steps collection through api controller
        await fetch('http://localhost:5000/steps/')
        .then((response) => response.json())
        .then((data) => { 
            // Set steps list as data
            setSteps(data)
        })
    }

    // On clicking the submit button
    const onSubmit = () => {
        // Use the addStep hook from the params for adding a new step to the steps list
        addStep({
            stepTitle: chosen.title,
            stepDesc: chosen.desc,
            isShown: chosen.isShown,
            trigger: chosen.trigger,
            pers: pers
        })

        // Reset persentage's state
        setPers(0)

        // Handling dialog closing
        handleClose()
    }

    // Function for getting menu items
    function menuItems() {
        // Reset components list
        var comps = []

        // For each step, create component and push it to the comps list
        steps.map(element => {
            comps.push(
                <MenuItem value={element}>{element.title}</MenuItem>
            )
        })

        // Return components list
        return comps
    }

    // Fucntion for handling the changes of the selection section
    const handleChangeSelection = (e) => {
        // Set chosen step as the value of the selected step <li></li>
        setChosen(e.target.value)
    }


    // Use effect for calling the steps accessor
    useEffect(() => {
        getSteps()
    }, [])

    return (
        <div>
             <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle id="responsive-dialog-title" style={{minWidth: 400}}>
                    <Typography variant="h4"><b>Choose step you'd like to add</b></Typography>
                </DialogTitle>
                
                <br/>

                <DialogContent style={MuiStyles.InputsContainerStyleNoHorizScroll}>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Step</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={chosen}
                            label="Age"
                            onChange={handleChangeSelection}
                        >
                        {
                            menuItems()
                        }        
                        </Select>
                    </FormControl>
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