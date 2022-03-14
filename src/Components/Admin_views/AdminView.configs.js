// Config file for keeping the component clean of hard coding

export const CardOptions = {
    operator_view : {
        "action": "View your patients",
        "description": "View your personal patients list and take control of necessary devices",
    },

    add_patient : {
        "action": "Add new patient",
        "description": "Add a new patient to your patient's list",
        "type": 'add'
    },

    manage : {
        "action": "Manage patients",
        "description": "Update or remove patient info, also can re-add patient to other representative"
    },

    meetings: {
        action: "View booked meetings",
        description: "View your personal patients list and take control of necessary devices"
    },

    bugs : {
        action: "New report ticket",
        description: "Add a new report ticket for bug fixing/feature request",
        type: "report-bug"
    },

    scenarios: {
        action: "Internal updates",
        description: "Internal updates and instructions for admins"
    }
}