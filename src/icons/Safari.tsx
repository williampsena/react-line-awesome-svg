import * as React from 'react'

function SvgSafari(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4zm0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16 10.465 6 16 6zm.531 1.031l-.093 2h.218l.188.031.281-2h-.156l-.063-.03zm-1.718.063l-.47.062.282 1.969.5-.063zm3.968.343l-.687 1.875.468.188.688-1.875zm-6.093.188l-.157.063-.031.03h-.063l-.28.157L13 9.688l.219-.126.094-.03.062-.032zm8.093.75l-1.031 1.719.188.094.03.03.126.095 1.187-1.594-.218-.156L21 8.5zm-10.093.375l-.376.281-.062.063h-.031l.875.969.406.562.063-.031.03-.031.282-.22zm11.593.844l-7.343 5.312L9.78 22.25l1.031-.719-.937 1.032.375.343 1.344-1.468-.281-.25 5.843-4.063 3.969-5.844.281.281 1.469-1.343-.313-.375-1.156 1.031zm-13.25.719l-.312.406 1.594 1.187.312-.406zm14.813 1.28l-1.375.876-.344.156.031.031.032.063.125.281 1.812-.875-.188-.375-.03-.031zm-15.969.595l-.156.25v.062l-.032.031-.062.188 1.875.687.063-.187.093-.188zm16.813 1.562l-1.938.469.094.312.031.094 1.969-.313-.032-.062v-.125zm-17.532.625l-.062.5 1.968.281.063-.5zM25 15.906L23.75 16l-.75-.063v.126l-.031.375 2 .125.031-.5L24 16l1-.063zm-15.969.563l-2 .093v.344l.032.063.03.187 1.97-.281-.032-.094zm13.75 1.281l-.125.375 1.875.688.063-.094v-.094l.125-.375zm-13.437.375l-1.875.688.156.5 1.875-.688zm12.812 1.219l-.25.406 1.688 1.063.281-.438zm-12.031.437l-1.719 1.032L8.5 21l.063.063.187.25 1.594-1.22-.125-.124-.031-.063-.032-.031zm10.969 1l-.188.188-.093.125 1.343 1.468.188-.156.062-.062.157-.188zm-1.313 1.125l-.437.25 1.031 1.719.438-.281zm-7.156.219l-.281.594-.719 1.156h.031l.063.031.031.032.406.187.875-1.781-.312-.157-.031-.03zm5.5.531l-.375.125.5 1.938.375-.125h.094l.093-.063zm-3.844.125l-.5 1.938.344.093h.125l.094.032.312-1.969h-.031l-.094-.031zm2.188.188l-.5.031.094 2 .5-.031z" />
    </svg>
  )
}

export default SvgSafari
