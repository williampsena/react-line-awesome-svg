import * as React from 'react'

export function SvgKorvue(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 5v22h22V5H5zm2 2h18v18H7V7zm3 3v5.88h7.81L21.509 10h-4.584L14 15.506V10h-4zm0 6.5v5.47h4v-5.175l3 5.176h4.814L18.111 16.5H10z" />
        </svg>
    )
}

export default SvgKorvue
