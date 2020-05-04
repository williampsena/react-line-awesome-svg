import * as React from 'react'

function SvgUtensilsSolid(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M11 5C9.363 5 8.137 6.21 7.312 7.563 6.489 8.913 6 10.515 6 12c0 2.582 1.781 4.465 4 4.906V28h2V16.906c2.219-.441 4-2.324 4-4.906 0-1.484-.488-3.086-1.313-4.438C13.864 6.212 12.637 5 11 5zm7 0v7c0 1.852 1.281 3.398 3 3.844V28h2V15.844c1.719-.446 3-1.992 3-3.844V5h-2v7c0 1.117-.883 2-2 2s-2-.883-2-2V5zm3 0v7c0 .55.45 1 1 1s1-.45 1-1V5zM11 7c.574 0 1.344.566 1.969 1.594C13.594 9.62 14 10.996 14 12c0 2.004-1.25 3-3 3s-3-.996-3-3c0-1.004.406-2.379 1.031-3.406C9.656 7.566 10.426 7 11 7z" />
    </svg>
  )
}

export default SvgUtensilsSolid
