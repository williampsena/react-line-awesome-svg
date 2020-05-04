import * as React from 'react'

function SvgReddit(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M18.656 4C16.56 4 15 5.707 15 7.656v3.375c-2.758.145-5.258.875-7.281 2.031C6.945 12.316 5.914 12 4.906 12c-1.09 0-2.199.355-2.968 1.219v.031l-.032.031c-.738.922-1.039 2.153-.843 3.375a4.444 4.444 0 001.968 3C3.023 19.77 3 19.883 3 20c0 2.605 1.574 4.887 3.938 6.469C9.3 28.05 12.488 29 16 29c3.512 0 6.7-.95 9.063-2.531C27.425 24.887 29 22.605 29 20c0-.117-.023-.23-.031-.344a4.444 4.444 0 001.968-3c.196-1.222-.105-2.453-.843-3.375l-.032-.031c-.769-.863-1.878-1.25-2.968-1.25-1.008 0-2.04.316-2.813 1.063-2.023-1.157-4.523-1.887-7.281-2.032V7.656C17 6.676 17.559 6 18.656 6c.52 0 1.164.246 2.157.594.843.297 1.937.625 3.343.718C24.496 8.29 25.414 9 26.5 9 27.875 9 29 7.875 29 6.5S27.875 4 26.5 4c-.945 0-1.762.535-2.188 1.313-1.199-.07-2.066-.32-2.843-.594C20.566 4.402 19.734 4 18.656 4zM16 13c3.152 0 5.965.867 7.938 2.188C25.91 16.508 27 18.203 27 20c0 1.797-1.09 3.492-3.063 4.813C21.965 26.133 19.152 27 16 27s-5.965-.867-7.938-2.188C6.09 23.492 5 21.797 5 20c0-1.797 1.09-3.492 3.063-4.813C10.034 13.867 12.848 13 16 13zM4.906 14c.38 0 .754.094 1.063.25-1.086.91-1.93 1.992-2.438 3.188a2.356 2.356 0 01-.469-1.094c-.109-.672.086-1.367.407-1.782.004-.007-.004-.023 0-.03.304-.321.844-.532 1.437-.532zm22.188 0c.593 0 1.133.21 1.437.531.004.004-.004.028 0 .031.32.415.516 1.11.407 1.782-.063.39-.215.773-.47 1.093-.507-1.195-1.35-2.277-2.437-3.187.309-.156.684-.25 1.063-.25zM11 16a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm10 0a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm.25 5.531c-1.148 1.067-3.078 1.75-5.25 1.75s-4.102-.691-5.25-1.625C11.39 23.391 13.445 25 16 25s4.61-1.602 5.25-3.469z" />
        </svg>
    )
}

export default SvgReddit
