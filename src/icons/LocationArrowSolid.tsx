import * as React from 'react'

function SvgLocationArrowSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M16 4.438l-.906 2.187-8 19-.907 2.125 2.157-.813L16 24.063l7.656 2.875 2.157.813-.907-2.125-8-19zm0 5.093l6.188 14.719-5.844-2.188-.344-.125-.344.125-5.844 2.188z" />
        </svg>
    )
}

export default SvgLocationArrowSolid
