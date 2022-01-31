import React, { useEffect, useState } from "react"
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


function ProgressTrack({ currentDevice }) {
    const [checkpoints, setCheckpoints] = useState(require('../../../configs/tests.json').device_checkpoints[currentDevice])
    const [elements, setElements] = useState([])
    const [progress, setProgress] = useState(50)

    const themes = require('../../../configs/tests.json').theme

    useEffect(() => {

    }, [currentDevice])
    const checkpointProgressStateStyle = {height: "35px", width: "35px", border: "1px solid black"}

    function addCheckpoints() {
        checkpoints.forEach(element => {
            elements.push(
                <div className="checkpoint">
                    <div className={`checkpoint-progress ${element.progress}`} style={checkpointProgressStateStyle}><p>{element.index}</p></div>
                </div>
            );
        })
        
        return elements
    }

    
    return (
        <div className="progress-track">
            <h3>Device in use: <span style={{fontWeight: 600}}>{currentDevice}</span></h3>
            <span style={{padding: "10px"}}></span>
            <div className="checkpoints">
                {
                    addCheckpoints()
                }
            </div>
            <span style={{padding: "10px"}}></span>
            <p><b>Progress: {progress}%</b></p>
            <span style={{padding: "10px"}}></span>
            <LinearProgress style={{width: "200px", height: "30px"}} color="success" variant="buffer" value={progress}/>
        </div>
    )
}

export default ProgressTrack