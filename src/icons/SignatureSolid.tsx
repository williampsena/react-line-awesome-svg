import * as React from 'react'

function SvgSignatureSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M9.313 4c-.754 0-1.407.367-2 .875-.594.508-1.141 1.191-1.625 2.063C4.718 8.684 4 11.133 4 14.188c0 1.566.363 3.18 1.094 4.468.16.282.422.469.625.719-.543.664-1.438 1.906-1.438 1.906L5.72 22.72s.992-1.367 1.625-2.125c.402.172.781.406 1.25.406 1.715 0 3.504-.75 5.156-1.688.531.407 1.129.688 1.75.688 2.055 0 3.617-1.207 4.719-2.281.32-.313.535-.543.781-.813-.004.274-.012.524.063.844.058.242.125.543.375.813.25.269.699.437 1.062.437.73 0 1.152-.336 1.594-.656.441-.32.86-.703 1.312-1.063C26.316 16.563 27.286 16 28 16v-2c-1.586 0-2.824.938-3.813 1.719-.468.37-.89.695-1.218.937v-.125c.011-.363.066-.77 0-1.218a1.63 1.63 0 00-.313-.75c-.207-.293-.672-.563-1.062-.563-.563 0-.77.242-.969.406-.2.164-.348.332-.531.531-.367.399-.805.88-1.282 1.344-.84.82-1.828 1.442-2.906 1.594.715-.574 1.434-1.145 1.938-1.781.664-.836 1.156-1.688 1.156-2.688 0-.562-.07-1.332-.5-2.062C18.07 10.614 17.145 10 16 10c-1.23 0-2.352.605-3.031 1.563-.68.957-.969 2.183-.969 3.624 0 .981.223 1.793.531 2.5C11.141 18.419 9.7 19 8.594 19 10.285 16.465 12 13.012 12 8.812c0-.87.008-1.898-.281-2.843-.145-.473-.375-.953-.781-1.344C10.53 4.235 9.93 4 9.312 4zm0 2c.18 0 .187.035.25.094.062.058.136.203.218.468.16.528.219 1.418.219 2.25 0 3.543-1.516 6.645-3.031 8.97-.035-.06-.09-.063-.125-.126-.52-.91-.844-2.234-.844-3.468 0-2.747.656-4.876 1.438-6.282.39-.703.792-1.218 1.156-1.531.363-.313.672-.375.719-.375zM16 12c.555 0 .637.133.781.375.145.242.219.691.219 1.031 0 .25-.21.832-.719 1.469-.441.555-1.113 1.129-1.843 1.688-.176-.403-.438-.696-.438-1.375 0-1.16.246-2.008.594-2.5.347-.493.738-.688 1.406-.688zM4 26v2h24v-2z" />
        </svg>
    )
}

export default SvgSignatureSolid
