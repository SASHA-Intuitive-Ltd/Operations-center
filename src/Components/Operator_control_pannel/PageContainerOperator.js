/**
 * @Purpose Contain the Emergencies, requests, Room display list of the operator screen
 */

import { Info } from "@mui/icons-material"
import React, { useEffect, useLayoutEffect, useState } from "react"
import { useParams } from "react-router-dom"
import EmergenciesContainer from './EmergenciesContainer'
import RequestsContainer from './RequestsContainer'
import RoomsContainer from "./RoomsContainer"
import RoomBox from "./RoomBox"

function PageContainerOperator({ }) {

    const { id } = useParams()

    const [adminInfo, setInfo] = useState(null)

    const [ comps, setComps ] = useState(null)
    const addComp = (newComp) => {
        setComps((c) => [...c, newComp])
    }

    async function getCurrentPatientComp(patient) {
        await fetch(`http://localhost:5000/users/${patient}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            if (data !== null && typeof data.fullname !== 'undefined') {
                var roomParams= {
                    "_id": data._id,
                    "name": data.fullname,
                    "room_id": `${data.address}, ${data.fullname}`,
                    "current_activity": "wheelchair",
                    "states": {    
                        "health": "issue",
                        "monitors": "no_issue",
                        "requests": "issue"
                    }
                }
                addComp(<RoomBox key={roomParams.room_id} roomParams={roomParams}/>) 
            }
        })
    }

    async function loopComps() {
        adminInfo.patients?.forEach((patient) => { 
            if (typeof patient !== 'undefined') {
                getCurrentPatientComp(patient)
            }
        })
    }

    async function getOperatorInfo() {
        await fetch(`http://localhost:5000/admins/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setInfo(data)
            console.log(adminInfo)
        })
    }

    useEffect(() => {
        if (adminInfo === null) {
            getOperatorInfo()
        }

        else {
            console.log("Admin_id: " + adminInfo._id)
            if (comps === null) {
                setComps([])
                loopComps()
            }
        }
    }, [id, adminInfo])


    return (
        <div className="operator-screen">
           {/* Emergencies - Health and System */}
           <EmergenciesContainer/>
           {/* Requests - immidiate and longer term requests */}
           <RequestsContainer/>
           <div className="rooms-list">
            {
                comps
            }
            </div>
        </div>
    )
}

export default PageContainerOperator