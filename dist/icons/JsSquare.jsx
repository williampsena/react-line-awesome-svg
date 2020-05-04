import * as React from 'react';
function SvgJsSquare(props) {
    return (<svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M5 5v22h22V5H5zm2 2h18v18H7V7zm13.244 8c-1.425 0-2.346.912-2.346 2.12 0 1.31.77 1.937 1.928 2.43l.4.173c.733.323 1.169.511 1.169 1.062 0 .465-.427.799-1.092.799-.788 0-1.236-.418-1.578-.979l-1.31.75c.464.931 1.433 1.645 2.925 1.645 1.52 0 2.66-.788 2.66-2.232 0-1.35-.77-1.949-2.139-2.528l-.398-.172c-.693-.304-.988-.503-.988-.978 0-.39.294-.694.77-.694.465 0 .758.2 1.034.694l1.256-.807c-.532-.93-1.265-1.283-2.29-1.283zm-5.85.096v5.463c0 .798-.342 1.005-.865 1.005-.55 0-.788-.379-1.035-.826l-1.31.79c.38.807 1.129 1.472 2.412 1.472C15.02 23 16 22.24 16 20.576v-5.48h-1.605z"/>
    </svg>);
}
export default SvgJsSquare;
