import * as React from 'react'

function SvgUber(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13S23.2 3 16 3zm0 2c6.1 0 11 4.9 11 11s-4.9 11-11 11A10.96 10.96 0 015.05 17H13v2h6v-6h-6v2H5.05A10.96 10.96 0 0116 5z" />
        </svg>
    )
}

export default SvgUber
