import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from '@mui/material'
import { MuiStyles } from '../../../styles/Mui_styles'


// Function of Landing page component
export default function Landing() {

    return (
        <div className='landing'>
            <Card style={{ 
                display: 'flex',
                flexDirection: 'column', 
                width: '50%', 
                justifyContent: 'center', 
                alignItems: 'center', 
                paddingTop: 50,
                paddingBottom: 50,
                margin: 140,
                border: '3px solid var(--global-primary)',
                borderRadius: '20px'
            }}>
                    <h1 style={MuiStyles.TitleStyle}>Welcome to SASHA Operations center</h1>
                    <h2 style={MuiStyles.SubtitleStyle}>Please choose your login method</h2>

                    <br/>
                    <Link to='login_admin' className='login-button' style={{ ...MuiStyles.LandingButton, width: '20%', marginBottom: 4 }} name="admin" variant='contained'>Login as admin</Link>
                    <Link to='/login_patient' className='login-button' style={{ ...MuiStyles.LandingButton, width: '20%', marginBottom: 0 }} name="user" variant='contained'>Login as user</Link>
            </Card>
        </div>
    )
}