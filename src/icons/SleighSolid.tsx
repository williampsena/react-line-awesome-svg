import * as React from 'react'

function SvgSleighSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M4.5 7A2.518 2.518 0 002 9.5v.5h2v-.5c0-.285.215-.5.5-.5.258 0 .5.273.5.5 0 .203-.34.832-.875 1.813C3.59 12.293 3 13.652 3 15.5c0 2.852 2.21 5.215 5 5.469V23H3v2h24c1.645 0 3-1.355 3-3s-1.355-3-3-3v2c.566 0 1 .434 1 1 0 .566-.434 1-1 1h-5v-2.219c2.297-.66 4-2.781 4-5.281V13c0-.566.434-1 1-1 .566 0 1 .434 1 1h2c0-1.645-1.355-3-3-3s-3 1.355-3 3c0 1.27-.45 1.55-.938 1.781-.488.23-1 .219-1 .219H17c-1.14 0-1.457-.422-1.719-.938C15.02 13.547 15 13 15 13v-1c0-2.281-1.305-3.71-2.531-4.344C11.242 7.023 10.03 7 10.03 7zm2.438 2H10c.027 0 .773.047 1.531.438C12.305 9.835 13 10.405 13 12v1s0 .953.5 1.938C14 15.921 15.184 17 17 17h5c.05.004.867.043 1.781-.344A3.468 3.468 0 0120.5 19h-12C6.57 19 5 17.43 5 15.5c0-1.445.41-2.398.875-3.25C6.34 11.398 7 10.672 7 9.5c0-.168-.031-.34-.063-.5zM10 21h10v2H10z" />
        </svg>
    )
}

export default SvgSleighSolid
