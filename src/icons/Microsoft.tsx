import * as React from 'react'

export function SvgMicrosoft(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 5v22h22V5H5zm2 2h8v8H7V7zm10 0h8v8h-8V7zM7 17h8v8H7v-8zm10 0h8v8h-8v-8z" />
        </svg>
    )
}

export default SvgMicrosoft
