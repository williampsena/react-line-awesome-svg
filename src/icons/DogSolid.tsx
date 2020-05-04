import * as React from 'react'

function SvgDogSolid(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M20.313 3l-.25.656L17.313 11H9.625a4.63 4.63 0 00-2.5.719L4.719 9.28 3.28 10.72l2.438 2.406a4.684 4.684 0 00-.469 4l.719 2.094-.938 3.531-.031.125V28h2v-4.875l.969-3.656.062-.313-.094-.281-.812-2.406A2.677 2.677 0 017 15.625 2.601 2.601 0 019.625 13h8.031L21 16.281V13.47l-1.813-1.781 2.063-5.532.25.375.281.469h1.875l3.063 2.313L25.875 11H22v5.875l-.938 2.813-.062.156v3.281l1 4V28h2v-1.125l-1-4v-2.75l.938-2.813.062-.156V13h3.125l2.156-4.313-.687-.5L24.344 5h-1.438l-.968-1.531L21.655 3zM10.219 18L9 22.875V28h2v-4.875L11.781 20h.938c.351.234 1.594 1 3.281 1h1v2.125l1 4V28h2v-1.125l-1-4V19h-3c-1.063 0-2.438-.844-2.438-.844l-.25-.156z" />
    </svg>
  )
}

export default SvgDogSolid
