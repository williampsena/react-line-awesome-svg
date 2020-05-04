import * as React from 'react'

function SvgStickyNote(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 5v22h15.406l.313-.281 6-6 .281-.313V5zm2 2h18v12h-6v6H7zm14 14h2.563L21 23.563z" />
        </svg>
    )
}

export default SvgStickyNote
