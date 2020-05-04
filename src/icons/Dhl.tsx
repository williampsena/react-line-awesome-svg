import * as React from 'react'

function SvgDhl(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5.63 13l-1.02 1.39h5.57c.28 0 .274.11.134.296-.14.19-.373.519-.513.709-.07.1-.207.275.228.275h2.282s.363-.5.673-.92c.42-.57.036-1.75-1.459-1.75H5.631zm9.604 0l-1.964 2.67h7.18L22.413 13H19.48l-1.125 1.53h-1.31L18.17 13h-2.936zm8.141 0l-1.965 2.67h3.11L26.484 13h-3.109zm-17.13 1.74l-2.056 2.79h5.006c1.655 0 2.575-1.124 2.86-1.514h-3.41c-.435 0-.3-.18-.23-.276.14-.19.38-.52.52-.705.14-.185.14-.295-.14-.295h-2.55zM0 16.016v.32h4.53l.236-.32H0zm13.016 0l-1.116 1.51h2.936l1.113-1.51h-2.933zm4.25 0c-.005 0-1.116 1.51-1.116 1.51h2.936l1.113-1.51h-2.933zm3.888 0s-.213.293-.318.433c-.37.5-.047 1.08 1.158 1.08h4.717l1.113-1.513h-6.67zm7.211 0l-.234.32H32v-.32h-3.635zM0 16.609v.32h4.09l.234-.32H0zm27.926 0l-.237.32H32v-.32h-4.074zM0 17.205v.32h3.654l.237-.32H0zm27.484.006l-.234.318H32v-.318h-4.516z" />
        </svg>
    )
}

export default SvgDhl
