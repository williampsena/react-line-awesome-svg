import * as React from 'react'

function SvgCrossSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M13 3v6H7v6h6v14h6V15h6V9h-6V3zm2 2h2v6h6v2h-6v14h-2V13H9v-2h6z" />
        </svg>
    )
}

export default SvgCrossSolid
