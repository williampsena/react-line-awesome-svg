import React, { FunctionComponent } from 'react';
declare type SvgProps = JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>;
export interface LineAwesomeProps extends SvgProps {
    icon: FunctionComponent;
}
export declare const LineAwesome: FunctionComponent<LineAwesomeProps>;
export default LineIcon;
