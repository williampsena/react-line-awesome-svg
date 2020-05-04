import * as React from 'react'

function SvgBoltSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M16 6v9l4 1-3.898 10H16v-8.031l-4-1L15.898 6H16m2-2h-3.512l-.472 1.328-3.903 10.973-.734 2.074 2.137.535 2.484.621V28h3.469l.496-1.273 3.898-10 .825-2.118L18 13.438z" />
        </svg>
    )
}

export default SvgBoltSolid