import * as React from 'react';
function SvgClone(props) {
    return (<svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 5v17h4v-2H7V7h13v2h2V5H5zm5 5v17h17V10H10zm2 2h13v13H12V12z"/>
        </svg>);
}
export default SvgClone;
