import * as React from 'react'

export function SvgCampgroundSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M10.531 4.875l-.375.594S8.895 7.41 7.281 9.625c-1.613 2.215-3.648 4.723-4.843 5.563l-.5.343.062.594 1 9 .094.875H4c1.484 0 3.215.078 4.938.188L10 26.25V18h2v8.406l.906.094c2.828.25 4.969.5 4.969.5h.156l10.938-2.188.031-.78s.09-1.669.25-3.626c.16-1.957.422-4.258.688-5.093l.218-.688-.531-.406c-3.45-2.672-6.75-8.688-6.75-8.688l-.313-.625-.718.094s-6.426.887-10.657.031zM21.47 7.063c.41.761 2.433 4.378 5.343 7.25l-7.53 1.187c-2.466-2.367-4.977-6.11-6.345-8.281 3.872.398 7.692-.043 8.532-.157zm-10.532.812c1.313 2.113 4.067 6.262 6.97 9.031-.657 2.676-.856 6.242-.907 8-.668-.07-1.473-.168-3-.312V16H8v8.156a79.996 79.996 0 00-3.094-.125l-.843-7.687c1.613-1.313 3.34-3.469 4.843-5.532a72.156 72.156 0 002.031-2.937zm16.844 8.344c-.234 1.191-.414 2.597-.531 4-.129 1.582-.16 2.449-.188 2.968l-8.03 1.625c.05-1.761.234-5.093.75-7.343z" />
        </svg>
    )
}

export default SvgCampgroundSolid
