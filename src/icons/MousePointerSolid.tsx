import * as React from 'react'

export function SvgMousePointerSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M9 2.594v25.562l1.656-1.375 4.031-3.375 2.032 4.032.437.906.907-.469 3.093-1.594.875-.437-.437-.907-1.844-3.625 5.063-.625 2.03-.25L25.407 19 10.72 4.281zm2 4.844l11.563 11.53-4.5.532-1.407.188.657 1.28 2.062 4-1.313.688-2.156-4.312-.594-1.125-.968.812L11 23.844z" />
        </svg>
    )
}

export default SvgMousePointerSolid
