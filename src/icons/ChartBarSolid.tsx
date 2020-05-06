import * as React from 'react'

export function SvgChartBarSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M21 4v24h8V4zm2 2h4v20h-4zM3 10v18h8V10zm2 2h4v14H5zm7 4v12h8V16zm2 2h4v8h-4z" />
        </svg>
    )
}

export default SvgChartBarSolid
