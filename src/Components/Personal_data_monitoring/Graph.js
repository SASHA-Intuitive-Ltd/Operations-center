import React from "react"

import { Chart as ChartJS } from 'chart.js/auto'
import { Chart, Line } from 'react-chartjs-2'

function Graph({ graphParams, xAxisTitle, yAxisTitle, chartName }) {

    const config = require("../../configs/tests.json")

    const getLabels = () => {
        const labs = []
        for (let index = 0; index <= 23; index++) {
            labs.push(index.toString() + ":00")
        }

        return labs
    }

    var labels = getLabels()    

    // Const function for getting all data sets per graph
    const getDataSets = () => {
        const setsList = []
        graphParams.forEach(element => {
            console.log(element)
            return(setsList.push({
                label: chartName,
                backgroundColor: config.theme.primary,
                borderColor: config.theme.primary,
                data: element,
                borderWidth: 3
            }))
        });

        console.log(setsList)

        return setsList
    }

    const data = {
        labels: labels,
        datasets: getDataSets()

    }

    const options = {
        legend: {
            fontColor: config.theme.primary,
            position: 'top'
        },
        responsive: true,
        layout: {
            padding: {
                top: 5,
                left: 15,
                right: 15,
                bottom: 15
            }
        }
    }

    return (
        <div>
            <Line
                options={options}
                data={data}
            />
        </div>
    )
}

export default Graph