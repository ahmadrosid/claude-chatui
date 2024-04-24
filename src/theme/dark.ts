export default {
    'h1, h2, h3, h4': {
        paddingTop: '.2rem',
        paddingBottom: '.2rem'
    },
    'h1': {
        fontSize: '2.5rem',
        fontWeight: 'bold'
    },
    'h2': {
        fontSize: '2rem',
        fontWeight: 'bold'
    },
    'h3': {
        fontSize: '1.8rem',
        fontWeight: 'bold'
    },
    'h4': {
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    'p': {
        paddingTop: '.6rem',
        paddingBottom: '.6rem'
    },
    'pre': {
        fontSize: '14px',
        background: '#3B4252',
        padding: '.8rem',
        borderRadius: '4px',
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
    },
    'code': {
        fontSize: '12px',
        fontWeight: 'bold'
    },
    'p > code::before, p > code::after': {
        content: '"`"'
    },
    'a': {
        textDecoration: "underline"
    },
    'li > code::before, li > code::after': {
        content: '"`"'
    },
    'ul,ol': {
        paddingInlineStart: '1.5rem'
    },
    'blockquote': {
        borderLeft: '3px solid #D8DEE9',
        marginTop: '1rem',
        marginBottom: '1rem',
        paddingLeft: '10px',
        backgroundColor: '#434C5ECC',
        fontStyle: 'italic',
        quotes: `"\\201C"`,
        display: 'flex',
        fontSize: '1.1rem'
    },
    'blockquote > p > code': {
        fontSize: '.9rem'
    },
    'blockquote:before': {
        content: 'open-quote',
        paddingRight: '.6rem',
        fontSize: '2.5em',
        fontFamily: `'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif`,
    }
}
