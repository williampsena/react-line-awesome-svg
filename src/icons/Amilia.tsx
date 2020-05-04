import * as React from 'react'

function SvgAmilia(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M16.43 6c-2.763 0-5.733.281-8.086 2-.228.138-.407.41-.323.865.05.228.229 1.225.456 1.77.183.455.634.454.906.271C10.835 9.911 13.903 9 16.395 9c2.585 0 2.628 1.519 2.628 3.514v1.718c-3.902.504-10.25 1.544-11.656 2.133-1.585.728-1.355 3.834-1.355 4.65 0 1.267.679 4.985 5.576 4.985 2.134 0 5.85-.924 7.617-1.879v1.383c0 .134.096.364.274.404.138.045 1.913.09 2.324.09.41 0 2.79.013 2.968-.031.183-.045.229-.272.229-.406V12.07C24.996 8.485 22.416 6 16.43 6zm2.59 10.771v5.098c-.955.59-2.722 1.088-4.079 1.088-2.357 0-2.978-1.828-2.982-2.328 0-.545-.135-1.905.816-2.361 1.085-.59 4.249-1.314 6.245-1.497z" />
    </svg>
  )
}

export default SvgAmilia
