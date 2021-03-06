import * as React from 'react'

export function SvgUndoSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M12.781 5.281l-8 8-.687.719.687.719 8 8 1.438-1.438L7.938 15H21c2.754 0 5 2.246 5 5v7h2v-7c0-3.844-3.156-7-7-7H7.937l6.282-6.281z" />
        </svg>
    )
}

export default SvgUndoSolid
