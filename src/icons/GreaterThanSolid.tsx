import * as React from 'react'

function SvgGreaterThanSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M6 6v2.156L22.531 16 6 23.844V26l20-9.219V15.22z" />
        </svg>
    )
}

export default SvgGreaterThanSolid
