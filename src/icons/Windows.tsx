import * as React from 'react'

export function SvgWindows(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M27 5L5 7.992v16.016L27 27V5zm-2 2.29V15H15V8.65l10-1.36zM13 8.921V15H7V9.738l6-.816zM7 17h6v6.078l-6-.816V17zm8 0h10v7.71l-10-1.36V17z" />
        </svg>
    )
}

export default SvgWindows
