/**
 * Emergencies list container
 */

import React, { useState } from "react"
import EmergencyBox from "./EmergencyBox"

function EmergenciesContainer() {

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
        }
    ])

    const getEmergencies = () => {
        const lst = []
       
    }

    return (
        <div className="eme-container">
            <div className="header">
                <h3>Emergencies</h3>
            </div>
            <div className="emergencies">
                {/* Emergencies list iterating, return emergency component for each occurnce */}
                <EmergencyBox emergency={emergencies[0]}/>
                <EmergencyBox emergency={emergencies[1]}/>
            </div>
            <div className="emergencies">

            </div>
        </div>
    )
}

export default EmergenciesContainer