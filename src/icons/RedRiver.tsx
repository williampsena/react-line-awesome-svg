import * as React from 'react'

export function SvgRedRiver(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 5v22h22V5H5zm2 2h18v18H7V7zm5 4a1 1 0 00-1 1v6a2 2 0 002-2v-2a1 1 0 011-1h2a2 2 0 002-2h-6zm4 4a1 1 0 00-1 1v6a2 2 0 002-2v-2a1 1 0 011-1h2a2 2 0 002-2h-6z" />
        </svg>
    )
}

export default SvgRedRiver
