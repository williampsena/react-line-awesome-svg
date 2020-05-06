import * as React from 'react'

export function SvgRadiationSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M9.16 3.889l-.877.646a13 13 0 00-5.23 9.385L2.965 15h7.973l.138-.838a4.962 4.962 0 011.631-2.918l.639-.556-4.186-6.8zm13.68 0l-4.186 6.798.639.557a4.959 4.959 0 011.63 2.918l.14.838h7.972l-.09-1.08a13 13 0 00-5.23-9.385l-.875-.646zM8.629 6.838l2.152 3.502A6.966 6.966 0 009.295 13H5.189a11.006 11.006 0 013.44-6.162zm14.742 0A11.012 11.012 0 0126.811 13h-4.108a6.966 6.966 0 00-1.486-2.66l2.154-3.502zM16 12c-1.654 0-3 1.348-3 3.004A3.002 3.002 0 0016 18c1.654 0 3-1.344 3-2.996A3.006 3.006 0 0016 12zm0 2a1 1 0 110 2 1 1 0 010-2zm-2.654 5.307l-4.174 6.802.965.493A12.799 12.799 0 0016 28c2.068 0 4.042-.47 5.863-1.398l.965-.493-4.176-6.802-.79.332c-1.143.48-2.583.48-3.725 0l-.791-.332zm.84 2.457a7.137 7.137 0 003.63 0l2.149 3.5c-2.51.978-5.418.978-7.928 0l2.149-3.5z" />
        </svg>
    )
}

export default SvgRadiationSolid
