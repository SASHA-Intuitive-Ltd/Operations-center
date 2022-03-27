import React, { useState } from 'react'
import { Button } from "@mui/material"

function DeviceTrack({currentDevice}) {

    // const vitals = require('../../../configs/tests.json').device_vitals[currentDevice]
    const vitals = require('../../../configs/tests.json').device_vitals[currentDevice.toLowerCase()]
    const [elements, setElements] = useState([])

    const getItems = () => {
        vitals.forEach(element => {
          elements.push(
              <div key={element.vital}>
                  <p>{element.vital}: {element.stat}</p>
              </div>
          )  
        })

        return elements
    }

    return(
        <div className='system-stats'>
            <div className='title-w-button'>
                <h1 style={{textTransform: 'capitalize', fontSize: 'x-large'}}>{currentDevice} Status</h1>
            </div>
            {
                getItems()
            }
        </div>
    )
}

export default DeviceTrack