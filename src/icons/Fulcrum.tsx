import * as React from 'react'

function SvgFulcrum(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M15 0l-1.28 12.2L10.1 16l3.62 3.8L15 32V19l-3-3 3-3V0zm2 0v13l3 3-3 3v13l1.28-12.2L21.9 16l-3.62-3.8L17 0zM9.5 7L7 10l2.5 3 2.5-3-2.5-3zm13 0L20 10l2.5 3 2.5-3-2.5-3z" />
    </svg>
  )
}

export default SvgFulcrum
