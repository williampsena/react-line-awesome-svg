import * as React from 'react'

export function SvgFileExportSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M6 4v24h20v-8l-2 2v4H8V6h16v4l2 2V4zm16.406 7L21 12.406 23.563 15h-9.657v2h9.656L21 19.594 22.406 21l4.313-4.281.687-.719-.687-.719z" />
        </svg>
    )
}

export default SvgFileExportSolid
