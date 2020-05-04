import * as React from 'react'

function SvgSlideshare(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M8 4C6.355 4 5 5.355 5 7v8.406c-.77-.445-1.371-.844-1.5-.844-.36 0-.5.344-.5.563 0 1.121 3.336 3.281 5.438 4.063 0 0-.532 1.55-.532 3.312 0 1.762 1.086 5.5 4.532 5.5 0 0 2.562-.008 2.562-2.531V20.5l2 .594v4.375C17 27.992 19.563 28 19.563 28c3.445 0 4.53-3.738 4.53-5.5s-.53-3.313-.53-3.313c2.101-.78 5.437-2.94 5.437-4.062 0-.219-.14-.563-.5-.563-.129 0-.73.399-1.5.844V7c0-1.645-1.355-3-3-3zm0 2h16c.566 0 1 .434 1 1v9.406c-1.113.465-2.398.844-3.719.844-1.46 0-2.379-.094-3-.094-1.203 0-1.281 1.282-1.281 1.282v.906l-2.344-1.782c-.187-.222-.488-.406-.937-.406-.621 0-1.54.094-3 .094-1.32 0-2.606-.379-3.719-.844V7c0-.566.434-1 1-1zm4.313 4.969c-1.477 0-2.657 1.144-2.657 2.531 0 1.387 1.18 2.5 2.656 2.5C13.79 16 15 14.887 15 13.5s-1.21-2.531-2.688-2.531zm7.374 0C18.212 10.969 17 12.113 17 13.5c0 1.387 1.21 2.5 2.688 2.5 1.476 0 2.656-1.113 2.656-2.5s-1.18-2.531-2.657-2.531z" />
    </svg>
  )
}

export default SvgSlideshare
