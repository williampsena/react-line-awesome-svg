import * as React from 'react'

export function SvgWix(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M22.05 9.95a4.757 4.757 0 00-.95.05l4 6-4 5.9s1.8.3 2.6-.5c.5-.5.8-1 2.5-3.4.3-.5.6 0 .6 0 1.5 2 1.9 2.8 2.6 3.4.9.7 2.6.5 2.6.5L28 16l3.9-6s-1.7-.3-2.5.5c-.6.6-1.2 1.4-2.6 3.5 0 0-.3.5-.6 0-1.4-2-2-2.9-2.6-3.5-.4-.4-1.024-.526-1.55-.55zM.42 9.99A3.062 3.062 0 000 10l3.2 12s1 0 1.5-.2c.7-.3 1-.6 1.4-2.2.4-1.4 1.4-5.7 1.5-6 .2-.7.5-.7.7 0 .1.3 1.1 4.5 1.5 6 .4 1.6.7 1.9 1.4 2.2.6.3 1.6.2 1.6.2L16 10c-1.1-.1-2.4.5-2.5 1.7l-1.7 6.4-1.4-5.2c-.3-1.5-1-2.3-2.3-2.3-1.3 0-1.9.7-2.3 2.3l-1.4 5.2-1.7-6.4c-.263-1.138-1.29-1.663-2.28-1.71zM19.6 10s-.8 0-1.3.2c-.6.3-.8.9-.8 2.4 0 0 .3-.3.8-.5 1.4-.5 1.3-1.5 1.3-2.1zm-.1 2v.076c.024-.043.03-.076 0-.076zm0 .076c-.056.101-.25.284-.6.424-.3.2-.6.3-.9.4-.7.3-.6.7-.6 1.7V22s.8.1 1.3-.2c.7-.3.8-.7.8-2.2v-7.524z" />
        </svg>
    )
}

export default SvgWix
