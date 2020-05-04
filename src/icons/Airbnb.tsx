import * as React from 'react'

function SvgAirbnb(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M16.02 4c-1.22 0-2.35.536-3.198 1.53-.364.448-.626.924-.855 1.341l-.045.09c-.163.327-.335.667-.531 1.041l-.043.096a268.968 268.968 0 00-5.12 10.662l-.095.207c-.065.14-.13.286-.186.416l-.082.178c-.06.132-.12.265-.17.384-.117.266-.235.543-.363.883-.313.927-.402 1.768-.281 2.658.27 1.837 1.488 3.415 3.18 4.12a5.128 5.128 0 001.99.394c.153 0 .381-.012.636-.047a6.382 6.382 0 002.405-.832c.88-.496 1.744-1.21 2.705-2.236l.039.052.015-.021c.9.962 1.77 1.685 2.655 2.197.768.45 1.581.731 2.4.836a4.848 4.848 0 002.637-.353v.002c1.674-.672 2.887-2.218 3.178-4.047l.029-.164c.158-.78.08-1.61-.233-2.53a2.82 2.82 0 00-.119-.294 9.754 9.754 0 00-.228-.555c-.06-.148-.125-.287-.188-.422l-.158-.357c-.053-.12-.102-.239-.158-.356l-.065-.125a262.574 262.574 0 00-5.087-10.596l-.084-.168c-.184-.34-.37-.71-.565-1.109l-.056-.11c-.205-.37-.416-.751-.733-1.13l-.047-.06C18.407 4.557 17.278 4 16.02 4zm-.028 2.021a1.996 1.996 0 011.582.727l.106.133c.21.24.358.51.525.806l.06.131c.186.37.38.76.561 1.092l.072.147c1.721 3.382 3.42 6.92 5.04 10.49l.142.316.012.012.066.15.18.403c.048.105.097.211.16.363.062.141.132.298.219.527.026.06.055.121.076.182l.002.006c.209.61.254 1.103.15 1.547l-.025.148a3.269 3.269 0 01-2.016 2.57 2.884 2.884 0 01-1.558.196 4.393 4.393 0 01-1.666-.582c-.787-.456-1.583-1.14-2.432-2.086l.064-.084c1.368-1.786 2.224-3.419 2.543-4.852l.002-.008c.154-.71.184-1.378.092-1.97a3.939 3.939 0 00-.605-1.625C18.649 13.658 17.4 13 16 13c-1.342 0-2.58.638-3.313 1.707l-.054.092a3.92 3.92 0 00-.578 1.562 5.235 5.235 0 00.086 1.98c.307 1.446 1.19 3.135 2.548 4.884l.041.052-.001.002c-.91 1.004-1.687 1.67-2.463 2.108a4.431 4.431 0 01-1.676.584c-.152.022-.282.029-.37.029-.433 0-.824-.077-1.224-.242a3.29 3.29 0 01-1.965-2.553c-.078-.569-.016-1.103.186-1.701.102-.272.206-.517.316-.766.05-.117.103-.232.154-.347l.092-.207c.056-.13.114-.257.172-.383l.121-.27A269.818 269.818 0 0113.15 8.967l.034-.078c.177-.337.355-.692.525-1.032l.025-.052c.182-.33.388-.702.625-.994a2.192 2.192 0 011.633-.79zM16 15c.709 0 1.325.308 1.654.836.171.264.274.53.315.834.057.363.033.799-.067 1.26-.236 1.057-.876 2.302-1.908 3.709-1.019-1.377-1.673-2.654-1.9-3.723a3.316 3.316 0 01-.063-1.268c.04-.283.14-.548.31-.812l.02-.033c.363-.504.972-.803 1.639-.803z" />
        </svg>
    )
}

export default SvgAirbnb
