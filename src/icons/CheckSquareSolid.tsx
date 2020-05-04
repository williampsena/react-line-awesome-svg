import * as React from 'react'

function SvgCheckSquareSolid(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M4 4v24h24V12.187l-2 2V26H6V6h19.813l2-2zm23.281 3.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z" />
    </svg>
  )
}

export default SvgCheckSquareSolid
