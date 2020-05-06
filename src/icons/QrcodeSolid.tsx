import * as React from 'react'

export function SvgQrcodeSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 5v8h2v2h2v-2h4V5zm8 8v2h2v2h-4v2H5v8h8v-8h6v-2h-2v-2h4v-2h2v2h2v-2h2V5h-8v8zm12 2v2h2v-2zm0 2h-2v2h2zm0 2v2h2v-2zm0 2h-2v-2h-2v2h-5v6h2v-4h4v2h2v-2h1zm-3 4h-2v2h2zm1-8v-2h-2v2zm-12 0v-2H9v2zm-4-2H5v2h2zm8-10v4h-1v2h1v1h2V9h1V7h-1V5zM7 7h4v4H7zm14 0h4v4h-4zM8 8v2h2V8zm14 0v2h2V8zM7 21h4v4H7zm1 1v2h2v-2zm17 3v2h2v-2z" />
        </svg>
    )
}

export default SvgQrcodeSolid
