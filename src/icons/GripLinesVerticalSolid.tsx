import * as React from 'react'

export function SvgGripLinesVerticalSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M11 3v26h2V3h-2zm8 0v26h2V3h-2z" />
        </svg>
    )
}

export default SvgGripLinesVerticalSolid
