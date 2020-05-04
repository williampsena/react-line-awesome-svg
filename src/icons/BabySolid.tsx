import * as React from 'react'

function SvgBabySolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M16 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 2c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2zm0 7c-6.668 0-9.906 6.563-9.906 6.563l1.812.875S9.301 15.715 12 14.125v6.094c-.406.144-.938.363-1.531.687-.54.293-1.09.672-1.563 1.188-.472.515-.879 1.207-.906 2.031-.047 1.559.832 2.96 1.625 4.125a22.49 22.49 0 001.594 2.063l1.5-1.375s-.73-.778-1.438-1.813c-.707-1.035-1.3-2.355-1.281-2.938.008-.242.121-.472.375-.75.254-.277.648-.554 1.063-.78a8.274 8.274 0 011.124-.5C13.13 22.913 14.235 24 16 24c1.738 0 2.828-1.055 3.406-1.813.301.114.664.266 1.032.47.417.226.816.507 1.062.78.246.274.344.508.344.75 0 .622-.617 1.903-1.313 2.907-.695 1.004-1.375 1.75-1.375 1.75l1.438 1.375s.808-.867 1.593-2c.786-1.133 1.657-2.496 1.657-4.032 0-.835-.403-1.57-.875-2.093-.473-.524-1.02-.89-1.563-1.188A10.428 10.428 0 0020 20.281v-6.156c2.7 1.59 4.094 4.313 4.094 4.313l1.812-.875S22.668 11 16 11zm0 2c.715 0 1.379.082 2 .25v7.438c-.11.207-.707 1.312-2 1.312-1.293 0-1.89-1.105-2-1.313V13.25a7.623 7.623 0 012-.25z" />
        </svg>
    )
}

export default SvgBabySolid
