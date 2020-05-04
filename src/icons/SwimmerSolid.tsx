import * as React from 'react'

function SvgSwimmerSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M23.5 11a3.514 3.514 0 00-3.5 3.5c0 1.922 1.578 3.5 3.5 3.5s3.5-1.578 3.5-3.5-1.578-3.5-3.5-3.5zm-9.781.031a1.945 1.945 0 00-1.031.375l-5.282 3.781 1.188 1.626 5.25-3.782 2.281 2.625-7.406 6.281c.406.036.84.063 1.281.063.676 0 1.324-.07 1.969-.188l5.437-4.656 2.032 2.344a15.492 15.492 0 012.28-.438l-6.374-7.343a1.949 1.949 0 00-1.625-.688zM23.5 13c.84 0 1.5.66 1.5 1.5 0 .844-.66 1.5-1.5 1.5a1.48 1.48 0 01-1.5-1.5c0-.84.656-1.5 1.5-1.5zm-.5 7c-2.438 0-4.574.816-6.656 1.563C14.262 22.308 12.234 23 10 23c-5.496 0-8.313-2.719-8.313-2.719L.313 21.72S3.817 25 10 25c2.645 0 4.906-.809 7-1.563C19.094 22.684 21.016 22 23 22c3.969 0 7.344 2.781 7.344 2.781l1.312-1.562S27.875 20 23 20z" />
        </svg>
    )
}

export default SvgSwimmerSolid
