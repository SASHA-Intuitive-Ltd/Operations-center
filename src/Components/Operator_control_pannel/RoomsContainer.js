/**
 * @Purpose Rooms list grid component
 */

import React, { useCallback, useEffect, useLayoutEffect, useState } from "react"
import RoomBox from "./RoomBox"
import SearchBar from "../SearchBar/SearchBar"

function RoomsContainer({ adminInfo }) {

    console.log("Admin info: " + adminInfo.location)

    const [ userInfo, setInfo ] = useState(null)
    const [ patientsList, setList ] = useState([])

    const [ comps, setComps ] = useState([])
    const addComp = (newComp) => {
        setComps((c) => [...c, newComp])
    }

    async function getCurrentPatientComp(patient) {
        await fetch(`https://operations-center-dev.herokuapp.com/users/${patient}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setInfo(data)
            if (userInfo !== null && typeof userInfo.fullname !== 'undefined') {
                var roomParams= {
                    "_id": userInfo._id,
                    "name": userInfo.fullname,
                    "room_id": `${userInfo.address}, ${userInfo.fullname}`,
                    "current_activity": "wheelchair",
                    "current_device": userInfo.device,
                    "states": {    
                        "health": "issue",
                        "monitors": "no_issue",
                        "requests": "issue"
                    }
                }
                if (userInfo.address === adminInfo.location) {
                    addComp(<RoomBox key={roomParams.room_id} roomParams={roomParams}/>) 
                }
            }
        })
    }

    async function loopComps() {
        setList(adminInfo.patients)
        console.log(patientsList)
        patientsList?.forEach((patient) => { 
            if (typeof patient !== 'undefined') {
                getCurrentPatientComp(patient)
            }
        })
    }

    useEffect(() => {
        if (comps == []) {
            loopComps()
        }
    }, [comps])

    return (
        <div>
            <div className="filters">
                {/* Search room by - Name / Number / Request */}
                <SearchBar placeholder="Patient name: "/>
            </div>
            {/* Rooms list - each room has a name, number, current operation, 3 fields: Requests, monitors issues and health issues */}
            <div className="rooms-list">
            {
                comps
            }
            </div>
       </div>
    )
}

export default RoomsContainer