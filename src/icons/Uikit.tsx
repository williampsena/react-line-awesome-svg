import * as React from 'react'

export function SvgUikit(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M22.2 6.7l-4.3 2.5 5.1 2.9v7.8L16 24l-7-4.1v-5.5L5 12v10.5L16 29l11-6.5v-13zm-2-1.2L16 3l-4.2 2.5L16 8z" />
        </svg>
    )
}

export default SvgUikit
