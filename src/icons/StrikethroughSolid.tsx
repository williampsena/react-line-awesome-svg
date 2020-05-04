import * as React from 'react'

function SvgStrikethroughSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M7 6v2h8v8h-5v2h5v8h2v-8h5v-2h-5V8h8V6z" />
        </svg>
    )
}

export default SvgStrikethroughSolid
