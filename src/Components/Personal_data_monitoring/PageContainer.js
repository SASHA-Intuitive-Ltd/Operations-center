import React, { useEffect, useState } from 'react'
import HealthStats from './HealthStats'
import PersonalInfo from './PersonalInfo'
import ProgressTrack from './WorkflowContainerDetails/ProgressTrack'
import DeviceTrack from './WorkflowContainerDetails/DeviceTrack'
import Performance from './WorkflowContainerDetails/Performance'
import { useParams } from 'react-router-dom'
import ShowerMonitoring from './ShowerStatusMonitor'


function PageContainer({ healthStats, devicesPerformances, currentDevice, originalRef }) {

    // TODO: add useEffect for currentDevice prop
    const { _id } = useParams()

    return (
            <div className='personal-container'>
                <div className='left'>
                    {/* Subject's personal info */}
                    <PersonalInfo user={_id}/>
                    {/* Subject's health tracking */}
                    <HealthStats stats={healthStats}/> 
                    {/* <ShowerMonitoring _id={_id}/> */}
                </div>
                <div className='right'>
                    <div className='row1'>
                        {/* Subject's placement in workflow */}
                        <ProgressTrack _id={_id} currentDevice={currentDevice} />
                    </div>
                    <div className='row2'>
                        {/* Subject's performance (Reaction times, transition between devices time and more..) */}
                        <Performance/>
                        {/* Active device's performance (According to the performance parameters of each device, as specified)*/}
                        <DeviceTrack/>
                    </div>
                </div>
            </div>
    )
}

export default PageContainer