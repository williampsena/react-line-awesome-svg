import * as React from 'react'

export function SvgCcMastercard(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3zm0 2h22c.566 0 1 .434 1 1v14c0 .566-.434 1-1 1H5c-.566 0-1-.434-1-1V9c0-.566.434-1 1-1zm7 1c-3.855 0-7 3.145-7 7s3.145 7 7 7a6.934 6.934 0 004-1.25A6.944 6.944 0 0020 23c3.855 0 7-3.145 7-7s-3.145-7-7-7a6.944 6.944 0 00-4 1.25A6.934 6.934 0 0012 9zm0 2c1.281 0 2.43.496 3.313 1.281a5.916 5.916 0 00-.97 1.719h2.22c.14.32.273.652.343 1h-2.812A5.986 5.986 0 0014 16c0 .344.04.676.094 1h2.812c-.07.348-.203.68-.343 1h-2.22c.223.629.56 1.207.97 1.719C14.43 20.504 13.28 21 12 21c-2.773 0-5-2.227-5-5s2.227-5 5-5zm8 0c2.773 0 5 2.227 5 5s-2.227 5-5 5a4.947 4.947 0 01-2.5-.688A6.92 6.92 0 0019 16a6.92 6.92 0 00-1.5-4.313A4.947 4.947 0 0120 11z" />
        </svg>
    )
}

export default SvgCcMastercard
