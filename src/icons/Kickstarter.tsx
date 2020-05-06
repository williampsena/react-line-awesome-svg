import * as React from 'react'

export function SvgKickstarter(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 5v22h22V5H5zm2 2h18v18H7V7zm6.633 4C12.58 11 12 11.808 12 12.816v6.317c0 1.053.56 1.86 1.652 1.86.877 0 1.6-.571 1.6-1.86v-1.705l2.47 3.088c.503.608 1.592.685 2.278 0 .596-.616.603-1.5.162-2.055l-2.002-2.563 1.572-2.418a1.55 1.55 0 00-.226-2.001c-.67-.65-1.821-.707-2.506.285l-1.748 2.662V12.84c0-1.253-.717-1.84-1.62-1.84z" />
        </svg>
    )
}

export default SvgKickstarter
