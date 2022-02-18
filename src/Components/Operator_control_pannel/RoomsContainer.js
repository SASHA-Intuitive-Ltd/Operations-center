/**
 * @Purpose Rooms list grid component
 */

import React, { useCallback, useEffect, useState } from "react"
import RoomBox from "./RoomBox"
import SearchBar from "../SearchBar/SearchBar"

function RoomsContainer({ patientsList }) {

    /*const [rooms, setRooms] = useState([
        {
            "name": "Patient1",
            "room_id": "R# 1",
            "current_activity": "Shower",
            "states": {
                "health": "no_",
                "monitors": "no_issue",
                "requests": "no_issue"
            }
        },
        {
            "name": "Patient2",
            "room_id": "R# 2",
            "current_activity": "Room transport",
            "states": {
                "health": "no_issue",
                "monitors": "no_",
                "requests": "no_issue"
            }
        },
        {
            "name": "Patient3",
            "room_id": "R# 3",
            "current_activity": "Sleep",
            "states": {
                "health": "no_issue",
                "monitors": "no_issue",
                "requests": "no_"
            }
        }
    ])*/

    // const [filter, setFilter] = useState("")

    // Handler for filtering, by name and room
    /** const handleOnChange = (e) => {
        const { name, value } = e.target
        var temp = []

        setFilter(value)
        if(name === "filters") {
            for(var room in rooms) {
                if(value !== "" && room.name.includes(value)) {
                    temp.push(room)
                }
            }
        }

        else {
            temp.push( {
                "name": "Patient3",
                "room_id": "R# 3",
                "current_activity": "Sleep",
                "states": {
                    "health": "no_issue",
                    "monitors": "no_issue",
                    "requests": "no_"
                }
            })
        }

        setRooms(temp)
    }*/

    const [ rooms, setRooms ] = useState([{
        "name": "Patient1",
        "room_id": "R# 1",
        "current_activity": "Shower",
        "states": {
            "health": "no_",
            "monitors": "no_issue",
            "requests": "no_issue"
        }
    }])

    /*useEffect(() => {
        var roomsList = []

        patientsList.forEach(element => {
            roomsList.push(
                element
            )
        })

    }, [])*/

    return (
        <div>
                <div className="filters">
                    {/* Search room by - Name / Number / Request */}
                    <SearchBar placeholder="Patient name: " data={rooms}/>
                </div>
                {/* Rooms list - each room has a name, number, current operation, 3 fields: Requests, monitors issues and health issues */}
                <div className="rooms-list">
                    <div>
                       
                    </div>
                    {/*
                    <RoomBox roomParams={rooms[0]}/>
                    <RoomBox roomParams={rooms[1]}/>
                    <RoomBox roomParams={rooms[2]}/>
                    <RoomBox roomParams={rooms[0]}/>
                    <RoomBox roomParams={rooms[2]}/>
                    <RoomBox roomParams={rooms[2]}/>
                    <RoomBox roomParams={rooms[0]}/>
                    <RoomBox roomParams={rooms[1]}/>
                    <RoomBox roomParams={rooms[2]}/>
                    <RoomBox roomParams={rooms[0]}/>
                    <RoomBox roomParams={rooms[2]}/>
                    <RoomBox roomParams={rooms[2]}/>
                    <RoomBox roomParams={rooms[0]}/>
                    <RoomBox roomParams={rooms[1]}/>
                    <RoomBox roomParams={rooms[2]}/>
                    <RoomBox roomParams={rooms[0]}/>
                    <RoomBox roomParams={rooms[2]}/>
                    <RoomBox roomParams={rooms[2]}/>
                    */}
                </div>
           </div>
    )
}

export default RoomsContainer