import * as React from 'react'

function SvgGg(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M12 6.594l-.719.687-8 8-.687.719.687.719 8 8 .719.687.719-.687 4-4 .687-.719-.687-.719-5-5-1.438 1.438L14.562 20 12 22.563 5.437 16 12 9.437l1.281 1.282L14.72 9.28l-2-2zm8 0l-.719.687-4 4-.687.719.687.719 5 5 1.438-1.438L17.437 12 20 9.437 26.563 16 20 22.563l-1.281-1.282-1.438 1.438 2 2 .719.687.719-.687 8-8 .687-.719-.687-.719-8-8z" />
        </svg>
    )
}

export default SvgGg
