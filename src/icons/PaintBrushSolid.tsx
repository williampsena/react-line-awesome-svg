import * as React from 'react'

function SvgPaintBrushSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M24.813 4.031c-.836 0-1.68.336-2.313.969L9.812 17.5l-.624.594c-.75.14-1.465.508-2.032 1.125-.832.91-.996 2.023-1.312 3.218-.317 1.196-.719 2.528-1.688 4l-1 1.563H5c3.914 0 6.496-1.871 7.813-3.188l.03-.03c.602-.618.938-1.395 1.063-2.188l.5-.469 12.688-12.5v-.031a3.254 3.254 0 000-4.594c-.633-.633-1.446-.969-2.282-.969zm0 1.969c.312 0 .609.14.875.406.535.535.535 1.246 0 1.782l-9.032 8.937-1.812-1.813 9.062-8.906c.266-.265.594-.406.907-.406zM13.405 16.719l1.813 1.812-1.5 1.469-1.813-1.813zM9.97 20.03c.504.016 1.05.211 1.469.594.777.71.796 1.953-.032 2.781-.867.867-2.406 1.985-4.656 2.407.48-1.051.816-2.032 1.031-2.844.332-1.254.578-2.114.844-2.407.348-.378.84-.546 1.344-.53z" />
        </svg>
    )
}

export default SvgPaintBrushSolid
