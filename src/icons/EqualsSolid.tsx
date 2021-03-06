import * as React from 'react'

export function SvgEqualsSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 12v2h22v-2zm0 6v2h22v-2z" />
        </svg>
    )
}

export default SvgEqualsSolid
