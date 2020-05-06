# react-svg-line-awesome

This project is about create React Svg Components using Line Awesome assets.

- [Line awesome](https://icons8.com/line-awesome)

[See the list of all icons available](https://icons8.com/line-awesome)

## How to build?

```shell
npx @svgr/cli --icon  ./node_modules/line-awesome/svg/*.svg --out-dir ./src/icons
find ./src/icons -name "*.js" -exec sh -c 'mv "$0" "${0%.js}.tsx"' {} \;
sed -i 's/[(]props[)]/\(props\: JSX\.IntrinsicAttributes \& React\.SVGProps\<SVGSVGElement\>\)/g' *
sh prebuild.sh
```
## How to install?
 
```
# npm
npm install react-line-awesome-svg --save

# yarn
yarn add react-line-awesome-svg
```

## How to use?

```tsx
import { LineAwesome } from 'react-line-awesome-svg'
import SvgThumbsUp from 'react-line-awesome-svg/icons/ThumbsUp'

<LineAwesome
    icon={SvgThumbsUp}
    className="my-svg"
    fill="#000"
/>

// outputs -> <svg class="my-svg" fill="#000" />
```