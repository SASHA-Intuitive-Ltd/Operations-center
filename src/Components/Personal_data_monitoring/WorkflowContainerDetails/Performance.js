import React from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Button } from "@mui/material"
function Performance() {
    return(
        <div className='performance'>
            <div className='title-w-button'>
                <h2>Performance</h2>
                <Button className="history-button" >History</Button>
            </div>

            <div className='pref'>
                <h4>Transition time</h4>
                <LinearProgress style={{width: "700px", height: "30px"}} color="success" variant="buffer" value={80}/>
            </div>
            <div className='pref'>
                <h4>Left hand amplitude motion</h4>
                <LinearProgress style={{width: "700px", height: "30px"}} color="success" variant="buffer" value={40}/>
            </div>
            <div className='pref'>
                <h4>Right hand amplitude motion</h4>
                <LinearProgress style={{width: "700px", height: "30px"}} color="success" variant="buffer" value={50}/>
            </div>
        </div>
    )
}

export default Performance