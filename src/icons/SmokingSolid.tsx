import * as React from 'react'

export function SvgSmokingSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M16.031 4c-.36.36-.625.785-.937 1.469-.313.683-.59 1.543-.594 2.5-.004.957.328 2.05 1.188 2.875.859.824 2.171 1.36 4 1.594 1.523.195 2.503.445 3.062.78.559.337.79.68.969 1.5l1.968-.437c-.257-1.18-.91-2.183-1.906-2.781-.996-.598-2.215-.855-3.843-1.063-1.56-.199-2.43-.636-2.875-1.062-.446-.426-.563-.863-.563-1.406 0-.543.176-1.153.406-1.657.23-.503.586-.96.532-.906zm5.532.313v2c.62 0 1.421.093 2.03.437.61.344 1.126.852 1.25 2.313l.095.937h.906c.515 0 1.59.16 2.125.625.265.234.437.508.5 1.031.062.524-.032 1.324-.5 2.469l1.875.75c.558-1.36.742-2.488.625-3.469a3.578 3.578 0 00-1.188-2.281c-.902-.79-1.883-.992-2.687-1.063-.348-1.445-1.07-2.535-2-3.062-1.121-.637-2.29-.688-3.032-.688zM1 16v6h30v-6zm2 2h20v2H3zm22 0h1v2h-1zm3 0h1v2h-1z" />
        </svg>
    )
}

export default SvgSmokingSolid
