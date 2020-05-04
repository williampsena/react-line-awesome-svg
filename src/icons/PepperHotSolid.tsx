import * as React from 'react'

function SvgPepperHotSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M28 5V3c-1.988 0-3.54.555-4.605 1.64a4.786 4.786 0 00-1.141 1.93C21.746 6.22 21.156 6 20.5 6c-2.523 0-3.477 2.008-3.5 3.375 0 .219-.008.45-.023.688C16.305 12.05 15 10.733 15 8c-3.223 3.422.25 4.684-1.73 6.664-.422.422-1.43.586-2.06-.187-.831-.989.86-2.614-.741-3.829.293 1.829-1.117 1.45-1.594 1.059C8.254 11.199 7.125 10.082 9 7c-1.918.875-3.074 2.652-3 4 .2 3.535 5.664 6.605 3.457 8.668C8.344 20.711 6.157 19.301 7 17c-1.05.535-2.285 1.809-1.89 3.79C5.382 22.16 7.374 25.25 4 27l.043.012L3.957 29c.066.004.336.012.77.012 2.812 0 12.546-.434 18.539-6.172C26.406 19.832 28 15.848 28 11c0-1.383-.629-4-3-4-.293 0-.566.04-.824.102.113-.336.308-.72.644-1.063C25.5 5.352 26.566 5 28 5zm-3 4c.945 0 1 1.984 1 2 0 4.277-1.387 7.773-4.113 10.39-4.426 4.243-11.399 5.294-15.184 5.544.922-.211 2.031-.641 3.246-1.461 5.852-3.207 8.93-10.77 9.043-15.805H19v-.273C19.004 9.16 19.098 8 20.5 8c.855 0 1.5 1.215 1.5 2h2c0-.43.105-1 1-1z" />
        </svg>
    )
}

export default SvgPepperHotSolid
