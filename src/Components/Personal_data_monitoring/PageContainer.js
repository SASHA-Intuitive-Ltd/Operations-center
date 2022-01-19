import React from 'react'
import HealthStats from './HealthStats'
import PersonalInfo from './PersonalInfo'
import ProgressTrack from './WorkflowContainerDetails/ProgressTrack'

function PageContainer({ userInfo, healthStats, devicePerformance }) {
    return (
        <div className='personal-container'>
            <div className='left'>
                {/* Subject's personal info */}
                <PersonalInfo user={}/>
                {/* Subject's health tracking */}
                <HealthStats stats={}/>
            </div>
            <div className='right'>
                <div>
                    {/* Subject's placement in workflow */}
                    <ProgressTrack />
                </div>
                <div>
                    {/* Subjeect's performance (Reaction times, transition between devices time and more..) */}

                    {/* Active device's performance (According to the performance parameters of each device, as specified)*/}
                </div>
            </div>
        </div>
    )
}