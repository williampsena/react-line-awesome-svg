import * as React from 'react'

export function SvgPlaySolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M9 5.156v21.688l1.531-1L25.844 16 10.53 6.156zm2 3.657L22.156 16 11 23.188z" />
        </svg>
    )
}

export default SvgPlaySolid
