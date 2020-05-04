import * as React from 'react'

function SvgOpera(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M15.969 4C9.672 4 5 8.945 5 15.906 5 22.191 9.46 28 15.969 28 22.527 28 27 22.191 27 15.906 27 8.883 22.21 4 15.969 4zm0 2C21.21 6 25 9.754 25 15.906 25 21.262 21.344 26 15.969 26 10.652 26 7 21.262 7 15.906 7 9.793 10.676 6 15.969 6zm0 .313c-1.043 0-1.996.406-2.656 1.062-.66.656-1.079 1.492-1.376 2.406-.597 1.832-.718 4.016-.718 5.938 0 1.761.066 4.008.625 5.937.277.965.672 1.88 1.344 2.594a3.822 3.822 0 002.78 1.188 3.844 3.844 0 002.782-1.188c.684-.71 1.09-1.629 1.375-2.594.574-1.93.656-4.156.656-5.937 0-2.067-.16-4.227-.781-6.031-.313-.903-.734-1.747-1.406-2.376-.672-.628-1.598-1-2.625-1zm0 2c.57 0 .906.148 1.25.468.343.32.664.832.906 1.531.484 1.403.656 3.442.656 5.407 0 1.719-.105 3.828-.562 5.375-.23.773-.547 1.406-.907 1.781-.359.375-.718.563-1.343.563-.61 0-.961-.188-1.313-.563-.351-.375-.683-1.004-.906-1.781-.45-1.555-.531-3.668-.531-5.375 0-1.828.156-3.867.625-5.313.234-.722.566-1.258.906-1.594.34-.335.664-.5 1.219-.5z" />
    </svg>
  )
}

export default SvgOpera
