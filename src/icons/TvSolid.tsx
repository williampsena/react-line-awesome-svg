import * as React from 'react'

function SvgTvSolid(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M2 7v16h28V7zm2 2h24v12H4zm6 15v2h12v-2z" />
    </svg>
  )
}

export default SvgTvSolid
