import * as React from 'react'

function SvgWhatsapp(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path
                fillRule="evenodd"
                d="M24.504 7.504A11.875 11.875 0 0016.05 4C9.465 4 4.1 9.36 4.1 15.945a11.882 11.882 0 001.594 5.973L4 28.109l6.336-1.664a11.958 11.958 0 005.71 1.457h.005c6.586 0 11.945-5.359 11.949-11.949 0-3.191-1.242-6.191-3.496-8.45zM16.05 25.883h-.004a9.93 9.93 0 01-5.055-1.383l-.363-.215-3.762.985 1.004-3.665-.234-.375a9.904 9.904 0 01-1.52-5.285c0-5.472 4.457-9.925 9.938-9.925a9.863 9.863 0 017.02 2.91 9.875 9.875 0 012.905 7.023c0 5.477-4.457 9.93-9.93 9.93zm5.445-7.438c-.297-.148-1.766-.87-2.039-.968-.273-.102-.473-.149-.672.148-.2.3-.77.973-.945 1.172-.172.195-.348.223-.645.074-.3-.148-1.261-.465-2.402-1.484-.887-.79-1.488-1.77-1.66-2.067-.176-.3-.02-.46.129-.61.136-.132.3-.347.449-.523.148-.171.2-.296.3-.496.098-.199.048-.375-.027-.523-.074-.148-.671-1.621-.921-2.219-.243-.582-.489-.5-.672-.511-.172-.008-.371-.008-.57-.008-.2 0-.524.074-.798.375-.273.297-1.043 1.02-1.043 2.488 0 1.469 1.07 2.89 1.22 3.09.148.195 2.105 3.21 5.1 4.504.712.308 1.266.492 1.7.629.715.226 1.367.195 1.883.12.574-.085 1.765-.722 2.015-1.421.247-.695.247-1.293.172-1.418-.074-.125-.273-.2-.574-.352z"
            />
        </svg>
    )
}

export default SvgWhatsapp
