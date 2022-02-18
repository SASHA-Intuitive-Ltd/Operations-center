/**
 * @Purpose Personal information component for personal data monitoring feature
 * @Contains User's profile picture, full name, age, phone number, email, health state (diagnosis) more info button
 */
import React from 'react'
import { Avatar, requirePropFactory } from '@mui/material'


function PersonalInfo({ user }) {

    console.log(user)
    // Return JSX Component
    return (
        <div className='info'>
            <div className='profile-picture'>
                <Avatar variant="square" sx={{ height: 130, width: 90, bgcolor: require("../../configs/tests.json").theme.primary }} src={user.profileImageURl !== "NaN" ?  "Profile": require("../../assets/logo.png")}></Avatar>
            </div>
            <div className='user-vitals'>
                <p className='info__username'>{user.fullname}</p>
                {/*<p>Age: {user.age}</p>*/}
                <p><b>Diagnosis:</b> {user.diagnosis ? user.diagnosis : "NaN"}</p>
                <p><b>Phone:</b> {user.phone}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Address:</b> {user.address}</p>
            </div>
        </div>
    )
}

export default PersonalInfo