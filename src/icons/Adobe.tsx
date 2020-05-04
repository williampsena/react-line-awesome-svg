import * as React from 'react'

function SvgAdobe(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M4 6v20l8.9-20H4zm15.1 0L28 26V6h-8.9zM16 13.4L12.1 22h4.097l1.6 4H21.6L16 13.4z" />
    </svg>
  )
}

export default SvgAdobe
