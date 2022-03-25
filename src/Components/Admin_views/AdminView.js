// React imports and configs
import React, { useState, useLayoutEffect } from "react"
import { useParams } from "react-router-dom";
import  { CardOptions }  from './AdminView.configs'


// MUI comps
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Fab as Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

// Icons
import PreviewIcon from '@mui/icons-material/Preview';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import UpdateIcon from '@mui/icons-material/Update';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import BugReportIcon from '@mui/icons-material/BugReport';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';

// Dialogs
import AddPatient from "./Dialogs/AddPatient";
import ReportBug from "./Dialogs/ReportBug";
import { MuiStyles } from "../../styles/Mui_styles";

// Admin home page function component
export default function AdminView({  }) {

    // Dialogs open and type states
    const [ open, setOpen ] = React.useState(false)
    const [ type, setType ] = React.useState('add')

    // Admin information object
    const [ adminInfo, setInfo ] = useState({})

    // Admin's id for 
    const { id } = useParams()

    // TODO: Switch to async-await funcs
    useLayoutEffect(() => {
        
        // Fetch admin info (TODO: Do according to _id param from route)
        fetch(`http://localhost:5000/admins/${id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setInfo(data);
        })
    }, [])


    // Handle dialogs opening
    const handleClickOpen = (dialogType) => () => {
        // Set dialog type to current button event type
        setType(dialogType); 
        // Set open state for true
        setOpen(true);
    }
    
    // Handle dialog closing
    const handleClose = () => {
        // Set dialog open state to false
        setOpen(false)
    }

    // Card const function component for generating action cards by cardInfo json doc.
    const getCard = (cardInfo) =>  (
        <Box sx={MuiStyles.AdminActionCard}>
            {/* Card container */}
            <Card variant="outlined">
                <div style={{ margin: '10px' }}>
                    {/* Card content: title (action), description, activation button */}
                    <CardContent>
                        <Typography variant="h4">
                            <b>{cardInfo.action}</b>
                        </Typography>
                        
                        <Typography variant="body1" style={{textAlign: 'justify', minHeight: '100px'}}>
                        {
                            cardInfo.description
                        }
                        </Typography>
                    </CardContent>
                    
                    <CardActions>
                        <Button className="card-button" size="medium" onClick={cardInfo.func} style={MuiStyles.IconButtonStyle1}>
                        {
                            cardInfo.actionCall
                        }
                        </Button>
                    </CardActions>
                </div>
            </Card>
        </Box>
    )

    return(
        <div className="operator-dashboard">
            <h1 style={{ fontSize: '240%',  ...MuiStyles.TitleStyle }}>Hey, {adminInfo.fullname}</h1>
            
            <h2 style={{ ...MuiStyles.SubtitleStyle, margin: 0 }}>Please choose an operation to execute:</h2>
            
            <div className="possible-actions">
                {/* Container for actions: view patients, add new patient, manage current patients */}
                <div className="row">
                    {/* View operating screen action */}
                    {
                        getCard({
                            "action": CardOptions.operator_view.action,
                            "actionCall": <Link className="link-box" to={`/operating_screen/${id}`} style={MuiStyles.IconContentStyle1}><PreviewIcon className="button-icon"/></Link>,
                            "description": CardOptions.operator_view.description,
                        })
                    }
                    
                    {/* Open patient adding dialog */}
                    {
                        getCard({
                            "action": CardOptions.add_patient.action,
                            "actionCall": <AddCircleOutlineIcon style={MuiStyles.IconContentStyle1} className="button-icon"/>,
                            "description":  CardOptions.add_patient.description,
                            "func": handleClickOpen(CardOptions.add_patient.type),
                        })
                    }
                    
                    {/* View patient management (Update and delete options too) */}
                    {
                        getCard({
                            "action": CardOptions.manage.action,
                            "actionCall": <Link className="link-box" to={`/manage/${id}`} style={MuiStyles.IconContentStyle1}><UpdateIcon className="button-icon"/></Link>,
                            "description": CardOptions.manage.description
                        })
                    }
                </div>
                
                {/* Container for actions: view upcoming booked meets, book a meeting, report issue to IT department */}
                <div className="row">
                    {/* View booked meetings as well as appointing new meetings */}
                    {
                        getCard({
                            "action": CardOptions.meetings.action,
                            "actionCall": <Link className="link-box" to={`/meetings/${id}`} style={MuiStyles.IconContentStyle1}><CardMembershipIcon className="button-icon"/> </Link>,
                            "description": CardOptions.meetings.action
                        })
                    }
            
                    {/* Open new report ticket  dialog*/}
                    {
                        getCard({
                            "action": CardOptions.bugs.action,
                            "actionCall": <BugReportIcon style={MuiStyles.IconContentStyle1} className="button-icon"/>,
                            "description": CardOptions.bugs.description,
                            "func": handleClickOpen(CardOptions.bugs.type)
                        })
                    }

                    {/* View updates for operators */}
                    {
                        getCard({
                            "action": CardOptions.scenarios.action,
                            "actionCall": <Link className="link-box" to={`/scenarios/${id}`} style={MuiStyles.IconContentStyle1}><AccessibleForwardIcon className="button-icon"/></Link>,
                            "description": CardOptions.scenarios.description
                        })
                    }
                </div>
            </div>

            {/* Include dialog according to dialog type */}
            <div>
                { type === 'add' ? <AddPatient openAdd={open} handleClose={handleClose} id={id}/> : null}
                { type === 'report-bug' ? <ReportBug openAdd={open} handleClose={handleClose}/> : null}
            </div>
        </div>
    )
}
