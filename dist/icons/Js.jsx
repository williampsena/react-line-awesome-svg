import * as React from 'react';
function SvgJs(props) {
    return (<svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M0 7v18h32V7zm2 2h28v14H2zm10 3v5.5c0 .215-.285.5-.5.5-.215 0-.5-.285-.5-.5V17H9v.5c0 1.383 1.117 2.5 2.5 2.5s2.5-1.117 2.5-2.5V12zm6.5 0a2.497 2.497 0 00-2.5 2.5c0 1.383 1.117 2.5 2.5 2.5.215 0 .5.285.5.5 0 .3-.117.5-.5.5-.367 0-.426-.078-.438-.094-.011-.015-.062-.078-.062-.312h-2c0 .566.164 1.203.625 1.687.46.485 1.145.719 1.875.719 1.418 0 2.5-1.2 2.5-2.5 0-1.383-1.117-2.5-2.5-2.5-.215 0-.5-.285-.5-.5 0-.215.285-.5.5-.5.266 0 .348.063.406.125a.42.42 0 01.094.281h2c0-.59-.215-1.191-.656-1.656-.442-.465-1.11-.75-1.844-.75z"/>
    </svg>);
}
export default SvgJs;
