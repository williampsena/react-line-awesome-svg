import * as React from 'react'

export function SvgDiceTwoSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 5v22h22V5H5zm2 2h18v18H7V7zm4 2a2 2 0 000 4 2 2 0 000-4zm10 10a2 2 0 000 4 2 2 0 000-4z" />
        </svg>
    )
}

export default SvgDiceTwoSolid
