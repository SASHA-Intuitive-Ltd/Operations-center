/**
 * Requests container, contains requests by room request params
 */

import React, {useState} from "react"
import EmergencyBox from "./EmergencyBox"
import RequestsBox from "./RequestsBox"

function RequestsContainer() {

    const [emergencies, setEmergencies] = useState([
        {
            "patient": "John Doe",
            "room_id": "R# 1",
            "issue": "Wheelchair not charged",
        },
        {
            "patient": "Philip Fischer",
            "room_id": "R# 2",
            "issue": "Wheelchair failed charge",
        },
        {
            "patient": "Cris Walker",
            "room_id": "R# 3",
            "issue": "Wheelchair failed charge",
        }
    ])

    const getEmergencies = () => {
        const lst = []
       
    }

    return (
        <div className="req-container">
            <div className="header"><h3>Requests</h3></div>
            <div className="requests">
                {/* Emergencies list iterating, return emergency component for each occurnce */}
                <RequestsBox emergency={emergencies[0]}/>
                <RequestsBox emergency={emergencies[1]}/>
                <RequestsBox emergency={emergencies[2]}/>
            </div>
        </div>
    )
}

export default RequestsContainer