import * as React from 'react'

function SvgFlickr(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M8 5C6.355 5 5 6.355 5 8v16c0 1.645 1.355 3 3 3h16c1.645 0 3-1.355 3-3V8c0-1.645-1.355-3-3-3zm0 2h16c.566 0 1 .434 1 1v16c0 .566-.434 1-1 1H8c-.566 0-1-.434-1-1V8c0-.566.434-1 1-1zm3.5 5.5a3.5 3.5 0 100 7 3.5 3.5 0 100-7zm9 0a3.5 3.5 0 100 7 3.5 3.5 0 100-7z" />
        </svg>
    )
}

export default SvgFlickr
