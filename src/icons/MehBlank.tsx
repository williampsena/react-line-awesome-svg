import * as React from 'react'

function SvgMehBlank(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16 9.935 5 16 5zm-4.5 7a1.5 1.5 0 000 3 1.5 1.5 0 000-3zm9 0a1.5 1.5 0 000 3 1.5 1.5 0 000-3z" />
    </svg>
  )
}

export default SvgMehBlank
