import * as React from 'react'

function SvgPlusSquareSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 5v22h22V5zm2 2h18v18H7zm8 4v4h-4v2h4v4h2v-4h4v-2h-4v-4z" />
        </svg>
    )
}

export default SvgPlusSquareSolid
