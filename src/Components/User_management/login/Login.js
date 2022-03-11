/**
 * @Purpsoe Login page and redirection by admin/user session pages later on..
 */

import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { TextField, Button, Box, InputAdornment, IconButton, getDividerUtilityClass, getFormControlUtilityClasses } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { MuiStyles } from '../../../styles/Mui_styles'
import CloseIcon from '@mui/icons-material/Close';

import { useHistory } from 'react-router-dom'
import axios from "axios"


const formStyle = {
    padding: '100px',
    display: 'flex',
    flexDirection: 'column',
}

function Login({ userType, setToken, creds, link }) {
    const [showPassword, setShowPassword] = useState(false);
    const [fullname, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [ loginResult, setResult ] = useState(null)
    const [ error, setError ] = useState("")
    const history = useHistory()


    // Paaword hide ux
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);


    // Function for input vakue changes
    const handleValueChange = (e) => {
        const { name, value } = e.target

        if (name === 'fullname') {
            setUsername(value)
        }

        else if (name === 'password') {
            setPassword(value)
        }
    }

    function getRedirectionRoute() {
        
        var link = ""

        // Send get to axios by user type, search by user name...
        if (userType === 'admin') {

            var _id = loginResult
            link = `./home_admin/${_id}`
        }

        return link
    }

    // Function for auth admin/user login params with db info
    async function login() {

        var collectionType = userType === 'admin' ? 'admins' : 'users'
        console.log(`http://localhost:5000/${collectionType}/loginByNameAndPassword/${fullname}/${password}`)
        await fetch(`http://localhost:5000/${collectionType}/loginByNameAndPassword/${fullname}/${password}`)
        .then((response) => response.json())
        .then((data) => {
            setResult(data._id)
        })

        if (loginResult !== null) {
            // TODO: Redirect
            setToken(true)
        }

        else if (loginResult === null) {
            setError("Inputs don't match user credentials !")
        }
        return
    }

    // Function for retreiving div for error message and it's dismisser
    function getErrorDiv() {
        return (
            <div  style={MuiStyles.ErrorMessageText}>
                <IconButton style={{marginRigth: 10}} onClick={() => {setError(false)}}><CloseIcon/></IconButton>
                <p>{error}</p>
            </div>
        )
    }

    useEffect(() => {

        if (loginResult !== null) {
            history.push(getRedirectionRoute())
        }

        setResult(null)
        setError("")

        console.log(error)
    }, [error, loginResult])

    return (
        <div className="user-management">
            <h1 style={{fontSize: '240%', padding: '50px'}}>Dear {userType}, please fill the form and login to the operations center</h1>
            
            <Box style={formStyle}>
                <TextField style={{...MuiStyles.TextField, width: 500}} name="fullname" label="Full name" value={fullname} onChange={handleValueChange} variant="outlined" />
                <TextField style={{...MuiStyles.TextField, width: 500}} name="password" label="password" value={password} onChange={handleValueChange} variant="outlined" 
                    type={showPassword ? "text" : "password"}
                    InputProps={{ 
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                />

                { error !== "" ? getErrorDiv() : null }

                <Button name={userType} onClick={login} style={MuiStyles.ButtonStyle} variant='outlined'>
                        Login as {userType}
                </Button>
            </Box>
        </div>
    )
}

export default Login