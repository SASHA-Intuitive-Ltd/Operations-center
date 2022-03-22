// Import modules
import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import  { CardOptions, StepCardOptions }  from './Scenarios.configs'
import { MuiStyles } from "../../../styles/Mui_styles";

// MUI comps
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Fab as Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

// Function for containing the action of the scenarios feature
export default function Scenarios({  }) {

    // Admin id
    const { id } = useParams()

    // Admin info document
    const [ adminInfo, setInfo ] = useState({})

    // Get admin info from the server
    async function getAdminInfo() {
        await fetch(`http://localhost:5000/admins/${id}`)
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            setInfo(data)
        })
    }

    // Async function for loading admin info
    useEffect(() => {
        getAdminInfo()
    }, [id])


    // Get action card
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

    return (
        <div>
            {/**<p>{adminInfo.fullname}</p>*/}
            <div className="possible-actions">

                <div className="row">
                    {
                        CardOptions.map((element) => {
                            return (
                                getCard({
                                    "action": element.action,
                                    "actionCall": 
                                    <Link className="link-box" to={`${element.path}/${id}`} style={MuiStyles.IconContentStyle1}>
                                    {
                                        element.icon
                                    }
                                    </Link>,
                                    "description": element.description,
                                })
                            )
                        })
                    }
                </div>

                <div className="row">
                    {
                        StepCardOptions.map((element) => {
                            return (
                                getCard({
                                    "action": element.action,
                                    "actionCall": 
                                    <Link className="link-box" to={`${element.path}/${id}`} style={MuiStyles.IconContentStyle1}>
                                    {
                                        element.icon
                                    }
                                    </Link>,
                                    "description": element.description,
                                })
                            )
                        })
                    }
                </div>

                {/**
                 * <div className="row">
                    {/* View operating screen action }
                    {
                        getCard({
                            "action": CardOptions.add.action,
                            "actionCall": 
                            <Link className="link-box" to={`/scenario_add/${id}`} style={MuiStyles.IconContentStyle1}>
                                <AddCircleOutlineIcon className="button-icon"/>
                            </Link>,
                            "description": CardOptions.add.description,
                        })
                    }
                    
                    {/* Open patient adding dialog }
                    {
                        getCard({
                            "action": CardOptions.basic.action,
                            "actionCall": 
                            <Link className="link-box" to={`/scenario_basic/${id}`} style={MuiStyles.IconContentStyle1}>
                                <PreviewIcon className="button-icon"/>
                            </Link>,
                            "description":  CardOptions.basic.description,
                            "func": "",
                        })
                    }
                    
                    {/* View patient management (Update and delete options too) }
                    {
                        getCard({
                            "action": CardOptions.specific.action,
                            "actionCall": 
                            <Link className="link-box" to={`/scenario_specific/${id}`} style={MuiStyles.IconContentStyle1}>
                                <AccessibilityIcon className="button-icon"/>
                            </Link>,
                            "description": CardOptions.specific.description
                        })
                    }
                </div>
                 */}
                
            </div>
        </div>
    )
}