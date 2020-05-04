import * as React from 'react'

function SvgFirstdraft(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M7 4v18h6v-6h6v-6h6V4H7zm14 8v6h-6v6H7v1h9v-6h6v-6h3v-1h-4zm3 3v6h-6v6h-8v1h9v-6h6v-7h-1zm-3 9v4h1v-3h3v-1h-4z" />
    </svg>
  )
}

export default SvgFirstdraft
