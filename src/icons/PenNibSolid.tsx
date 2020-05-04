import * as React from 'react'

function SvgPenNibSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M22 3.586l-4.521 4.521-6.74 1.928a4.061 4.061 0 00-2.802 2.65L3.86 25.274l1.434 1.434 1.434 1.434 12.593-4.08a4.057 4.057 0 002.64-2.788l1.929-6.748L28.414 10 22 3.586zm0 2.828L25.586 10 23 12.586 19.414 9 22 6.414zm-4.29 3.711l4.165 4.164-1.842 6.45a2.064 2.064 0 01-1.336 1.421L7.69 25.725l5.795-5.795A2 2 0 0014 20a2 2 0 000-4 2 2 0 00-1.93 2.516L6.275 24.31l3.563-11a2.072 2.072 0 011.437-1.348l6.436-1.838z" />
        </svg>
    )
}

export default SvgPenNibSolid
