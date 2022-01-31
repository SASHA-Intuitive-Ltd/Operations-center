import React, { useState } from 'react'
import { Button } from "@mui/material"

function DeviceTrack({currentDevice}) {

    // const vitals = require('../../../configs/tests.json').device_vitals[currentDevice]
    const vitals = require('../../../configs/tests.json').device_vitals["shower"]

    const [elements, setElements] = useState([])

    const getItems = () => {
        vitals.forEach(element => {
          elements.push(
              <div>
                  <p>{element.vital}: {element.stat}</p>
              </div>
          )  
        })

        return elements
    }

    return(
        <div className='system-stats'>
            <div className='title-w-button'>
                <h2>{currentDevice} Status</h2>
            </div>
            <p>
                {
                    getItems()
                }
            </p>
        </div>
    )
}

export default DeviceTrack