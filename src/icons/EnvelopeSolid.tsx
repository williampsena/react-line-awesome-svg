import * as React from 'react'

function SvgEnvelopeSolid(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M3 8v18h26V8zm4.313 2h17.375L16 15.781zM5 10.875l10.438 6.969.562.343.563-.343L27 10.875V24H5z" />
    </svg>
  )
}

export default SvgEnvelopeSolid
