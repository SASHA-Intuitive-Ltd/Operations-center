import React from "react"
import { Button } from "@mui/material"
import Graph from "./Graph"
import { Link } from "react-router-dom"
import { usePickerState } from "@mui/lab/internal/pickers/hooks/usePickerState"
import { useParams } from "react-router-dom"

function HealthStats({ stats }) {

    const { _id } = useParams()

    return (
        <div className="graphs">
            {/* TODO: Move button style to MUI */}
            <Link to={`/patient_health_history/${_id}`} style={{ float: 'right', padding: 10, fontWeight: 500 }} className="history-button" >History</Link>
            <Graph graphParams={[stats.heart_rate]} xAxisTitle="Time" yAxisTitle="Pulse" chartName="Pulse"/>
            <Graph graphParams={[stats.spo2]} xAxisTitle="Time" yAxisTitle="Oxygen saturation" chartName="Oxygen saturation"/>
            <Graph graphParams={[stats.blood_pressure_sys, stats.blood_pressure_dia]} xAxisTitle="Time" yAxisTitle="Blood pressure" chartName="Blood pressure"/>
        </div>
    )
}

export default HealthStats