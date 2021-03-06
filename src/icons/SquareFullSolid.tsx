import * as React from 'react'

export function SvgSquareFullSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M6 6v20h20V6H6z" />
        </svg>
    )
}

export default SvgSquareFullSolid
