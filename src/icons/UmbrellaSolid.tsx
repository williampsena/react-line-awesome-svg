import * as React from 'react'

function SvgUmbrellaSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M15 4v2.063c-6.012.503-10.746 5.406-10.969 10.562-.004.125-.031.25-.031.375h2c0-.078.09-.277.531-.531C6.973 16.215 7.688 16 8.5 16c.813 0 1.527.215 1.969.469.441.254.531.453.531.531h2c0-.012.082-.262.625-.531.543-.27 1.406-.469 2.375-.469.969 0 1.832.2 2.375.469.543.27.625.52.625.531h2c0-.078.09-.277.531-.531.442-.254 1.157-.469 1.969-.469.813 0 1.527.215 1.969.469.441.254.531.453.531.531h2a2.35 2.35 0 00-.031-.375C27.746 11.469 23.012 6.566 17 6.062V4zm1 4c4.348 0 8.063 2.953 9.438 6.281A6.56 6.56 0 0023.5 14c-1.121 0-2.145.25-2.969.719-.199.113-.386.258-.562.406a4.542 4.542 0 00-.688-.438C18.375 14.235 17.238 14 16 14s-2.375.234-3.281.688c-.235.117-.45.277-.656.437-.008-.004-.024.004-.032 0a3.809 3.809 0 00-.562-.406C10.645 14.25 9.62 14 8.5 14a6.56 6.56 0 00-1.938.281C7.938 10.953 11.652 8 16 8zm-1 9v8c0 .566-.434 1-1 1-.566 0-1-.434-1-1v-1h-2v1c0 1.645 1.355 3 3 3s3-1.355 3-3v-8z" />
        </svg>
    )
}

export default SvgUmbrellaSolid
