import * as React from 'react'

function SvgAnkhSolid(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M16 2c-2.75 0-5 2.25-5 5 0 1.957 1.113 3.875 2.156 5.438.133.203.274.374.406.562H8v3.156L9.156 16l5.75-.813L14 28.938 13.937 30h4.126L18 28.937l-.906-13.75 5.75.813 1.156.156V13h-5.563c.133-.188.274-.36.407-.563C19.887 10.876 21 8.957 21 7c0-2.75-2.25-5-5-5zm0 2c1.668 0 3 1.332 3 3 0 1.078-.887 2.914-1.844 4.344-.582.875-.789 1.086-1.156 1.531-.367-.445-.574-.656-1.156-1.531C13.887 9.914 13 8.078 13 7c0-1.668 1.332-3 3-3z" />
    </svg>
  )
}

export default SvgAnkhSolid
