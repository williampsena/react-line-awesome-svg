import * as React from 'react'

function SvgArchiveSolid(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M4 5v6h1v16h22V11h1V5zm2 2h20v2H6zm1 4h18v14H7zm5.813 2c-.551.05-.958.543-.907 1.094.051.55.543.957 1.094.906h6c.36.004.695-.184.879-.496a1.01 1.01 0 000-1.008c-.184-.312-.52-.5-.879-.496H12.812z" />
    </svg>
  )
}

export default SvgArchiveSolid
