import React, { FunctionComponent } from 'react'

type SvgProps = JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>

export interface LineAwesomeProps extends SvgProps {
  icon: FunctionComponent
}

export const LineAwesome: FunctionComponent<LineAwesomeProps> = ({
  icon: IconElement,
  ...props
}) => <IconElement {...props} />

export default LineIcon
