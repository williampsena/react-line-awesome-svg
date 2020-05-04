import * as React from 'react'

function SvgElementor(props) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M5 5v22h22V5H5zm2 2h18v18H7V7zm4 4v10h2V11h-2zm4 0v2h6v-2h-6zm0 4v2h6v-2h-6zm0 4v2h6v-2h-6z" />
    </svg>
  )
}

export default SvgElementor
