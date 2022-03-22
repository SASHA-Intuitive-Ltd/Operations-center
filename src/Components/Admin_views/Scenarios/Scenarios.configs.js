// MUI Icons
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PreviewIcon from '@mui/icons-material/Preview';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

export const CardOptions = [
    {
        "action": "Create scenario",
        "description": "Create a new necessary scenario for all the users",
        "path": "/scenario_add",
        "icon": <AddCircleOutlineIcon className="button-icon"/>
    },

    {
        "action": "Basic scenarios",
        "description": "Scenarios that applied for all the users",
        "path": "/scenario_basic",
        "icon": <PreviewIcon className="button-icon"/>
    },

    {
        "action": "User specified",
        "description": "View specified scenarios that applied per user",
        "path": "/scenario_specific",
        "icon": <AccessibilityIcon className="button-icon"/>
    },
]

export const StepCardOptions = [
    {
        "action": "Create step",
        "description": "Create a new necessary step according to hardware updates",
        "path": "/step_add",
        "icon": <AddCircleOutlineIcon className="button-icon"/>
    },

    {
        "action": "Steps list",
        "description": "View list of all steps",
        "path": "/steps_list",
        "icon": <PreviewIcon className="button-icon"/>
    },
]