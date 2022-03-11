/**
 * Emergency display by emergency params
 */

import React, { useState } from "react"
import { Button, Tooltip } from "@mui/material"
import Emergency from "./Dialogs/Emergency"

function EmergencyBox({ emergency }) {

    // Emergency dialog handlers
    const [ openDia, setOpen ] = useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="eme-box">
            <Tooltip title={emergency.issue} arrow placement="bottom" sx={{ m: 0 }}>
                <Button className="tooltip-content" sx={{ color: 'red' }} onClick={handleClickOpen}>
                    <p>{emergency.patient}</p> 
                    <p>{emergency.room_id}</p>
                </Button>
            </Tooltip>
            <Emergency open={openDia} handleClose={handleClose} emergency={emergency}/>
        </div>
    )
}

export default EmergencyBox