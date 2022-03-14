import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { MuiStyles } from '../../../styles/Mui_styles'


// Function of Landing page component
export default function Landing() {

    return (
        <div className='landing'>
            <h1>Welcome to SASHA Operations center</h1>
            <h2>Please choose your login method</h2>
            <br/>
            <div className='links'>
                <Link to='login_admin' className='login-button' style={MuiStyles.LandingButton} name="admin" variant='contained'>Login as admin</Link>
                <Link to='/login_patient' className='login-button' style={MuiStyles.LandingButton} name="user" variant='contained'>Login as user</Link>
            </div>
        </div>
    )
}