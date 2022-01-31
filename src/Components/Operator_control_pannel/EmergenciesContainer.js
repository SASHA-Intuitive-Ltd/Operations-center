/**
 * Emergencies list container
 */

import React, { useState } from "react"
import EmergencyBox from "./EmergencyBox"

function EmergenciesContainer() {

    const [emergencies, setEmergencies] = useState([
        {
            "patient": "Patient",
            "room_id": "R# 1",
            "issue": "Soap empty",
        },
        {
            "patient": "Patient2",
            "room_id": "R# 2",
            "issue": "Wheelchair failed charge",
        },
        {
            "patient": "Patient3",
            "room_id": "R# 3",
            "issue": "Heart failure",
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
                <EmergencyBox emergency={emergencies[2]}/>
            </div>
            <div className="emergencies">

            </div>
        </div>
    )
}

export default EmergenciesContainer