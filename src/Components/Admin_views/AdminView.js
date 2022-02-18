import React from "react"

// MUI comps
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Fab as Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';


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

// Styles

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
    transition: 'all 0.65s'
}

const iconStyle = {
    fontSize: '150%',
    color: require('../../configs/tests.json').theme.primary,
    transition: 'all 0.65s'
}

function AdminView({ adminInfo }) {

    // Add user dialog state
    const [ open, setOpen ] = React.useState(false)
    const [ type, setType ] = React.useState('add')

    const handleClickOpen = (dialogType) => () => {
        setType(dialogType);
        setOpen(true);
    }
    
    const handleClose = () => {
          setOpen(false);
    };
    

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
                <div className="row">
                    {/* Container for actions: view patients, add new patient, manage current patients */}
                    <Box sx={cardStyle}>
                        <Card variant="outlined">
                            {
                                card({
                                    "action": "View your patients",
                                    "actionCall": <PreviewIcon style={iconStyle} className="button-icon"/>,
                                    "description": "View your personal patients list and take control of necessary devices",
                                })
                            }
                        </Card>
                    </Box>
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
                    <Box sx={cardStyle}>
                        <Card variant="outlined">
                            {
                                card({
                                    "action": "Manage patients",
                                    "actionCall": <UpdateIcon style={iconStyle} className="button-icon"/>,
                                    "description": "Update or remove patient info, also can re-add patient to other representative"
                                })
                            }
                        </Card>
                    </Box>
                </div>
                <div className="row">
                    {/* Container for actions: view upcoming booked meets, book a meeting, report issue to IT department */}
                    <Box sx={cardStyle}>
                        <Card variant="outlined">
                            {
                                card({
                                    "action": "View booked meetings",
                                    "actionCall": <CardMembershipIcon style={iconStyle} className="button-icon"/>,
                                    "description": "View your personal patients list and take control of necessary devices"
                                })
                            }
                        </Card>
                    </Box>
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
                    <Box sx={cardStyle}>
                        <Card variant="outlined">
                            {
                                card({
                                    "action": "Internal updates",
                                    "actionCall": <HelpOutlineIcon style={iconStyle} className="button-icon"/>,
                                    "description": "Internal updates for and instructions for admins"
                                })
                            }
                        </Card>
                    </Box>
                </div>
            </div>
            <div>
                { type === 'add' ? <AddPatient openAdd={open} handleClose={handleClose}/> : null}
                { type === 'report-bug' ? <ReportBug openAdd={open} handleClose={handleClose}/> : null}
            </div>
        </div>
    )
}

export default AdminView