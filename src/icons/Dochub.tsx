import * as React from 'react'

function SvgDochub(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M19 3.586V12h8.414L19 3.586zM7 4v24h11c4.411 0 8-3.589 8-8v-6h-6v4.938A3.066 3.066 0 0116.937 22H13V10h4V4H7zm2 2h6v2h-4v16h5.938A5.068 5.068 0 0022 18.937V16h2v4c0 3.309-2.691 6-6 6H9V6zm12 2.414L22.586 10H21V8.414z" />
    </svg>
  )
}

export default SvgDochub
