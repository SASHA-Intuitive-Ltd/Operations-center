/**
 * @Purpose Rooms list grid component
 */

import React, { useCallback, useLayoutEffect, useState } from "react"
import RoomBox from "./RoomBox"
import SearchBar from "../SearchBar/SearchBar"

function RoomsContainer({ patientsList }) {

    // const [ rooms, setRooms ] = useState([
    //     {
    //         "name": null,
    //         "room_id": null,
    //         "current_activity": null,
    //         "states": {
    //             "health": null,
    //             "monitors": null,
    //             "requests": null
    //         }
    //     }
    // ])

    // const [ comps, setComps ] = useState([])

    // let lst = createPationsList(patientsList)

    // useLayoutEffect(() => {
        

    //     setRooms(lst)
    //     console.log(rooms)

    //     setComps(getRoomCompsList())
    // }, [patientsList])

    // const getRoomCompsList = () => {
    //     var comps = []

    //     rooms?.map(element => { 
    //         comps.push(<RoomBox roomParams={element}/>)
    //     })

    //     return comps
    // }
    // console.log(comps)
    // console.log(rooms)

    let rooms = [{
        "_id":{
            "$oid":"6206299539bd33ce78e3ed58"
        },
        "gender":"Male",
        "profileImg":"default",
        "address":"Home",
        "phone":"1234567",
        "email":"johnd@gmail.com",
        "password":"nope1234",
        "fullname":"John Doe",
        "__v":{
            "$numberInt":"0"
        }
    }]

    var comps = []

    rooms?.map(element => { 
        comps.push(<RoomBox roomParams={element}/>)
    })

    return (
        <div>
                <div className="filters">
                    {/* Search room by - Name / Number / Request */}
                    <SearchBar placeholder="Patient name: " data={rooms}/>
                </div>
                {/* Rooms list - each room has a name, number, current operation, 3 fields: Requests, monitors issues and health issues */}
                <div className="rooms-list">
                    <>
                        {/*// comps.map(element => {
                        //     return(element)
                        // })*/}
                        <RoomBox roomParams={{
                            "_id": '6206299539bd33ce78e3ed58',
                            "name": "John Doe",
                            "room_id": "Home, John Doe",
                            "current_activity": "wheelchair",
                            "states": {
                                "health": "issue",
                                "monitors": "no_issue",
                                "requests": "issue"
                            }
                        }}/> 
                        <RoomBox roomParams={{
                            "_id": '620628b839bd33ce78e3ed56',
                            "name": "Cris Walker",
                            "room_id": "Home, Cris Walker",
                            "current_activity": "wheelchair",
                            "states": {
                                "health": "no_issue",
                                "monitors": "no_issue",
                                "requests": "issue"
                            }
                        }}/> 
                        <RoomBox roomParams={{
                            "_id": '6205a62c7da7ea26ce9d5fe0',
                            "name": "Philip Fischer",
                            "room_id": "Home, Philip Fischer",
                            "current_activity": "wheelchair",
                            "states": {
                                "health": "issue",
                                "monitors": "no_issue",
                                "requests": "issue"
                            }
                        }}/> 
                    </>
                </div>
           </div>
    )
}

function createPationsList(patientsList) {
    var lst = []

    // const start = async () => {
    //     await asyncForEach(patientsList, async element => {
    //         console.log("Patient ID: " + element)
    //         const data = await fetch(`http://localhost:5000/users/${element}`).then((response) => response.json())
    //         console.log(data)
    //         lst.push({
    //             "name": data.fullname,
    //             "_id": data._id,
    //             "room_id": data.address + ", " + data.fullname,
    //             "current_activity": "Activity",
    //             "states": {
    //                 "health": "no_issue",
    //                 "monitors": "no_issue",
    //                 "requests": "no_issue"
    //             }
    //         })
    //     })
    //     return lst
    //   }
    // start();
      
    patientsList?.forEach(element => {
        console.log("Patient ID: " + element)
        const data = {
            _id: {$oid:"620628b839bd33ce78e3ed56"},
            gender:"Male",
            profileImg:"default",
            address:"rashlatz",
            phone:"1234567",
            email:"ruby@gmail.com",
            password:"ruby@gmail.com",
            fullname:"Yay that'd work",
            __v: {"$numberInt":"0"}
        }
        console.log(data)
        lst.push({
            "name": data.fullname,
            "_id": data._id,
            "room_id": data.address + ", " + data.fullname,
            "current_activity": "Activity",
            "states": {
                "health": "no_issue",
                "monitors": "no_issue",
                "requests": "no_issue"
            }
        })
    })
    return lst
}

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

export default RoomsContainer