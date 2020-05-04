import * as React from 'react'

function SvgArrowCircleLeftSolid(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16 9.914 5 16 5zm-.719 4.594L8.875 16l6.406 6.406L16.72 21l-4-4H23v-2H12.719l4-4z" />
    </svg>
  )
}

export default SvgArrowCircleLeftSolid
