import * as React from 'react'

function SvgCalculatorSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M6 3v26h20V3zm2 2h16v22H8zm2 2v6h12V7zm2 2h8v2h-8zm-1 6v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z" />
        </svg>
    )
}

export default SvgCalculatorSolid
