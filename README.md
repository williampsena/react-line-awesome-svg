# react-line-awesome

This project is about create React Svg Components using Line Awesome assets.

## How to build?

```shell
npx @svgr/cli --icon  ./node_modules/line-awesome/svg/*.svg --out-dir ./src/icons
find ./src/icons -name "*.js" -exec sh -c 'mv "$0" "${0%.js}.tsx"' {} \;
sed -i 's/[(]props[)]/\(props\: JSX\.IntrinsicAttributes \& React\.SVGProps\<SVGSVGElement\>\)/g' *
```

## How to use?

```tsx
import { LineAwesome } from 'line-awesome'
import SvgThumbsUp from 'line-awesome/icons/ThumbsUp'

<LineAwesome
    icon={SvgThumbsUp}
    className="my-svg"
    fill="#000"
/>

// outputs -> <svg class="my-svg" fill="#000" />
```