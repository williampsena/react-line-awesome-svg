import * as React from 'react'

function SvgTrashSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M14 4c-.523 0-1.059.184-1.438.563C12.184 4.94 12 5.476 12 6v1H5v2h1.094L8 27.094l.094.906h15.812l.094-.906L25.906 9H27V7h-7V6c0-.523-.184-1.059-.563-1.438C19.06 4.184 18.523 4 18 4zm0 2h4v1h-4zM8.125 9h15.75l-1.781 17H9.906zM12 12v11h2V12zm3 0v11h2V12zm3 0v11h2V12z" />
        </svg>
    )
}

export default SvgTrashSolid
