import * as React from 'react'

export function SvgCropSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M8 4v4H4v2h4v14h14v4h2v-4h4v-2H11.437L22 11.437V21h2V9.437l3.719-3.718L26.28 4.28 22.563 8H11v2h9.563L10 20.563V4z" />
        </svg>
    )
}

export default SvgCropSolid
