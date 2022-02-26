/**
 * @Purpose Room component, contains room info by room params
 */
import React from "react"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { Link } from '@mui/material'

function RoomBox({ roomParams }) {

    console.log(`/patient/${roomParams._id}`)

    return(
        <Link className="link-box" href={`/patient/${roomParams._id}`}>
            <div className="room">
                    <div className="header">
                            <h2>{roomParams.name}</h2>
                        <h2>{roomParams.room_id}</h2>
                    </div>
                    <div className="action">
                        <p>Currently using: {roomParams.current_activity}</p>
                    </div>
                    <div className="states">
                        <div className={`icon--${roomParams.states.health === "no_issue" ? "ok" : "alert"}`}><FavoriteBorderIcon/></div>
                        <div className={`icon--${roomParams.states.monitors === "no_issue" ? "ok" : "alert"}`}><MonitorHeartIcon/></div>
                        <div className={`icon--${roomParams.states.requests === "no_issue" ? "ok" : "alert"}`}><TouchAppIcon/></div>
                    </div>
            </div>
        </Link>
    )
}

export default RoomBox