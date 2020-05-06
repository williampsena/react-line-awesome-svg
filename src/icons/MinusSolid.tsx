import * as React from 'react'

export function SvgMinusSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 15v2h22v-2z" />
        </svg>
    )
}

export default SvgMinusSolid
