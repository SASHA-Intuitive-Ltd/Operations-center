/**
 * @Purpose Contain the Emergencies, requests, Room display list of the operator screen
 */

import React, { useEffect, useLayoutEffect, useState } from "react"
import { useParams } from "react-router-dom"
import EmergenciesContainer from './EmergenciesContainer'
import RequestsContainer from './RequestsContainer'
import RoomsContainer from "./RoomsContainer"

function PageContainerOperator({  }) {

    const [operatorInfo, setInfo] = useState({})

    useLayoutEffect(() => {
        
        fetch('http://localhost:5000/admins/620a324365bd8515cf1a7ba3').then((response) => response.json())
        .then((data) => {
            setInfo(data);
        })
        console.log(operatorInfo)
    }, [])

    return (
        <div className="operator-screen">
           {/* Emergencies - Health and System */}
           <EmergenciesContainer/>
           {/* Requests - immidiate and longer term requests */}
           <RequestsContainer/>
           <RoomsContainer patientsList={operatorInfo.patients}/>
        </div>
    )
}

export default PageContainerOperator