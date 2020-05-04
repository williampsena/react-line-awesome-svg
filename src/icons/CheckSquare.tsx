import * as React from 'react'

function SvgCheckSquare(props) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M5 5v22h22V5zm2 2h18v18H7zm14.281 4.281L14 18.562l-3.281-3.28-1.438 1.437 4 4 .719.687.719-.687 8-8z" />
    </svg>
  )
}

export default SvgCheckSquare
