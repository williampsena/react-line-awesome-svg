import * as React from 'react'

function SvgItunes(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M10.049 5A5.042 5.042 0 005 10.049V21.95A5.042 5.042 0 0010.049 27H21.95A5.038 5.038 0 0027 21.951V10.05A5.042 5.042 0 0021.951 5H10.05zm5.931 2a9 9 0 11-.001 18.001A9 9 0 0115.98 7zm0 1.025A7.981 7.981 0 008 16.01C8 20.417 11.568 24 15.98 24a7.984 7.984 0 007.985-7.984c0-4.412-3.577-7.99-7.985-7.99zM19.316 11c.262-.018.414.138.414.4-.004 7.836.019 7.123-.046 7.407-.147.625-.62.974-1.254 1.093-.556.101-1.02.129-1.465-.23a1.119 1.119 0 01-.065-1.69c.386-.367.933-.44 1.746-.587.138-.023.257-.055.354-.17.147-.165.102.199.102-3.42 0-.257-.125-.328-.387-.282-.184.032-4.22.786-4.22.786-.23.05-.31.118-.31.38 0 5.333.024 4.8-.054 5.153a1.33 1.33 0 01-.684.898c-.38.211-1.074.305-1.441.24-.983-.183-1.328-1.318-.662-1.97.386-.367.933-.441 1.746-.588.138-.023.256-.055.353-.17.23-.262.042-5.543.12-5.85a.446.446 0 01.16-.293.698.698 0 01.308-.125c4.64-.873 5.203-.982 5.285-.982z" />
        </svg>
    )
}

export default SvgItunes
