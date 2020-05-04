import * as React from 'react'

function SvgDesktopSolid(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M2 6v18h13v2h-5v2h12v-2h-5v-2h13V6zm2 2h24v14H4z" />
    </svg>
  )
}

export default SvgDesktopSolid
