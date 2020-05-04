import * as React from 'react'

function SvgBlenderSolid(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M8 5C6.346 5 5 6.346 5 8v5c0 1.654 1.346 3 3 3h3.242l.627 5.014A2.997 2.997 0 009 24v3h17v-3c0-1.568-1.214-2.844-2.748-2.975L26.957 5H8zm0 2h2.117l.875 7H8c-.551 0-1-.449-1-1V8c0-.551.449-1 1-1zm4.133 0H24.44l-.462 2H19v2h4.518l-.463 2H19v2h3.592l-.463 2H19v2h2.668l-.463 2h-7.322l-1.75-14zM12 23h11c.551 0 1 .449 1 1v1H11v-1c0-.551.449-1 1-1z" />
    </svg>
  )
}

export default SvgBlenderSolid
