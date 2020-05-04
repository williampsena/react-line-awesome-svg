import * as React from 'react'

function SvgPaintRollerSolid(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M5 4v8h18V4zm2 2h14v4H7zm17 1v2h1v4.25l-9.281 2.781-.719.219V19h-2v9h6v-9h-2v-1.25l9.281-2.781.719-.219V7zm-9 14h2v5h-2z" />
    </svg>
  )
}

export default SvgPaintRollerSolid
