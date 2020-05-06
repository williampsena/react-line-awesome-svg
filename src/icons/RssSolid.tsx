import * as React from 'react'

export function SvgRssSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 5v4c9.93 0 18 8.07 18 18h4C27 14.85 17.15 5 5 5zm0 7v4c6.07 0 11 4.93 11 11h4c0-8.28-6.72-15-15-15zm3 9a3 3 0 000 6 3 3 0 000-6z" />
        </svg>
    )
}

export default SvgRssSolid
