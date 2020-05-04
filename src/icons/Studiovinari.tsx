import * as React from 'react'

function SvgStudiovinari(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M3.59 3l5.144 5.484L3 7.564l8.328 6.243-4.158.533L16 17l-1 1 6.57-1.213-.752 3.475-2.882 2.615-4.485 2.295-1.05-.656-.35.279L11 28.533l.328-.07 1.158-1.424 2.84-1.867 4.697-1.326-3.386 1.96s-.926-.036-1.032-.036c-.106 0-.986 3.23-.986 3.23l.486-.203.391-.61.9-1.244 4.016-1.92 2.85-3.427 2.021-3.98 1.276-2.239v-1.424l-.213-1.422-.534-1.213.524-1.025.664-.377-.432-.611.356-.315-.584-.213-1.485-1.254-1.92.528-.212 1.92 1.066.834-.61.45-5.484-4.894 2.18 2.834L10 3l2.305 4.281 2.517.918-.949-1.949 7.277 5.027-6.318-3.779 1.602 1.932L3.59 3z" />
        </svg>
    )
}

export default SvgStudiovinari
