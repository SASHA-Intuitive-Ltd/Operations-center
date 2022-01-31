/**
 * Emergency display by emergency params
 */

import React from "react"
import { Button, Tooltip } from "@mui/material"

function EmergencyBox({ emergency }) {
    return (
        <div className="eme-box">
            <Tooltip title={emergency.issue} arrow placement="bottom" sx={{ m: 0 }}>
                <Button className="tooltip-content">
                    <p>{emergency.patient}</p> 
                <p>{emergency.room_id}</p>
                </Button>
            </Tooltip>
        </div>
    )
}

export default EmergencyBox