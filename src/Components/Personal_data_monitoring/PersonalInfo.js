/**
 * @Purpose Personal information component for personal data monitoring feature
 * @Contains User's profile picture, full name, age, phone number, email, health state (diagnosis) more info button
 */
import React, {useState} from 'react'
import { Avatar, getTableRowUtilityClass, requirePropFactory } from '@mui/material'
import { useEffect } from 'react'
import { element } from 'prop-types'


function PersonalInfo({ user }) {

    console.log(user)
    // Return JSX Component

    
    const [ userInfo, setInfo ] = useState({})
    const { showerInfo, setShowerInfo } = useState({})

    useEffect(() => {
        setInfo({})
        fetch(`https://operations-center-dev.herokuapp.com/users/${user}`).then((response) => response.json())
        .then((data) => {
            console.log(data)
            setInfo(data)
        })
    }, [showerInfo])


    return (
        <div className='info'>
            <div className='profile-picture'>
                <Avatar variant="square" sx={{ height: 130, width: 90, bgcolor: require("../../configs/tests.json").theme.primary }} 
                src={userInfo.profileImg !== "default" ? userInfo.profileImg : null}/>
            </div>
            <div className='user-vitals'>
                <p className='info__username'>{userInfo.fullname}</p>
                <p><b>Phone:</b> {userInfo.phone}</p>
                <p><b>Email:</b> {userInfo.email}</p>
                {/* <p><b>Gender:</b> <span style={{textTransform: 'capitalize'}}>{userInfo.gender}</span></p> */}
                <p><b>Location:</b> {userInfo.address}</p>
                <p>{userInfo.diagnosis ? <><b>Diagnosis:</b> user.diagnosis </>: null}</p>
            </div>
            
        </div>
    )
}

export default PersonalInfo