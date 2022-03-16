// Import React modules
import React, { useEffect, useState } from "react"

// Import MUI comps & icons
import { TextField, Typography, Box, Fab, Card, CardContent } from "@mui/material"

// Other comps
import MenuButton from "./MenuButton"

// Style
import { MuiStyles } from "../../../../styles/Mui_styles"
import CreateStep from "./CreateStep"


// Function for creating new scenario component
export default function CreateScenario() {
    
    // Form params values & setters
    const [ title, setTitle ] = useState("")
    const [ desc, setDesc ] = useState("")

    const [ stepsList, setList ] = useState([])

    const addStep = (newStep) => {
        setList((steps) => [...steps, { index: (stepsList.length + 1) , item: newStep }])
    }

    // Dialog state
    const [ openDia, setOpen ] = useState(false)

    // Function for handling dialog opening and closing
    const handleOpenDia = () => {
        setOpen(true)
    }

    const handleCloseDia = () => {
        setOpen(false)
    }

    // Function for handling input changes
    const handleValueChange = (e) => {
        // Const of name and value
        const { name, value } = e.target

        // If sccenario title
        if (name === 'title') {
            setTitle(value)
        }

        // If scenario description
        else if (name === 'desc') {
            setDesc(value)
        }
    }

    useEffect(() => {
        setTitle(title)
        setDesc(desc)
    }, [stepsList])
        
    return (
        <div className="user-management">
            <Box style={{...MuiStyles.FormStyle, padding: 50}}>
                <Typography variant="h3"><b>Create new scenario</b></Typography>
                <TextField style={{...MuiStyles.TextField, width: 500, marginTop: 50 }} name="title"
                label="Scenario title" value={title} onChange={handleValueChange} variant="outlined" />

                <TextField style={{...MuiStyles.TextField, width: 500}} name="desc"
                label="Scenario description" value={desc} onChange={handleValueChange} variant="outlined" />

                <center style={{ margin: 25 }}>
                    <MenuButton setOpen={setOpen}/>
                </center>
            </Box>   
            
            <Box style={{...MuiStyles.InputsContainerStyleNoHorizScroll, padding: 50, textAlign: 'center'}}>
                <Typography variant="h4"><b>Scenario steps:</b></Typography>
                {
                    stepsList !== [{}] 
                    ?
                    stepsList.map((element) => {
                        return (
                            <div style={MuiStyles.StepCardOut}>
                            {   
                                <Card sx={{...MuiStyles.StepCard}}>
                                    <CardContent>
                                        <Typography variant="h5"><b>#{element.index}</b></Typography>
                                        <Typography variant="h4"><b>{element.item.stepTitle}</b></Typography>
                                        <Typography variant="h6">{element.item.stepDesc}</Typography>
                                    </CardContent>
                                </Card>
                            }
                            </div>
                        )
                    })
                    : 
                    null
                }
            </Box>
            
            <CreateStep open={openDia} handleClose={handleCloseDia} addStep={addStep}/>
        </div>
    )
}