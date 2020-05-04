import * as React from 'react'

function SvgClipboard(props) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M16 3c-1.258 0-2.152.89-2.594 2H6v23h20V5h-7.406C18.152 3.89 17.258 3 16 3zm0 2c.555 0 1 .445 1 1v1h3v2h-8V7h3V6c0-.555.445-1 1-1zM8 7h2v4h12V7h2v19H8z" />
    </svg>
  )
}

export default SvgClipboard
