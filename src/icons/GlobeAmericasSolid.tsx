import * as React from 'react'

function SvgGlobeAmericasSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c.338 0 .67.02 1 .05V6h2v-.574a11.03 11.03 0 016 4.27V13l1 2v1h1c0 .366-.02.729-.055 1.086-.009.096-.029.188-.04.283-.034.263-.068.524-.12.781-.019.096-.044.19-.066.286-.058.254-.12.506-.196.753-.026.085-.056.168-.084.252a10.88 10.88 0 01-.275.752c-.03.072-.063.142-.094.213-.112.255-.23.506-.36.75-.03.06-.064.117-.097.174a11.015 11.015 0 01-1.076 1.592l-.09.111c-.194.233-.4.456-.611.672-.031.031-.06.065-.092.096a10.99 10.99 0 01-.678.617c-.033.028-.061.057-.095.084-.234.192-.48.37-.729.543-.039.027-.074.058-.113.084-.24.16-.488.307-.74.45a10.913 10.913 0 01-3.871 1.302l4.011-3.024 1.1-1.1L24 20v-1l-2-1h-1l-2-2h-2l-1 1v1l-1 1v2l2 1.6-1.977 4.351C9.414 26.453 5 21.735 5 16c0-3.408 1.559-6.459 4-8.479V8L8 9v2.2L9 15l5 2h1v-1l-3-1v-2h3l1-2.5L18 9V8l-3-2-1.438-.719A10.999 10.999 0 0116 5zm-1 9v1h2v-1h-2z" />
        </svg>
    )
}

export default SvgGlobeAmericasSolid
