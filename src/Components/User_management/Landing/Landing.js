import { Button } from '@mui/material'
import React from 'react'
import { Link, Redirect } from 'react-router-dom'

const buttonStyle = {
    color: 'var(--global-white)',
    backgroundColor: 'var(--global-white)',
    color: 'var(--global-primary)',
    fontWeight: '600', 
    textTransform: 'none', 
    fontSize: 'x-large',
    padding: 15,
    margin: 20,
    borderRadius: 15,
    border: '2px solid var(--global-primary)'
}


function Landing() {

    return (
        <div className='landing'>
            <h1>Welcome to SASHA Operations center</h1>
            <h2>Please choose your login method</h2>
            <br/>
            <div className='links'>
                <Link to='login_admin' className='login-button' style={buttonStyle} name="admin" variant='contained'>Login as admin</Link>
                <Link to='/login_patient' className='login-button' style={buttonStyle} name="user" variant='contained'>Login as user</Link>
            </div>
        </div>
    )
}

export default Landing