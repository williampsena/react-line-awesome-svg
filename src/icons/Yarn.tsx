import * as React from 'react'

function SvgYarn(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13S23.2 3 16 3zm0 2c6.1 0 11 4.9 11 11s-4.9 11-11 11S5 22.1 5 16 9.9 5 16 5zm.209 4.045c-.45.076-.908 1.455-.908 1.455s-1.201-.2-2.201.8c-.2.2-.4.3-.7.4-.1.1-.2.1-.4.7-.4.9.6 2 .6 2-2.1 1.5-2 3.5-1.9 4-1.3 1.1-.8 2.5-.5 2.9.2.3.4.2.5.2 0 .1-.5.7 0 .9.5.3 1.3.4 1.7 0 .3-.3.4-.9.5-1.2.1-.1.1.2.5.4 0 0-.7.3-.4 1 .1.2.4.4 1 .4.2 0 2.6-.1 3.2-.3.4-.1.5-.3.5-.3 2.6-.7 3.1-1.8 4.9-2.2.6-.1.6-1.1-.5-1-.8 0-1.5.4-2.1.8-1 .6-1.7.7-1.7.6-.1-.1.4-1.3-.1-2.6-.5-1.4-1.4-1.8-1.3-1.9.3-.5 1-1.3 1.3-2.7.1-.9.1-2.4-.3-3.1-.1-.2-.7.2-.7.2s-.6-1.3-.8-1.4a.234.234 0 00-.191-.055z" />
        </svg>
    )
}

export default SvgYarn
