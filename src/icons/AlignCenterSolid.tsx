import * as React from 'react'

export function SvgAlignCenterSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M3 7v2h26V7zm4 4v2h18v-2zm-4 4v2h26v-2zm4 4v2h18v-2zm-4 4v2h26v-2z" />
        </svg>
    )
}

export default SvgAlignCenterSolid
