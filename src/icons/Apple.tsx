import * as React from 'react'

export function SvgApple(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M20.844 2c-1.64 0-3.297.852-4.407 2.156v.032c-.789.98-1.644 2.527-1.375 4.312-.128-.05-.136-.035-.28-.094-.692-.281-1.548-.594-2.563-.594-3.98 0-7 3.606-7 8.344 0 3.067 1.031 5.942 2.406 8.094.688 1.078 1.469 1.965 2.281 2.625.813.66 1.664 1.125 2.625 1.125.961 0 1.68-.324 2.219-.563.54-.238.957-.437 1.75-.437.715 0 1.078.195 1.625.438.547.242 1.293.562 2.281.562 1.07 0 1.98-.523 2.719-1.188.738-.664 1.36-1.519 1.875-2.343.516-.824.922-1.633 1.219-2.282.148-.324.258-.593.343-.812.086-.219.13-.281.188-.531l.188-.813-.75-.343a5.33 5.33 0 01-1.5-1.063c-.625-.637-1.157-1.508-1.157-2.844A4.08 4.08 0 0124.563 13c.265-.309.542-.563.75-.719.105-.078.187-.117.25-.156.062-.04.05-.027.156-.094l.843-.531-.562-.844c-1.633-2.511-4.246-2.844-5.281-2.844-.48 0-.82.168-1.25.25.242-.226.554-.367.75-.624.004-.004-.004-.028 0-.032.011-.011.023-.02.031-.031h.031a6.16 6.16 0 001.563-4.438L21.78 2zm-1.188 2.313c-.172.66-.453 1.289-.906 1.78l-.063.063c-.382.516-.972.899-1.562 1.125.164-.652.45-1.312.844-1.812.008-.012.023-.02.031-.032.438-.5 1.043-.875 1.656-1.125zm-7.437 5.5c.558 0 1.172.21 1.812.468.64.258 1.239.594 2.094.594.852 0 1.496-.336 2.25-.594.754-.258 1.559-.469 2.344-.469.523 0 1.816.333 2.906 1.344-.191.172-.36.297-.563.531a6.21 6.21 0 00-1.53 4.094c0 1.906.831 3.34 1.718 4.25.55.563.89.696 1.313.938-.055.125-.086.222-.157.375-.27.586-.64 1.336-1.093 2.062-.454.727-1.004 1.434-1.532 1.907-.527.472-1 .687-1.375.687-.566 0-.898-.156-1.468-.406S17.581 25 16.5 25c-1.137 0-1.977.336-2.563.594-.585.258-.89.406-1.406.406-.246 0-.777-.2-1.375-.688-.597-.488-1.254-1.23-1.844-2.156-1.183-1.851-2.093-4.394-2.093-7 0-3.941 2.199-6.343 5-6.343z" />
        </svg>
    )
}

export default SvgApple
