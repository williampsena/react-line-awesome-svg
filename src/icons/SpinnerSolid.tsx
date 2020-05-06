import * as React from 'react'

export function SvgSpinnerSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M16 3a3 3 0 10.002 6.002A3 3 0 0016 3zM8.937 6.438a2.502 2.502 0 00-2.5 2.5c0 1.378 1.122 2.5 2.5 2.5 1.38 0 2.5-1.122 2.5-2.5 0-1.38-1.12-2.5-2.5-2.5zm14.126 1.5c-.551 0-1 .449-1 1 0 .55.449 1 1 1 .55 0 1-.45 1-1 0-.551-.45-1-1-1zM6 13.75a2.25 2.25 0 10.001 4.501A2.25 2.25 0 006 13.75zm20 1c-.691 0-1.25.559-1.25 1.25s.559 1.25 1.25 1.25 1.25-.559 1.25-1.25-.559-1.25-1.25-1.25zM8.937 21.063c-1.105 0-2 .894-2 2a1.999 1.999 0 104 0c0-1.106-.894-2-2-2zm14.126.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM16 24.25c-.965 0-1.75.785-1.75 1.75s.785 1.75 1.75 1.75 1.75-.785 1.75-1.75-.785-1.75-1.75-1.75z" />
        </svg>
    )
}

export default SvgSpinnerSolid
