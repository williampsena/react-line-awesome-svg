import * as React from 'react'

function SvgTicketAltSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M2 7v7h1c1.191 0 2 .809 2 2 0 1.191-.809 2-2 2H2v7h28v-7h-1c-1.191 0-2-.809-2-2 0-1.191.809-2 2-2h1V7zm2 2h24v3.188c-1.715.449-3 1.957-3 3.812 0 1.855 1.285 3.363 3 3.813V23H4v-3.188c1.715-.449 3-1.957 3-3.812 0-1.855-1.285-3.363-3-3.813z" />
        </svg>
    )
}

export default SvgTicketAltSolid
