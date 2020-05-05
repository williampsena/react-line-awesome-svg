import * as React from 'react';
function SvgComment(props) {
    return (React.createElement("svg", Object.assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
        React.createElement("path", { d: "M3 6v20h9.586L16 29.414 19.414 26H29V6zm2 2h22v16h-8.414L16 26.586 13.414 24H5zm4 3v2h14v-2zm0 4v2h14v-2zm0 4v2h10v-2z" })));
}
export default SvgComment;
