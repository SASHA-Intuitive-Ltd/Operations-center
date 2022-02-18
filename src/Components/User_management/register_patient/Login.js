/**
 * @Purpsoe Login page and redirection by admin/user session pages later on..
 */

import React, { useState } from "react"
import { useHistory, Redirect } from "react-router-dom"
import { TextField, Button, Box, InputAdornment, IconButton } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"

const tfieldStyle = {
    margin: 10,
    width: '500px'
}

const formStyle = {
    padding: '100px',
    display: 'flex',
    flexDirection: 'column',
}

const buttonStyle = {
    textTransform: 'none', 
    color: 'var(--global-primary)',
    borderColor: 'var(--global-primary)',
    margin: 10,
    fontWeight: 'bolder',
    fontSize: 'large',
}

function Login({ userType }) {
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const handleValueChange = (e) => {
        const { name, value } = e.target

        if (name === 'fullname') {
            setUsername(value)
        }

        else if (name === 'password') {
            setPassword(value)
        }
    }

    return (
        <div className="user-management">
            <h1 style={{fontSize: '240%', padding: '50px'}}>Dear {userType}, please fill the form and login to the operations center</h1>
            
            <Box style={formStyle}>
                <TextField style={tfieldStyle} name="fullname" label="Full name" value={username} onChange={handleValueChange} variant="outlined" />
                <TextField style={tfieldStyle} name="password" label="password" value={password} onChange={handleValueChange} variant="outlined" 
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
                <Button className='login-button' name="user" style={buttonStyle} variant='outlined'>
                        Login as {userType}
                </Button>
            </Box>
        </div>
    )
}

export default Login