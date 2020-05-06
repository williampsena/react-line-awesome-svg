import * as React from 'react'

export function SvgGripVerticalSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M7 2v8h8V2H7zm10 0v8h8V2h-8zM9 4h4v4H9V4zm10 0h4v4h-4V4zM7 12v8h8v-8H7zm10 0v8h8v-8h-8zm-8 2h4v4H9v-4zm10 0h4v4h-4v-4zM7 22v8h8v-8H7zm10 0v8h8v-8h-8zm-8 2h4v4H9v-4zm10 0h4v4h-4v-4z" />
        </svg>
    )
}

export default SvgGripVerticalSolid
