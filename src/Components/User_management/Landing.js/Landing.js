import { Button } from '@mui/material'
import React from 'react'
import { Link, Redirect } from 'react-router-dom'

const buttonStyle = {
    margin: 25,
    color: 'var(--global-white)',
    backgroundColor: 'var(--global-primary)',
    textTransform: 'none', 
    fontSize: 'large'
}


function Landing() {

    function onClickHandler(e) {
        const {name, value} = e.target
        console.log(name)
        console.log(value)
    }

    return (
        <div className='landing'>
            <h1>Welcome to SASHA Operations center</h1>
            <h2>Please choose a login method</h2>
            <Button className='login-button' style={buttonStyle} name="admin" onClick={onClickHandler} variant='contained'>Login as admin</Button>
            <Button className='login-button' style={buttonStyle} name="user" onClick={onClickHandler} variant='contained'>Login as user</Button>
        </div>
    )
}

export default Landing