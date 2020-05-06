import * as React from 'react'

export function SvgCheeseSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M11.094 5.969l-.313.062c-6.469 1.438-7.75 7.782-7.75 7.782L3 13.905V26h26v-6h-1c-.566 0-1-.434-1-1 0-.566.434-1 1-1h1v-4.656l-.625-.281-17-7zm-.125 2.125L13.75 9.25c-.441.184-.75.441-.75.75 0 .55.895 1 2 1 .758 0 1.41-.219 1.75-.531L22.906 13H5.375c.602-1.48 2.094-4 5.594-4.906zM5 15h3.094a1.534 1.534 0 00-.094.5 1.5 1.5 0 003 0c0-.172-.04-.344-.094-.5H27v1.406c-1.11.442-2 1.336-2 2.594 0 1.258.89 2.152 2 2.594V24H14.719c.172-.293.281-.637.281-1a1.999 1.999 0 10-4 0c0 .363.11.707.281 1H5zm14.5 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
        </svg>
    )
}

export default SvgCheeseSolid
