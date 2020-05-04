import * as React from 'react'

function SvgSignalSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M21 4v24h6V4zm-8 7v17h6V11zm-8 7v10h6V18z" />
        </svg>
    )
}

export default SvgSignalSolid
