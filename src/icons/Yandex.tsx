import * as React from 'react'

export function SvgYandex(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M19.663 4H16.17C12.738 4 10 6.72 10 12c0 3.168 1.237 5.504 3.749 6.656l-4.688 8.832c-.153.289 0 .512.245.512h2.175c.184 0 .307-.064.368-.223L16.25 19h1.25l-.008 8.777c0 .096.092.223.214.223h2.049c.184 0 .245-.096.245-.255V4.32c0-.224-.123-.32-.337-.32zM17.5 17H16c-1.5 0-3.5-1.16-3.5-5 0-4.001 1.631-6 3.5-6h1.5v11z" />
        </svg>
    )
}

export default SvgYandex
