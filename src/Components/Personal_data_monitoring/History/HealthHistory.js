import React from "react"
import { useParams } from "react-router-dom"

export default function HealthHistory({  }) {
    
    const { _id } = useParams()
    
    return (
        <div>
            History page {_id}
        </div>
    )
}