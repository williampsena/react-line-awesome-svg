import * as React from 'react'

function SvgHeadingSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M6 5v2h1v18H6v2h8v-2h-1v-6h6v6h-1v2h8v-2h-1V7h1V5h-8v2h1v6h-6V7h1V5zm3 2h2v8h10V7h2v18h-2v-8H11v8H9z" />
        </svg>
    )
}

export default SvgHeadingSolid
