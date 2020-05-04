import * as React from 'react'

function SvgEbay(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M8.531 10v5.844C8.355 14.69 7.625 13 4.875 13 1.125 13 .98 15.879 1 16.625 1 16.625.812 20 4.781 20c2.938 0 3.469-1.563 3.563-2H6.75c-.121.285-.582 1.059-1.969 1.031-1.89-.035-2.199-1.613-2.25-2.031h6v3H10v-.906s.746.906 2.75.906c1.7 0 3.09-.898 3.5-2.563a4.15 4.15 0 00.125-.937c.04-2.281-1.707-3.488-3.594-3.5C10.895 12.988 10 14.281 10 14.281V10zm7.719 7.438c-.309 1.968 1.477 2.57 2.875 2.562 1.398-.008 2.281-.418 2.875-1.156V20h1.531v-4.344c-.039-.738-.148-2.523-3.406-2.656 0 0-3.113-.281-3.438 2h1.594s.13-1.031 1.75-1c1.532.031 1.977 1.09 1.969 2 0 0-1.5-.004-1.938 0-.789.004-3.406-.094-3.812 1.438zM22.531 13L26 19.469 24.656 22h1.688L31 13h-1.594l-2.562 5-2.563-5zM4.844 14C6.992 14 7 16 7 16H2.531s.156-2 2.313-2zm7.593 0c2.426-.063 2.344 2.5 2.344 2.5s.04 2.469-2.344 2.5c-2.382.031-2.343-2.531-2.343-2.531s-.082-2.407 2.344-2.469zm7.313 3c.219-.012.375 0 .375 0h1.719s.281 2.098-2.438 2.063c0 0-1.535.003-1.625-1.188 0-.664 1.313-.84 1.969-.875z" />
    </svg>
  )
}

export default SvgEbay
