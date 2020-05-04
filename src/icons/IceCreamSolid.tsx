import * as React from 'react'

function SvgIceCreamSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M16 4c-2.156 0-3.992 1.383-4.688 3.313C9.392 8.008 8 9.84 8 12c0 .063-.004.125 0 .188-1.156.417-2 1.519-2 2.812 0 1.645 1.355 3 3 3h.375l4.313 8.5c.007.016.023.016.03.031C14.142 27.418 15.017 28 16 28s1.86-.582 2.281-1.469h.032c.003-.008-.004-.023 0-.031l4.312-8.5H23c1.645 0 3-1.355 3-3 0-1.313-.879-2.41-2.063-2.813a5.042 5.042 0 00-2.968-3.78C20.668 5.936 18.547 4 16 4zm0 2c1.32 0 2.438.828 2.844 2-2.336.074-4.293 1.777-4.75 4H10c0-1.652 1.348-3 3-3 .277 0 .555.055.813.125.44-.586.953-1.121 1.562-1.531a4.96 4.96 0 00-1.656-.532A2.962 2.962 0 0116 6zm3 4c1.32 0 2.438.828 2.844 2h-5.688A2.992 2.992 0 0119 10zM9 14h14c.566 0 1 .434 1 1 0 .566-.434 1-1 1H12.625l1.031 2h6.719l-3.844 7.625-.031.031v.032A.533.533 0 0116 26a.533.533 0 01-.5-.313v-.03l-.031-.032-4.563-9.063-.281-.562H9c-.566 0-1-.434-1-1 0-.566.434-1 1-1z" />
        </svg>
    )
}

export default SvgIceCreamSolid
