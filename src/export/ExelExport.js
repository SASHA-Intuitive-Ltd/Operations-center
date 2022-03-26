/**
 * @Purpose Create an export action button
 */

 import React from 'react'

 // Necessary modules
 import * as FileSaver from "file-saver"
 import * as XLSX from "xlsx"

 import { Button } from '@mui/material'
 import { Download } from '@mui/icons-material'

export const ExportToExcel = ({ fileData, fileName }) => {
 
    // Set file type and exel's extension
    const fileType ="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"
    const fileExtension = ".xlsx"
 
    // Export data to CSV
    const exportToCSV = (fileData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(fileData)
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] }
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" })
        const data = new Blob([excelBuffer], { type: fileType })
        FileSaver.saveAs(data, fileName + fileExtension)
    }
 
    // Action button to include in the exporting feature component
    return (
        <Button
            className='submit-button1'
            startIcon={(<Download fontSize="small" />)}
            sx={{ mr: 1, float: 'right', border: '1px solid var(--global-primary)', color: 'var(--global-primary)' }}
            onClick={(e) => exportToCSV(fileData, fileName)}
        >
            Export
        </Button>
    )
 }