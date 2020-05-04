import * as React from 'react'

function SvgImdb(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M0 7v18h32V7zm2 2h28v14H2zm3 2.688v8.624h2v-8.625zm3.094 0v8.624H10V15.5l.906 4.813h1.281L13 15.5v4.813h1.813v-8.625H12l-.5 4.124-.688-4.124zm7.812 0v8.5h2.406c1.301 0 1.79-.2 2.188-.5.398-.2.594-.688.594-1.188v-5.188c0-.601-.196-1.113-.594-1.312-.5-.2-.688-.313-2.188-.313zm6.188.124v8.5h1.812s.086-.601.188-.5c.199 0 1.008.375 1.406.375.5 0 .7.008 1-.093.398-.2.5-.48.5-.782v-5c0-.699-.71-1.218-1.313-1.218-.601 0-1.175.394-1.375.594v-1.876zM18 13c.398 0 .813.008.813.406v5c0 .399-.512.407-.813.407zm6.594 1c.101 0 .218.105.218.406v4.281c0 .2-.019.407-.218.407-.102 0-.188-.106-.188-.407v-4.28c0-.2-.011-.407.188-.407z" />
    </svg>
  )
}

export default SvgImdb
