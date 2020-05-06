import * as React from 'react'

export function SvgPersonBoothSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M7.5 4A3.514 3.514 0 004 7.5C4 9.422 5.578 11 7.5 11S11 9.422 11 7.5 9.422 4 7.5 4zM12 4v7.844c.232.285.443.588.613.927l.955 1.913.432.322V6h1.133l1.85 12.947-.954 3.81L16 23.5c0 1.379 1.121 2.5 2.5 2.5.641 0 1.22-.25 1.662-.646.51.398 1.142.646 1.838.646.771 0 1.468-.3 2-.78.532.48 1.229.78 2 .78.352 0 .686-.072 1-.184V28h2V4H12zM7.5 6C8.34 6 9 6.66 9 7.5S8.34 9 7.5 9 6 8.34 6 7.5 6.66 6 7.5 6zm9.652 0H27v17a1 1 0 01-2 0h-2a1 1 0 01-2 0h-2v.5c0 .271-.229.5-.5.5a.507.507 0 01-.5-.5v-.377l1.018-4.07L17.152 6zM7 12c-2.207 0-4 1.793-4 4v5.25l2 1V28h2v-7l-2-1v-4c0-1.102.898-2 2-2h1.156c.762 0 1.441.41 1.781 1.094l1.282 2.562 2.648 1.973L15 18l-2.219-1.656-1.062-2.125C11.035 12.855 9.68 12 8.156 12H7zm5 8.484V28h2v-6.027l-.729-.543L12 20.484zM8 21v7h2v-7H8z" />
        </svg>
    )
}

export default SvgPersonBoothSolid
