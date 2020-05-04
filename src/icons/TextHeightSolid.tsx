import * as React from 'react'

function SvgTextHeightSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M4 6v2h7v18h2V8h7V6zm21 .625L21.5 11H24v10h-2.5l3.5 4.375L28.5 21H26V11h2.5z" />
        </svg>
    )
}

export default SvgTextHeightSolid
