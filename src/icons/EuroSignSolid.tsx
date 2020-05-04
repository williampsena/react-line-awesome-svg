import * as React from 'react'

function SvgEuroSignSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M18 4c-4.738 0-8.586 3.887-9.688 9H6v2h2.063c-.024.328-.063.664-.063 1 0 .336.04.672.063 1H6v2h2.313c1.101 5.113 4.949 9 9.687 9 2.707 0 5.168-1.305 6.938-3.344l-1.532-1.312C21.953 25.02 20.07 26 18 26c-3.504 0-6.59-2.898-7.625-7H19v-2h-8.969c-.027-.332-.031-.66-.031-1 0-.34.004-.668.031-1H19v-2h-8.625C11.41 8.898 14.496 6 18 6c2.07 0 3.953.98 5.406 2.656l1.532-1.312C23.168 5.304 20.706 4 18 4z" />
        </svg>
    )
}

export default SvgEuroSignSolid
