import * as React from 'react'

export function SvgInstagram(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M11.469 5C7.918 5 5 7.914 5 11.469v9.062C5 24.082 7.914 27 11.469 27h9.062C24.082 27 27 24.086 27 20.531V11.47C27 7.918 24.086 5 20.531 5zm0 2h9.062A4.463 4.463 0 0125 11.469v9.062A4.463 4.463 0 0120.531 25H11.47A4.463 4.463 0 017 20.531V11.47A4.463 4.463 0 0111.469 7zm10.437 2.188a.902.902 0 00-.906.906c0 .504.402.906.906.906a.902.902 0 00.907-.906.902.902 0 00-.907-.906zM16 10c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4-4-1.777-4-4 1.777-4 4-4z" />
        </svg>
    )
}

export default SvgInstagram
