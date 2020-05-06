import * as React from 'react'

export function SvgSatelliteSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M8.875 3.594l-.719.687-3.844 3.875-.718.719.719.688 5.75 5.78-.657.657L16 22.594l.656-.657 5.75 5.782.719.687.719-.687 3.875-3.907.718-.687-6.78-6.781c.616-1.66.265-3.61-1.063-4.938-.907-.906-2.117-1.344-3.313-1.344-.554 0-1.101.122-1.625.313L9.594 4.281zm0 2.812l5.063 5.063-2.47 2.469-5.062-5.063zm8.406 5.625c.68 0 1.383.258 1.907.781a2.669 2.669 0 010 3.782l-2.907 2.875-.281.281L12.25 16l3.031-3.031.125-.156c.07-.07.145-.126.219-.188l.188-.156c.44-.293.96-.438 1.468-.438zM8.438 17L7 18.406 13.594 25 15 23.562zm12.093 1.063l5.063 5.062-2.469 2.469-5.063-5.063z" />
        </svg>
    )
}

export default SvgSatelliteSolid
