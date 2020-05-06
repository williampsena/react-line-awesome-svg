import * as React from 'react'

export function SvgTrello(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 5v22h22V5zm2 2h8v14H7zm10 0h8v9h-8z" />
        </svg>
    )
}

export default SvgTrello
