import * as React from 'react'

function SvgImagesSolid(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M2 5v18h4v4h24V9h-4V5zm2 2h20v14H4zm2 2v10h16V9zm2 2h12v6H8zm18 0h2v14H8v-2h18z" />
    </svg>
  )
}

export default SvgImagesSolid
