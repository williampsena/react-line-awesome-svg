import * as React from 'react'

function SvgThListSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M4 6v20h24V6zm2 2h5v4H6zm7 0h13v4H13zm-7 6h5v4H6zm7 0h13v4H13zm-7 6h5v4H6zm7 0h13v4H13z" />
        </svg>
    )
}

export default SvgThListSolid
