import * as React from 'react'

function SvgMix(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 5v20c0 1.654 1.346 3 3 3s3-1.346 3-3V13a1 1 0 012 0v8c0 1.654 1.346 3 3 3s3-1.346 3-3v-6a1 1 0 012 0v2c0 1.654 1.346 3 3 3s3-1.346 3-3V5H5zm2 2h18v10a1 1 0 01-2 0v-2c0-1.654-1.346-3-3-3s-3 1.346-3 3v6a1 1 0 01-2 0v-8c0-1.654-1.346-3-3-3s-3 1.346-3 3v12a1 1 0 01-2 0V7z" />
        </svg>
    )
}

export default SvgMix
