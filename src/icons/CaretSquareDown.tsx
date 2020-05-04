import * as React from 'react'

function SvgCaretSquareDown(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M5 5v22h22V5zm2 2h18v18H7zm3.719 5.781L9.28 14.22l6 6 .719.687.719-.687 6-6-1.438-1.438L16 18.062z" />
    </svg>
  )
}

export default SvgCaretSquareDown
