import * as React from 'react'

function SvgSquare(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M6 6v20h20V6zm2 2h16v16H8z" />
        </svg>
    )
}

export default SvgSquare
