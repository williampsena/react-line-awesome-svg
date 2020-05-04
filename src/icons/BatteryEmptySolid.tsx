import * as React from 'react'

function SvgBatteryEmptySolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M3 8v16h24v-5h2v-6h-2V8zm2 2h20v12H5z" />
        </svg>
    )
}

export default SvgBatteryEmptySolid
