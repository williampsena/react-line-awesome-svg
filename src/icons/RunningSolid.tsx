import * as React from 'react'

function SvgRunningSolid(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M20.219 5a3.078 3.078 0 00-3.063 3.063 3.078 3.078 0 003.063 3.062c1.683 0 3.093-1.383 3.093-3.063 0-1.68-1.41-3.062-3.093-3.062zm0 2c.601 0 1.093.465 1.093 1.063 0 .597-.492 1.062-1.093 1.062-.598 0-1.063-.46-1.063-1.063 0-.597.465-1.062 1.063-1.062zm-7.282 2a2.16 2.16 0 00-1.312.656L8.25 13.312l1.5 1.376 3.344-3.657c.035-.035.082-.058.125-.031l1.594 1.063-2.344 3.25a2.603 2.603 0 00.281 3.343l3.531 3.532L13.375 28h2.25l2.469-4.906a2.002 2.002 0 00-.375-2.313l-3.532-3.531a.62.62 0 01-.062-.781l2.344-3.282.812.532 1.594 2.406c.371.555.988.875 1.656.875H25v-2h-4.469l-1.687-2.563-.125-.156-.157-.125-4.218-2.812A2.078 2.078 0 0012.938 9zm-.874 10.531L10.592 21H6v2h4.594c.527 0 1.031-.215 1.406-.594l1.469-1.468z" />
    </svg>
  )
}

export default SvgRunningSolid
