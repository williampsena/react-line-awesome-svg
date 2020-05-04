import * as React from 'react'

function SvgSteam(props) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11c-5.109 0-9.401-3.506-10.633-8.234l3.666 1.57A2.99 2.99 0 0012 23a3 3 0 003-3c0-.032-.009-.063-.01-.094l4.178-2.922A3.992 3.992 0 0023 13a4 4 0 00-4-4 3.99 3.99 0 00-3.982 3.832l-2.924 4.178c-.032-.001-.062-.01-.094-.01-.663 0-1.27.222-1.768.586l-5.199-2.229C5.37 9.592 10.152 5 16 5zm3 5a3 3 0 110 6 3 3 0 010-6zm0 1a2 2 0 000 4 2 2 0 000-4zm-7 7a2 2 0 11-1.816 2.828l.783.336a1.503 1.503 0 001.97-.787 1.5 1.5 0 00-.789-1.969l-.728-.312c.185-.057.377-.096.58-.096z" />
    </svg>
  )
}

export default SvgSteam
