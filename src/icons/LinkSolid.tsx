import * as React from 'react'

function SvgLinkSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M21.75 4c-1.672 0-3.258.66-4.438 1.844l-1.468 1.468A6.252 6.252 0 0014 11.75c0 .793.152 1.566.438 2.281l1.624-1.625A4.285 4.285 0 0117.25 8.72l1.469-1.469A4.28 4.28 0 0121.75 6c1.137 0 2.195.445 3 1.25a4.274 4.274 0 010 6.031l-1.469 1.469A4.28 4.28 0 0120.25 16c-.223 0-.441-.023-.656-.063l-1.625 1.626A6.156 6.156 0 0020.25 18c1.672 0 3.258-.66 4.438-1.844l1.468-1.468A6.252 6.252 0 0028 10.25c0-1.672-.66-3.223-1.844-4.406A6.173 6.173 0 0021.75 4zm-2.469 7.281l-8 8 1.438 1.438 8-8zM11.75 14c-1.672 0-3.258.66-4.438 1.844l-1.468 1.469A6.252 6.252 0 004 21.75c0 1.672.66 3.223 1.844 4.406A6.173 6.173 0 0010.25 28c1.672 0 3.258-.66 4.438-1.844l1.468-1.468A6.252 6.252 0 0018 20.25c0-.793-.152-1.566-.438-2.281l-1.625 1.625a4.285 4.285 0 01-1.187 3.687l-1.469 1.469A4.28 4.28 0 0110.25 26a4.208 4.208 0 01-3-1.25 4.274 4.274 0 010-6.031l1.469-1.469A4.28 4.28 0 0111.75 16c.223 0 .441.023.656.063l1.625-1.625A6.156 6.156 0 0011.75 14z" />
        </svg>
    )
}

export default SvgLinkSolid
