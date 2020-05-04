import * as React from 'react'

function SvgFlipboard(props) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M5 5v22h22V5H5zm2 2h18v18H7V7zm2 2v14h6v-4h4v-4h4V9H9zm2 2h10v2h-4v4h-4v4h-2V11z" />
    </svg>
  )
}

export default SvgFlipboard
