import * as React from 'react'

function SvgHackerNews(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 5v22h22V5zm2 2h18v18H7zm4.5 4l3.5 6v5h2v-5l3.5-6h-2L16 15.281 13.5 11z" />
        </svg>
    )
}

export default SvgHackerNews