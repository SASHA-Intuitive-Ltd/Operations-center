/**
 * @author Ruben Rudov
 * @purpose Style jsons for MUI objects
 */


export const MuiStyles = {
    LineProgStyle: {
        width: "700px",
        height: "30px",
        border: '2px solid var(--global-primary)',
        borderRadius: '10px',
        padding: 7.5,
        margin: 7.5,
        backgroundColor: 'var(global-primary) !imprtant'
    },

    LineProgStyle2: {
        width: "350px",
        height: "30px",
        border: '2px solid var(--global-primary)',
        borderRadius: '10px',
        padding: 7.5,
        margin: 7.5
    },

    ButtonStyle: {
        textTransform: 'none', 
        color: 'var(--global-white)',
        borderColor: 'var(--global-primary)',
        backgroundColor: 'var(--global-primary)',
        margin: 10
    },

    ButtonStyleRed: {
        textTransform: 'none', 
        color: 'var(--global-white)',
        borderColor: '#d32f2f',
        backgroundColor: '#d32f2f',
        margin: 10
    },

    OptionsButtonStyle: {
        textTransform: 'none', 
        color: 'var(--global-grey-darker)',
        backgroundColor: 'var(--global-white)',
        border: '1px solid var(--global-grey-darker)',
        borderRadius: 7.5,
        margin: 10,
        width: 'min-content'
    },

    FabStyle: {
        border: '3px solid var(--global-primary)',
        backgroundColor: 'white', 
        position: 'fixed',
        top: '90%',
        left: '95%'
    },
    
    TextField: {
        margin: 10
    },

    InputsContainerStyle: {
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 500,
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'scroll'
    },

    InputsContainerStyleNoHorizScroll: {
        paddingLeft: 25,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 500,
        fontSize: 'large',
        justifyContent: 'center',
        textAlign: 'justify',
    },
    
    CellStyle: {
        border: '0.5px solid var(--global-grey)',
        fontWeight: 'bold',
        fontSize: 'medium'
    },

    ErrorMessageText: {
        border: '1.5px solid red',
        borderRadius: 5,
        color: 'red',
        padding: 5,
        margin: 10,
        display: 'flex',
        fontSize: 'x-large'
    }
}