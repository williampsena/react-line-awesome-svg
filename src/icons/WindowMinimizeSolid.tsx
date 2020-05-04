import * as React from 'react'

function SvgWindowMinimizeSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 5v22h22V5zm2 2h18v18H7zm2 13v2h14v-2z" />
        </svg>
    )
}

export default SvgWindowMinimizeSolid
