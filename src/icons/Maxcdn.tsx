import * as React from 'react'

export function SvgMaxcdn(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 6l2 5-3 15h5l3-15h4l-3 15h5l3-15h4l-3 15h5l2.75-13.742C30.395 9.02 27.922 6 24.617 6z" />
        </svg>
    )
}

export default SvgMaxcdn
