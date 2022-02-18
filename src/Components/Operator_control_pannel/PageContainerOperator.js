/**
 * @Purpose Contain the Emergencies, requests, Room display list of the operator screen
 */

import React from "react"
import EmergenciesContainer from './EmergenciesContainer'
import RequestsContainer from './RequestsContainer'
import RoomsContainer from "./RoomsContainer"

function PageContainerOperator({ operatorInfo }) {
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