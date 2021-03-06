import * as React from 'react'

export function SvgGripLinesSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M3 11v2h26v-2H3zm0 8v2h26v-2H3z" />
        </svg>
    )
}

export default SvgGripLinesSolid
