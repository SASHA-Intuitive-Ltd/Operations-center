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
        borderColor: 'var(--global-primary)',
        backgroundColor: 'var(--global-primary)',
        margin: 10
    },

    // Cancel / remove button
    ButtonStyleRed: {
        textTransform: 'none', 
        color: 'var(--global-white)',
        borderColor: '#d32f2f',
        backgroundColor: '#d32f2f',
        margin: 10
    },

    // Options menu button
    OptionsButtonStyle: {
        textTransform: 'none', 
        color: 'var(--global-grey-darker)',
        backgroundColor: 'var(--global-white)',
        border: '1px solid var(--global-grey-darker)',
        borderRadius: 7.5,
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
    }
}