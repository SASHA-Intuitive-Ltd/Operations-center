import React, { useState, useLayoutEffect } from "react"

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
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AddPatient from "./Dialogs/AddPatient";
import ReportBug from "./Dialogs/ReportBug";
import BugReport from "@mui/icons-material/BugReport";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

// Styles TODO: Transfer it to design js file (Styles folder)
const cardStyle = { 
    minWidth: '30%',
    maxWidth: '30%', 
    borderRadius: '6px',
    border: '2px solid var(--global-primary)',
    margin: '5px'
}

const buttonStyle = {
    border: '1px solid var(--global-grey)',
    backgroundColor: 'var(--global-white)',
    transition: 'all 0.65s',
    alignSelf: 'center',
    textAlign: 'center',
}

const iconStyle = {
    margin: 5,
    fontSize: 'xx-large',
    size: 'max-content',
    color: 'var(--global-primary)',
    transition: 'all 0.65s'
}

function AdminView({  }) {

    // Add user dialog state
    const [ open, setOpen ] = React.useState(false)
    const [ type, setType ] = React.useState('add')

    // Admin information
    const [ adminInfo, setInfo ] = useState({})

    const { id } = useParams()

    useLayoutEffect(() => {
        
        // Fetch admin info (TODO: Do according to _id param from route)
        fetch('http://localhost:5000/admins/620a324365bd8515cf1a7ba3').then((response) => response.json())
        .then((data) => {
            setInfo(data);
        })
        console.log(adminInfo)
    }, [])


    // Handle dialogs opening
    const handleClickOpen = (dialogType) => () => {
        setType(dialogType);
        setOpen(true);
    }
    
    // Handle dialog closing
    const handleClose = () => {
        setOpen(false)
    }

    // Card const function component for generating action cards by cardInfo json doc.
    const card = (cardInfo) =>  (
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              <b>{cardInfo.action}</b>
            </Typography>
            <Typography variant="body2" style={{textAlign: 'justify', minHeight: '100px'}}>
              {
                  cardInfo.description
              }
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="card-button" size="small" onClick={cardInfo.func} style={buttonStyle}>
                {cardInfo.actionCall}
            </Button>
          </CardActions>
        </React.Fragment>
    )

    return(
        <div className="operator-dashboard">
            <h1>Hey, {adminInfo.fullname}</h1>
            <h2>Please choose an operation to execute:</h2>
            <div className="possible-actions">
                {/* Container for actions: view patients, add new patient, manage current patients */}
                <div className="row">
                    {/* View operating screen action */}
                    <Box sx={cardStyle}>
                        <Card variant="outlined">
                            {
                                card({
                                    "action": "View your patients",
                                    "actionCall": <Link className="link-box" to={`/operating_screen/${id}`} style={iconStyle}><PreviewIcon className="button-icon"/></Link>,
                                    "description": "View your personal patients list and take control of necessary devices",
                                })
                            }
                        </Card>
                    </Box>
                    {/* Open patient adding dialog */}
                    <Box sx={cardStyle}>
                        <Card variant="outlined">
                            {
                                card({
                                    "action": "Add new patient",
                                    "actionCall": <AddCircleOutlineIcon style={iconStyle} className="button-icon"/>,
                                    "description": "Add a new patient to your patient's list",
                                    "func": handleClickOpen('add'),
                                    "type": 'add'
                                })
                            }
                        </Card>
                    </Box>
                    {/* View patient management (Update and delete options too) */}
                    <Box sx={cardStyle}>
                        <Card variant="outlined">
                            {
                                card({
                                    "action": "Manage patients",
                                    "actionCall": <Link className="link-box" to={`/manage/${id}`} style={iconStyle}><UpdateIcon className="button-icon"/></Link>,
                                    "description": "Update or remove patient info, also can re-add patient to other representative"
                                })
                            }
                        </Card>
                    </Box>
                </div>
                
                {/* Container for actions: view upcoming booked meets, book a meeting, report issue to IT department */}
                <div className="row">
                    {/* View booked meetings as well as appointing new meetings */}
                    <Box sx={cardStyle}>
                        <Card variant="outlined">
                            {
                                card({
                                    "action": "View booked meetings",
                                    "actionCall": <Link className="link-box" to={`/meetings/${id}`} style={iconStyle}><CardMembershipIcon 
                                        className="button-icon"/></Link>,
                                    "description": "View your personal patients list and take control of necessary devices"
                                })
                            }
                        </Card>
                    </Box>
                    {/* Open new report ticket  dialog*/}
                    <Box sx={cardStyle}>
                        <Card variant="outlined">
                            {
                                card({
                                    "action": "New report ticket",
                                    "actionCall": <BugReportIcon style={iconStyle} className="button-icon"/>,
                                    "description": "Add a new report ticket for bug fixing/feature request",
                                    "func": handleClickOpen('report-bug')
                                })
                            }
                        </Card>
                    </Box>

                    {/* View updates for operators */}
                    <Box sx={cardStyle}>
                        <Card variant="outlined">
                            {
                                card({
                                    "action": "Internal updates",
                                    "actionCall": <HelpOutlineIcon style={iconStyle} className="button-icon"/>,
                                    "description": "Internal updates and instructions for admins"
                                })
                            }
                        </Card>
                    </Box>
                </div>
            </div>
            {/* Include dialog according to dialog type */}
            <div>
                { type === 'add' ? <AddPatient openAdd={open} handleClose={handleClose}/> : null}
                { type === 'report-bug' ? <ReportBug openAdd={open} handleClose={handleClose}/> : null}
            </div>
        </div>
    )
}

export default AdminView