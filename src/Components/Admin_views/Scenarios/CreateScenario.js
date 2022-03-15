// Import React modules
import React, { useState } from "react"

// Import MUI comps & icons
import { TextField, Typography, Box, Fab } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert'

// Style
import { MuiStyles } from "../../../styles/Mui_styles"


// Function for creating new scenario component
export default function CreateScenario() {
    
    // Form params values & setters
    const [ title, setTitle ] = useState("")
    const [ desc, setDesc ] = useState("")

    // Option menu open

    // Function for handling input changes
    const handleValueChange = () => {

    }
    
    return (
        <div className="user-management">
            <Box style={{...MuiStyles.FormStyle, padding: 50}}>
                <Typography variant="h3"><b>Create new scenario</b></Typography>
                <TextField style={{...MuiStyles.TextField, width: 500, marginTop: 50 }} name="title"
                label="Scenario title" value={title} onChange={handleValueChange} variant="outlined" />

                <TextField style={{...MuiStyles.TextField, width: 500}} name="desc"
                label="Scenario description" value={desc} onChange={handleValueChange} variant="outlined" />

                <center style={{ margin: 25 }}>
                    <Fab style={MuiStyles.IconButtonStyle1}>
                        <MoreVertIcon  className="button-icon" style={MuiStyles.IconContentStyle1}/>
                    </Fab>
                </center>
            </Box>    
        </div>
    )
}