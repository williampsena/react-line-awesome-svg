import * as React from 'react'

export function SvgUnderlineSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M8 4v12c0 4.43 3.57 8 8 8s8-3.57 8-8V4h-2v12c0 3.371-2.629 6-6 6s-6-2.629-6-6V4zM6 26v2h20v-2z" />
        </svg>
    )
}

export default SvgUnderlineSolid
