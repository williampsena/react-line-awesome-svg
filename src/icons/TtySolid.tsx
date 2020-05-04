import * as React from 'react'

function SvgTtySolid(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M16 4c-3.895 0-7.191.715-9.406 1.375A5.033 5.033 0 003 10.188V13c0 1.094.906 2 2 2h4c1.094 0 2-.906 2-2v-2.625c.188-.086.227-.121.781-.281.91-.266 2.301-.531 4.219-.531 1.918 0 3.309.265 4.219.53.554.16.593.196.781.282V13c0 1.094.906 2 2 2h4c1.094 0 2-.906 2-2v-2.813a5.037 5.037 0 00-3.594-4.812A33.415 33.415 0 0016 4zm0 2c3.648 0 6.77.664 8.844 1.281A3.015 3.015 0 0127 10.188V13h-4V9.125l-.5-.281s-.637-.371-1.719-.688C19.7 7.84 18.11 7.562 16 7.562c-2.11 0-3.7.278-4.781.594-1.082.317-1.719.688-1.719.688l-.5.281V13H5v-2.813c0-1.34.863-2.523 2.156-2.906A31.497 31.497 0 0116 6zm-6 11a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm6 0a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm6 0a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm-12 6a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm6 0a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm6 0a1.999 1.999 0 100 4 1.999 1.999 0 100-4z" />
    </svg>
  )
}

export default SvgTtySolid
