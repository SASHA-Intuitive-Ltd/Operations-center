/**
 * Emergency display by emergency params
 */

 import React, { useState } from "react"
 import { Button, Tooltip } from "@mui/material"
 import Request from "./Dialogs/Request"
 
export default function RequestsBox({ emergency }) {
 
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
                 <Button className="tooltip-content" sx={{ color: 'var(--global-primary)' }} onClick={handleClickOpen}>
                     <p>{emergency.patient}</p> 
                     <p>{emergency.room_id}</p>
                 </Button>
             </Tooltip>
             <Request open={openDia} handleClose={handleClose} emergency={emergency}/>
         </div>
     )
}
 