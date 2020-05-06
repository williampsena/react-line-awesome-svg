import * as React from 'react'

export function SvgSwift(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M8.938 5A3.951 3.951 0 005 8.938v14.124A3.951 3.951 0 008.938 27h14.124A3.951 3.951 0 0027 23.062V8.938A3.951 3.951 0 0023.062 5zm0 2h14.124C24.145 7 25 7.855 25 8.938v14.124A1.922 1.922 0 0123.062 25H8.938A1.922 1.922 0 017 23.062V8.938C7 7.856 7.855 7 8.938 7zm8.687 2.5s2.504 3.16 1.219 6.719c0 0-4.508-3.196-6.782-5.5 0 0 2.829 4.097 3.844 4.937 0 0-1.695-.902-5.625-4.25 0 0 4.535 5.895 6.656 7.125 0 0-3.226 2.192-7.937-.906 0 0 2.46 4.375 7.688 4.375 2.347 0 3.054-1.219 4.218-1.219 1.211 0 1.938 1.219 1.938 1.219.707-1.727-1.063-3.688-1.063-3.688s1.996-4.628-4.156-8.812z" />
        </svg>
    )
}

export default SvgSwift
