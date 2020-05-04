import * as React from 'react'

function SvgAdjustSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4zm0 2v20c-5.535 0-10-4.465-10-10S10.465 6 16 6z" />
        </svg>
    )
}

export default SvgAdjustSolid
