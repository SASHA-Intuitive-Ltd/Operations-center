import React from "react"
import { Button } from "@mui/material"
import Graph from "./Graph"

function HealthStats({ stats }) {
    return (
        <div className="graphs">
            <Button className="history-button" >History</Button>
            <Graph graphParams={[stats.heart_rate]} xAxisTitle="Time" yAxisTitle="Pulse" chartName="Pulse"/>
            <Graph graphParams={[stats.spo2]} xAxisTitle="Time" yAxisTitle="Oxygen saturation" chartName="Oxygen saturation"/>
            <Graph graphParams={[stats.blood_pressure_sys, stats.blood_pressure_dia]} xAxisTitle="Time" yAxisTitle="Blood pressure" chartName="Blood pressure"/>
        </div>
    )
}

export default HealthStats