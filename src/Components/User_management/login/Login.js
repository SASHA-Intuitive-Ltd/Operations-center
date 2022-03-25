/**
 * @Purpsoe Login page and redirection by admin/user session pages later on..
 */

import React, { useEffect, useState } from "react"
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    TextField,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery,
    Card,
    Alert
} from '@mui/material';

import AnimateButton  from '../../Helpers/AnimateButton'

import { Visibility, VisibilityOff } from "@mui/icons-material"
import { MuiStyles } from '../../../styles/Mui_styles'
import CloseIcon from '@mui/icons-material/Close';

import { useHistory } from 'react-router-dom'
import axios from "axios"

// Login form component
export default function Login({ userType, setToken, creds, link, token, setType }) {

    // Password visibility 
    const [showPassword, setShowPassword] = useState(false)
    // Password hide ux
    const handleClickShowPassword = () => setShowPassword(!showPassword)
    const handleMouseDownPassword = () => setShowPassword(!showPassword)
    
    // Form parameters holders
    const [fullname, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // Login page result, errors holders
    const [ loginResult, setResult ] = useState(null)
    const [ error, setError ] = useState("")

    // History for redirecting to next route after the form is submitted and login is approved
    const history = useHistory()

    // Function for input vakue changes
    const handleValueChange = (e) => {

        // Name and value of text field
        const { name, value } = e.target

        // If field name stands for fullname
        if (name === 'fullname') {
            // Set the username value as the value of the field
            setUsername(value)
        }

        // If field name stands for password
        else if (name === 'password') {
            // Set password value as the value of the field
            setPassword(value) 
        }
    }

    // Get next route before pushing to history
    function getRedirectionRoute() {

        // Reset link
        var link = ''

        // The id of user/admin is the loginResult
        var _id = loginResult

        // If user is an admin
        if (userType === 'admin') {
            // Link for admins home page
            link = `./home_admin/${_id}`
        }

        else if (userType === 'patient') {
            // Link for patients home page
            link = `./home_patient/${_id}`
        }

        // Return a link of the next route
        return link
    }

    // Function for auth admin/user login params with db info
    async function login() {

        // Specify the collection of the current user type we'd like to login
        var collectionType = userType === 'admin' ? 'admins' : 'users'

        // Get request, from the specified collection of user with the given password
        await fetch(`http://localhost:5000/${collectionType}/loginByNameAndPassword/${fullname}/${password}`)
        .then((response) => response.json())
        .then(data => {
            // console.log(data)
            // Set the login result value for user's _id
            setResult(data._id)
        })

        // If login result is successful, setToken for the Id
        if (loginResult !== null) {
            // Set token
            setToken(loginResult)
        }

        // Else, set input error
        else if (loginResult === null) {
            setError("Inputs don't match user credentials !")
        }

        // Finish
        return
    }

    // Function for retreiving div for error message and it's dismisser
    function getErrorDiv() {
        // If there is an error in the login process, return notification, else return null
        return (
            error !== "" 
            ?
            <Alert variant='outlined' severity='error' style={MuiStyles.ErrorMessageText}>
                <IconButton style={{ ...MuiStyles.IconButtonStyle1, color: 'var(--global-failed)',
                    border: '2px solid var(--global-failed)'
                }} onClick={() => {setError("")}}>
                    <CloseIcon/>
                </IconButton>
                <p>{error}</p>
            </Alert> 
            :
            null
        )
    }

    // Use effect hook for login functionality
    useEffect(() => {

        // If there is an active token, login to active user auto
        if (token !== "") {
            if (userType === 'admin') {
                //history.push(`./home_admin/${_id}`)
                history.push(`./home_admin/${token}`)
            }
        }

        // If login result, login to loginresult
        if (loginResult !== {} && loginResult !== null && typeof loginResult !== 'undefined') {
            console.log(loginResult)
            setType(userType)
            history.push(getRedirectionRoute())
        }

        // Set the result null
        setResult(null)

        // Log error if there is
        console.log(error)
    }, [error, loginResult])


    // Return component

    const theme = useTheme();
    // const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    // const customization = useSelector((state) => state.customization);
    const [checked, setChecked] = useState(true);
    return (
        <Card style={{
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingTop: 30,
            paddingBottom: 30,
            paddingRight: 0,
            paddingLeft: 0,
            marginTop: 100,
            marginRight: 150,
            marginLeft: 150,
            border: '3px solid var(--global-primary)',
            borderRadius: '20px'
        }}>
            <div className="user-management">
                {/* TODO: move style to a style util */}
                <h1 style={{fontSize: '240%', padding: 50, ...MuiStyles.TitleStyle}}>Dear {userType}, please fill the form and login to the operations center</h1>
                
                <Box style={MuiStyles.FormStyle}>
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


                    <AnimateButton>
                        <Button name={userType} onClick={login} style={{...MuiStyles.ButtonStyle, width: 'fit-content', height: '100%', marginBottom: 0, marginTop: 30}} variant='outlined'>
                            Login as {userType}
                        </Button>
                    </AnimateButton>

                    { getErrorDiv() }
                </Box>
            </div>
        </Card>
    )
}