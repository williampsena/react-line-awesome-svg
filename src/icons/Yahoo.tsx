import * as React from 'react'

function SvgYahoo(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M7.34 6.027s.785.172 1.441.172 1.426-.183 1.426-.183L16 15.66 21.82 6s.63.215 1.414.215c.782 0 1.426-.2 1.426-.2l-7.445 12.583.2 9.375s-.786-.215-1.415-.215c-.625 0-1.441.242-1.441.242l.226-9.414z" />
        </svg>
    )
}

export default SvgYahoo
