import * as React from 'react'

export function SvgLemon(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M13 4c-2.582 0-4.879 1.438-6.469 3.625C4.941 9.813 4 12.765 4 16c0 3.234.941 6.188 2.531 8.375C8.121 26.563 10.418 28 13 28c8.23 0 12.617-4.707 13.688-9.656C27.44 17.8 28 16.996 28 16c0-.996-.559-1.8-1.313-2.344C25.56 8.582 20.313 4 13 4zm0 2c1.836 0 3.54 1.016 4.844 2.813C19.148 10.608 20 13.16 20 16s-.852 5.39-2.156 7.188C16.539 24.983 14.836 26 13 26c-1.836 0-3.54-1.016-4.844-2.813C6.852 21.392 6 18.84 6 16s.852-5.39 2.156-7.188C9.461 7.016 11.164 6 13 6zm6.375 1.531c3.04 1.61 4.992 4.258 5.469 6.844l.093.5.47.219c.347.16.593.496.593.906 0 .41-.246.746-.594.906l-.468.219-.094.5c-.532 2.895-2.278 5.734-5.782 7.25.137-.164.278-.324.407-.5C21.059 22.187 22 19.235 22 16c0-3.234-.941-6.188-2.531-8.375-.028-.035-.067-.059-.094-.094zM13 8c-.715 0-1.387.258-2 .688l2.031 4.78 2.063-4.75C14.46 8.255 13.742 8 13 8zm-3.5 2.281c-.785 1.23-1.324 2.88-1.469 4.719H11.5zm7.063.094L14.53 15h3.438c-.14-1.797-.649-3.402-1.407-4.625zM8.03 17c.14 1.797.649 3.402 1.406 4.625L11.47 17zm6.469 0l2 4.719c.785-1.23 1.324-2.88 1.469-4.719zm-1.531 1.531l-2.063 4.75c.633.465 1.352.719 2.094.719.715 0 1.387-.258 2-.688z" />
        </svg>
    )
}

export default SvgLemon
