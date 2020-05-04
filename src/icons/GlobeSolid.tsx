import * as React from 'react'

function SvgGlobeSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4zm0 2c1.969 0 3.797.586 5.344 1.563l-.813.093.188 2-1.063-.469-.875.75.157 2.063 2.156-.688 2.687.876-.687 1.25-1.625-1-1.75.25L18 13.967l-.969 3 1.938 1.595s1.988-.344 2.093-.344c.106 0 .844 1.812.844 1.812l-1.593 5c-1.301.621-2.77.969-4.313.969-.316 0-.629-.035-.938-.063l-1.093-1.906 1.062-4L11 17H7.281l-.968-1.969L9 12.906 13 11l-.594-2.656 1.719-.375.813 1.125 3-.563-.532-2.312-2.218-.157C15.453 6.043 15.726 6 16 6zm-1.125.063l-1.563.656-.75-.125a9.867 9.867 0 012.313-.532zM6.062 16.78l.97 1.125v2.063l1.874 2.062h1.156l2.844 3.5c-3.773-1.222-6.527-4.64-6.844-8.75z" />
        </svg>
    )
}

export default SvgGlobeSolid
