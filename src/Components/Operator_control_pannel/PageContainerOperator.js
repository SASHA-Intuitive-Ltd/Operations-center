/**
 * @Purpose Contain the Emergencies, requests, Room display list of the operator screen
 */

import React, { useEffect, useLayoutEffect, useState } from "react"
import { useParams } from "react-router-dom"
import EmergenciesContainer from './EmergenciesContainer'
import RequestsContainer from './RequestsContainer'
import RoomsContainer from "./RoomsContainer"
import RoomBox from "./RoomBox"
import { Fab } from "@mui/material"
import { ArrowForward, Home } from "@mui/icons-material"
import { MuiStyles } from "../../styles/Mui_styles"
import { useHistory } from "react-router-dom"

function PageContainerOperator({ }) {

    const { id } = useParams()

    const history = useHistory()

    const [adminInfo, setInfo] = useState(null)

    const [ users, setUsers ] = useState([1])

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
                var roomParams = {
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

                //adminInfo.location === data.address ? addComp(<RoomBox key={roomParams.room_id} roomParams={roomParams}/>) : console.log()
                addComp(<RoomBox key={roomParams.room_id} roomParams={roomParams}/>)
            }
        })
    }

    async function loopComps() {
        users.forEach((patient) => { 
            if (typeof patient !== 'undefined') {
                getCurrentPatientComp(patient._id)
            }
        })
    }

    async function getOperatorInfo() {
        await fetch(`http://localhost:5000/admins/${id}`)
        .then((response) => response.json())
        .then(data => {
            setInfo(data)
            console.log(adminInfo)
        })
    }

    async function getUsers() {
        await fetch('http://localhost:5000/users')
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            setUsers(data)
        })
    }

    useEffect(() => {
        if (users[0] === 1)
        {    
            getUsers()
        }
        
        
        /*if (adminInfo === null) 
        {
            getOperatorInfo()
        }*/

        else {
            // console.log("Admin_id: " + adminInfo._id)
            if (comps === null) {
                setComps([])
                loopComps()
            }
        }

        if (users !== []) {
            setUsers(users)
        }

        if (adminInfo !== null) {
            setInfo(adminInfo)
        }
    }, [id, users])


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
            <Fab onClick={() => {
                        history.push(`/home_admin/${id}`)
                    }}
                    style={ MuiStyles.FabStyle }
                    className='insert-fab' 
                >
                    <Home className='fab-icon' style={{color: "var(--global-primary)"}}/>
            </Fab>
        </div>
    )
}

export default PageContainerOperator