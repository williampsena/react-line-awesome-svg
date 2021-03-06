import * as React from 'react'

export function SvgExclamationSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M13 4v16h6V4zm2 2h2v12h-2zm-2 16v6h6v-6zm2 2h2v2h-2z" />
        </svg>
    )
}

export default SvgExclamationSolid
