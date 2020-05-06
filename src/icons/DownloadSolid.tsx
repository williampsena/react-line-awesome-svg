import * as React from 'react'

export function SvgDownloadSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M15 4v16.563L9.719 15.28 8.28 16.72l7 7 .719.687.719-.687 7-7-1.438-1.438L17 20.562V4zM7 26v2h18v-2z" />
        </svg>
    )
}

export default SvgDownloadSolid
