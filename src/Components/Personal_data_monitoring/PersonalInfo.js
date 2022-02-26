/**
 * @Purpose Personal information component for personal data monitoring feature
 * @Contains User's profile picture, full name, age, phone number, email, health state (diagnosis) more info button
 */
import React, {useState} from 'react'
import { Avatar, requirePropFactory } from '@mui/material'
import { useEffect } from 'react'


function PersonalInfo({ user }) {

    console.log(user)
    // Return JSX Component

    
    const [ userInfo, setInfo ] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user}`).then((response) => response.json())
        .then((data) => {
            console.log(data)
            setInfo(data)
        });
    }, [])


    return (
        <div className='info'>
            <div className='profile-picture'>
                <Avatar variant="square" sx={{ height: 130, width: 90, bgcolor: require("../../configs/tests.json").theme.primary }} src={userInfo.profileImageURl !== "NaN" ?  "Profile": require("../../assets/logo.png")}></Avatar>
            </div>
            <div className='user-vitals'>
                <p className='info__username'>{userInfo.fullname}</p>
                {/*<p>Age: {user.age}</p>*/}
                <p><b>Phone:</b> {userInfo.phone}</p>
                <p><b>Email:</b> {userInfo.email}</p>
                <p><b>Address:</b> {userInfo.address}</p>
                <p>{userInfo.diagnosis ? <><b>Diagnosis:</b> user.diagnosis </>: null}</p>
            </div>
        </div>
    )
}

export default PersonalInfo