import * as React from 'react'

function SvgEllipsisVSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M16 6a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm0 8a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm0 8a1.999 1.999 0 100 4 1.999 1.999 0 100-4z" />
        </svg>
    )
}

export default SvgEllipsisVSolid
