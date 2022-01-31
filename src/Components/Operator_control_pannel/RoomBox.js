/**
 * @Purpose Room component, contains room info by room params
 */
import React from "react"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import TouchAppIcon from '@mui/icons-material/TouchApp';

function RoomBox({ roomParams }) {
    return(
        <div className="room">
                <div className="header">
                    <h2>{roomParams.name}</h2>
                    <h2>{roomParams.room_id}</h2>
                </div>
                <div className="action">
                    <p>{roomParams.current_activity}</p>
                </div>
                <div className="states">
                    <div className={`icon--${roomParams.states.health === "no_issue" ? "ok" : "alert"}`}><FavoriteBorderIcon/></div>
                    <div className={`icon--${roomParams.states.monitors === "no_issue" ? "ok" : "alert"}`}><MonitorHeartIcon/></div>
                    <div className={`icon--${roomParams.states.requests === "no_issue" ? "ok" : "alert"}`}><TouchAppIcon/></div>
                </div>
            </div>
    )
}

export default RoomBox