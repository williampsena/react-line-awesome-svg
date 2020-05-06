import * as React from 'react'

export function SvgAlignLeftSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M3 7v2h26V7zm0 4v2h18v-2zm0 4v2h26v-2zm0 4v2h18v-2zm0 4v2h26v-2z" />
        </svg>
    )
}

export default SvgAlignLeftSolid
