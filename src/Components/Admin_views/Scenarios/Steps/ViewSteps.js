import React, { useState } from "react"

export default function ViewSteps() {
    
    const [ steps, setSteps ] = useState([])


    return (
        <div>
            {
                steps.map(step => {
                    return(
                        <p>
                            {step._id}
                        </p>
                    )
                })
            }            
        </div>
    )
}