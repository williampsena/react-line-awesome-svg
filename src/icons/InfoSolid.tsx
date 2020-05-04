import * as React from 'react'

function SvgInfoSolid(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M16 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 2c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2zm-5 7v5h2v5h-2v5h10v-5h-2V13zm2 2h4v10h2v1h-6v-1h2v-9h-2z" />
    </svg>
  )
}

export default SvgInfoSolid
