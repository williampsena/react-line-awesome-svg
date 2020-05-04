import * as React from 'react'

function SvgReceiptSolid(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M7 5.375V13H3v14h26V13h-4V5.375l-3 1.5-2-1-2 1-2-1-2 1-2-1-2 1zm5 2.75l2 1 2-1 2 1 2-1 2 1 1-.5V17H9V8.625l1 .5zM5 15h2v4h18v-4h2v10H5zm4 6v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z" />
    </svg>
  )
}

export default SvgReceiptSolid
