import * as React from 'react'

function SvgPenAltSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M19.156 3c-.765.004-1.511.3-2.062.906-.008.008.008.024 0 .031-1.23 1.239-1.707 2.47-2.125 3.563-.18.473-.36.918-.594 1.375A2.477 2.477 0 0012.5 8a2.518 2.518 0 00-2.5 2.5c0 1.367 1.133 2.5 2.5 2.5.742 0 1.383-.352 1.844-.875l.062.063-9.125 9.093-.281.313v3.968l-1 1.032L5.406 28l1.032-1h3.968l.313-.281L27.28 10.125l.032-.031a2.968 2.968 0 000-4.188l-1.22-1.218A2.947 2.947 0 0024 3.813c-.715 0-1.41.277-1.969.78l-.718-.687A3.056 3.056 0 0019.155 3zm.032 2c.246.004.511.105.718.313l.688.687-6.125 6.094c1.355-1.438 1.953-2.774 2.375-3.875.43-1.125.699-1.95 1.656-2.906l.063-.063a.807.807 0 01.625-.25zM24 5.781c.234 0 .465.09.688.313l1.218 1.218c.446.446.446.93 0 1.375L25 9.563 22.437 7l.782-.781.093-.125c.223-.223.454-.313.688-.313zm-3 2.657L23.563 11 16 18.563 13.437 16zM12.5 10c.29 0 .5.21.5.5 0 .29-.21.5-.5.5-.29 0-.5-.21-.5-.5 0-.29.21-.5.5-.5zm-.5 7.438L14.563 20l-5 5H7v-2.563z" />
        </svg>
    )
}

export default SvgPenAltSolid
