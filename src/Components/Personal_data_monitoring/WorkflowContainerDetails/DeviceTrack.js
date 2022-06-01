import React, { useEffect, useState } from 'react'
import { Button } from "@mui/material"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { current } from '@reduxjs/toolkit'

function DeviceTrack({ }) {

    const { _id } = useParams()

    // const vitals = require('../../../configs/tests.json').device_vitals[currentDevice]
    const [ vitals, setVitals ] = useState([])
    const [ currentDevice, setCurrent ] = useState("")
    const [elements, setElements] = useState([])
    const addElem = (newElem) => {
        setElements((e) => [...e, newElem])
    }


    const getItems = () => {
        setElements([])
        vitals.forEach(element => {
            addElem(
                <div key={element.vital}>
                    <p>{element.vital}: {element.stat}</p>
                </div>
            )  
        })

        return elements
    }

    async function getUserDevice() {
        await fetch(`https://operations-center-dev.herokuapp.com/users/${_id}`)
        .then((response) => response.json())
        .then(data => {
            setCurrent(data.device)
            console.log(vitals)
        })
    }

    useEffect(async () => {
        if (currentDevice === "")
        {    
            getUserDevice()
        }
        

        else {
            if (elements.length === 0) {
                // TODO: When sensors are attached to db, read info from db as well.
                setVitals(require('../../../configs/tests.json').device_vitals[currentDevice.toLowerCase()])
                getItems()
            }
        }
    }, [_id, currentDevice, elements])

    return(
        <div className='system-stats'>
            <div className='title-w-button'>
                <h1 style={{textTransform: 'capitalize', fontSize: 'x-large'}}>{currentDevice} status</h1>
            </div>
            {
                elements
            }
        </div>
    )
}

export default DeviceTrack