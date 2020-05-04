import * as React from 'react'

function SvgPauseSolid(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M10 6v20h2V6zm10 0v20h2V6z" />
    </svg>
  )
}

export default SvgPauseSolid
