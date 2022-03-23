// Import React modules
import React, { useEffect, useState } from "react"

// Import MUI comps & icons
import { TextField, Typography, Box, Card, CardContent, CardActions, IconButton } from "@mui/material"

// Other comps
import MenuButton from "./MenuButton"

// Style
import { MuiStyles } from "../../../../styles/Mui_styles"
import CreateStep from "./CreateStep"
import EditStep from "./EditStep"
import CloseIcon from "@mui/icons-material/Close"
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios'
import { useParams, useHistory } from "react-router-dom"

// Function for creating new scenario component
export default function CreateScenario() {

    // Save admin id for further actions
    const { id } = useParams()

    // History for further actions pushing 
    const history = useHistory()
    
    // Form params values & setters
    const [ title, setTitle ] = useState("")
    const [ desc, setDesc ] = useState("")

    // Dialog type 
    const [ type, setType ] = useState('')

    // Scenarios steps list
    const [ stepsList, setList ] = useState([])

    // Removing element trigger
    const [ remTrigger, setRemoveTrigger ] = useState(false)

    // Selected item to edit
    const [ selected, setSelected ] = useState({})

    // Add step function
    const addStep = (newStep) => {
        // Set list for prev values and new value
        setList((steps) => [...steps, { index: stepsList.length , item: newStep }])
    }

    // Function for removing step from steps list and calling the steps normalization function
    const removeStep = (step) => {

        // Debug: console.log(step)
        // Make a separate copy of the array
        var temp = stepsList 
        // Find index of necessary document
        var index = temp.indexOf(step) 

        // Debug: console.log("Index: " + index)

        // If found index 
        if (index !== -1) 
        {
            // Remove item from temp list
            temp.splice(index, 1);

            // Set list to edited list
            setList(temp)
        }

        // Call normalization function
        setRemoveTrigger(true)

        // Normalise info
        normalizeStepIndexes()
    }

    // Normalize indexes after removing a step
    const normalizeStepIndexes = () => {
        // Run over all the list and fix indexes
        for (var i = 0; i <= stepsList.length; i++) {
            stepsList[i].index = i
        }
    }

    // Function for handling edit
    const edit = (step) => {
        setSelected(step)
        setType('edit')
        handleOpenDia()
    }

    // Dialog state
    const [ openDia, setOpen ] = useState(false)

    // Function for handling dialog opening and closing
    // Handle open
    const handleOpenDia = () => {
        // Set dialog opening state to true, might be not necessary in this component.
        setOpen(true)
    }

    // Handle close
    const handleCloseDia = () => {
        // Set dialog opening state to false
        setOpen(false)
    }

    // Function for handling input changes
    const handleValueChange = (e) => {
        // Const of name and value
        const { name, value } = e.target

        // If sccenario title
        if (name === 'title') {
            // Set title to input value
            setTitle(value)
        }

        // If scenario description
        else if (name === 'desc') {
            // Set description to input value
            setDesc(value)
        }
    }

    // Function for handling scenario creating 
    async function submitScenario() {

        // Scenario info to save
        var scenarioData = {
            // Scenario title
            title: title,
            
            // Scenraio description
            desc: desc,

            // Devices the scenario uses + states
            devices: [
               
            ],

            // Devices steps list for this scenario
            steps: stepsList
        }
        

        console.log(scenarioData)

        await axios.post('http://localhost:5000/scenarios', scenarioData)

        history.push(`/scenarios/${id}`)
    } 

    // Use effect, update states with change of stepsList or removing trigger
    useEffect(() => {

        // Save states for the moment after the refreshing
        setTitle(title)
        setDesc(desc)
        setList(stepsList)

        // If step was removed, set removing trigger to false
        if (remTrigger !== false) {
            setRemoveTrigger(false)
        }

        // If stepsList/removing trigger's value is being changed, refresh this component
    }, [stepsList, remTrigger])
        
    return (
        <div className="user-management" >
            {/* Form for creating title and description for the scenario */}
            <Box style={{...MuiStyles.FormStyle, padding: 50}}>
                <Typography variant="h3"><b>Create new scenario</b></Typography>
                <TextField style={{...MuiStyles.TextField, width: 500, marginTop: 50 }} name="title"
                label="Scenario title" value={title} onChange={handleValueChange} variant="outlined" />

                <TextField style={{...MuiStyles.TextField, width: 500}} name="desc"
                    label="Scenario description" value={desc} onChange={handleValueChange} variant="outlined" 
                />

                <center style={{ margin: 25 }}>
                    <MenuButton saveToBackend={submitScenario} setOpen={setOpen} setType={setType}/>
                </center>
            </Box>   
            
            {/* Steps list display box */}
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
                                        <Typography variant="h6" style={{ color: element.item.isShown ? 'green' : 'red' }}><b>Step #{element.index + 1}</b></Typography>
                                        <Typography variant="h4"><b>{element.item.stepTitle}</b></Typography>
                                        <Typography variant="h6">Description: {element.item.stepDesc}</Typography>
                                        <br/>
                                        <Typography variant="h6">Command: <b>{element.item.trigger}</b></Typography>
                                    </CardContent>
                                    <CardActions dir="rtl">
                                        <IconButton size="small" 
                                            style={{
                                                ...MuiStyles.OptionsButtonStyle,
                                                borderRadius: '50%', 
                                                backgroundColor: '#FE3113',
                                                cursor: 'pointer !important'
                                            }}
                                            onClick={() => removeStep(element)}
                                        >
                                            <CloseIcon className="button-icon" style={{...MuiStyles.IconContentStyle1, color: 'white'}}/>
                                        </IconButton>
                                        {
                                            /*
                                            <IconButton size="small" 
                                                style={{
                                                    ...MuiStyles.OptionsButtonStyle,
                                                    borderRadius: '50%', 
                                                    backgroundColor: 'orange',
                                                    cursor: 'pointer !important'
                                                }}
                                                onClick={() => 
                                                    edit(element)
                                                }
                                            >
                                                <EditIcon className="button-icon" style={{...MuiStyles.IconContentStyle1, color: 'white'}}/>
                                            </IconButton>
                                            */
                                        }
                                    </CardActions>
                                </Card>
                            }
                            </div>
                        )
                    })
                    : 
                    null
                }
            </Box>
            
            {/* Creating dialog including */}
            { 
                type === 'add'
                ?
                <CreateStep open={openDia} handleClose={handleCloseDia} addStep={addStep}/>
                :
                null
            }
            {  
                /*
                type === 'edit'
                ?
                <EditStep open={openDia} handleClose={handleCloseDia} stepsInfo={selected}/>
                :
                null
                */
            }
        </div>
    )
}