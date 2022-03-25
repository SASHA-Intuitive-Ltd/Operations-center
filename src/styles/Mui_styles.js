/**
 * @author Ruben Rudov
 * @purpose Style jsons for MUI objects
 */

// Export JSON of possible styles for MUI components
export const MuiStyles = {

    // Progression style
    LineProgStyle: {
        width: "700px",
        height: "30px",
        border: '2px solid var(--global-primary)',
        borderRadius: '10px',
        padding: 7.5,
        margin: 7.5,
        backgroundColor: 'var(global-primary) !imprtant'
    },

    // Progression style
    LineProgStyle2: {
        width: "350px",
        height: "30px",
        border: '2px solid var(--global-primary)',
        borderRadius: '10px',
        padding: 7.5,
        margin: 7.5
    },

    // Submit button style
    ButtonStyle: {
        textTransform: 'none', 
        color: 'var(--global-white)',
        borderColor: 'var(--global-green)',
        backgroundColor: 'var(--global-green)',
        margin: 10
    },

    // Cancel / remove button
    ButtonStyleRed: {
        textTransform: 'none', 
        color: 'var(--global-white)',
        borderColor: 'var(--global-failed)',
        backgroundColor: 'var(--global-failed)',
        margin: 10
    },

    // Options menu button
    OptionsButtonStyle: {
        textTransform: 'none', 
        color: 'var(--global-grey-darker)',
        backgroundColor: '#F4F9F6',
        border: '2px solid var(--global-grey-darker)',
        borderRadius: 10,
        margin: 10,
        width: 'min-content'
    },

    // Floating action button style
    FabStyle: {
        border: '3px solid var(--global-primary)',
        backgroundColor: 'white', 
        position: 'fixed',
        top: '90%',
        left: '95%'
    },
    
    // Text field style
    TextField: {
        margin: 10
    },

    // Text fields container style
    InputsContainerStyle: {
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 500,
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'scroll'
    },

    // Text fields container style w/o scrolling
    InputsContainerStyleNoHorizScroll: {
        paddingLeft: 25,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 500,
        fontSize: 'large',
        justifyContent: 'center',
        textAlign: 'justify',
    },
    
    // Table cell style
    CellStyle: {
        border: '0.5px solid var(--global-grey)',
        fontWeight: 'bold',
        fontSize: 'medium'
    },

    // Error message area design
    ErrorMessageText: {
        border: '1.5px solid red',
        borderRadius: 5,
        color: 'red',
        padding: 5,
        margin: 10,
        display: 'flex',
        fontSize: 'x-large'
    },

    // Landing page buttons
    LandingButton: {
        color: 'var(--global-white)',
        backgroundColor: 'var(--global-white)',
        color: 'var(--global-primary)',
        fontWeight: '600', 
        textTransform: 'none', 
        fontSize: 'x-large',
        padding: 15,
        margin: 20,
        borderRadius: 15,
        border: '2px solid var(--global-primary)'
    },

    // Admin action card MUI custom
    AdminActionCard: {
        minWidth: '30%',
        maxWidth: '30%', 
        borderRadius: '6px',
        border: '2px solid var(--global-primary)',
        margin: '10px'
    },

    // Button that contains icon variant 1
    IconButtonStyle1: {
        border: '1px solid var(--global-grey)',
        backgroundColor: 'var(--global-white)',
        transition: 'all 0.65s',
        alignSelf: 'center',
        textAlign: 'center'
    },

    // Icon style variant 1
    IconContentStyle1: {
        margin: 5,
        fontSize: 'xx-large',
        size: 'max-content',
        color: 'var(--global-primary)',
        transition: 'all 0.65s'
    },

    // Form style
    FormStyle: {
        padding: '100px',
        display: 'flex',
        flexDirection: 'column'
    },

    // Scenario outside card
    StepCardOut: {
        textAlign: 'justify',
        margin: 0,
        padding: 7.5,
    },

    // Scenario card
    StepCard: {
        border: '2px solid var(--global-primary)'
    },

    // Main title styles
    TitleStyle: {
        color: '#1565C0',
        paddingBottom: 15
    },

    SubtitleStyle: {
        color: '#9E9E9E',
        padding: 7,
        fontWeight: 500
    }
}