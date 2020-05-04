import * as React from 'react'

function SvgSnowflakeSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M15 3v3.563L12.719 4.28 11.28 5.72 15 9.437v4.813l-4.125-2.469-1.313-5.094-1.937.5.813 3.125L5.374 8.47l-1.031 1.687 3.125 1.875-3.219.813.5 1.937 5.125-1.312L14.094 16l-4.219 2.531L4.75 17.22l-.5 1.937 3.219.813-3.125 1.875 1.031 1.687 3.063-1.843-.813 3.125 1.938.5 1.312-5.094L15 17.75v4.813l-3.719 3.718 1.438 1.438L15 25.437V29h2v-3.563l2.281 2.282 1.438-1.438L17 22.563V17.75l4.125 2.469 1.313 5.093 1.937-.5-.813-3.125 3.063 1.844 1.031-1.687-3.125-1.875 3.219-.813-.5-1.937-5.125 1.312L17.906 16l4.219-2.531 5.125 1.312.5-1.937-3.219-.813 3.125-1.875-1.031-1.687-3.063 1.844.813-3.126-1.938-.5-1.312 5.094L17 14.25V9.437l3.719-3.718L19.28 4.28 17 6.563V3z" />
        </svg>
    )
}

export default SvgSnowflakeSolid
