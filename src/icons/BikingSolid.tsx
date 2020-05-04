import * as React from 'react'

function SvgBikingSolid(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M19.5 5A3.514 3.514 0 0016 8.5c0 1.922 1.578 3.5 3.5 3.5S23 10.422 23 8.5 21.422 5 19.5 5zm0 2c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5S18 9.34 18 8.5 18.66 7 19.5 7zm-4.406 3.531c-.508.051-1 .301-1.344.719l-2.344 2.844c-.808.984-.457 2.539.688 3.094l3.437 1.687-.906 5 1.969.344 1.062-5.75.125-.75-.687-.344-4.157-2 2.376-2.875 4.062 3.281.281.219H25v-2h-4.656l-3.782-3.031a2.037 2.037 0 00-1.468-.438zM8.5 18C6.031 18 4 20.031 4 22.5S6.031 27 8.5 27s4.5-2.031 4.5-4.5S10.969 18 8.5 18zm15 0c-2.469 0-4.5 2.031-4.5 4.5s2.031 4.5 4.5 4.5 4.5-2.031 4.5-4.5-2.031-4.5-4.5-4.5zm-15 2c1.379 0 2.5 1.121 2.5 2.5S9.879 25 8.5 25A2.502 2.502 0 016 22.5C6 21.121 7.121 20 8.5 20zm15 0c1.379 0 2.5 1.121 2.5 2.5S24.879 25 23.5 25a2.502 2.502 0 01-2.5-2.5c0-1.379 1.121-2.5 2.5-2.5z" />
    </svg>
  )
}

export default SvgBikingSolid
