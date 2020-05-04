import * as React from 'react'

function SvgReact(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M11.404 3.36c-.845-.057-1.676.095-2.404.515-.971.56-1.618 1.517-1.965 2.62-.347 1.1-.427 2.37-.3 3.757.012.14.037.287.054.43-.132.056-.272.108-.4.168-1.264.583-2.323 1.287-3.104 2.138C2.505 13.84 2 14.878 2 16c0 1.121.505 2.16 1.285 3.012.78.851 1.84 1.555 3.104 2.138.128.06.268.112.4.168-.017.143-.042.29-.055.43-.126 1.387-.046 2.656.301 3.758.347 1.102.994 2.058 1.965 2.619.971.56 2.122.643 3.25.393 1.128-.25 2.267-.817 3.404-1.62.115-.08.23-.175.346-.261.115.086.23.18.346.261 1.137.803 2.276 1.37 3.404 1.62 1.128.25 2.279.168 3.25-.393.971-.56 1.618-1.517 1.965-2.62.347-1.1.427-2.37.3-3.757-.012-.14-.037-.287-.054-.43.132-.056.272-.108.4-.168 1.264-.583 2.323-1.287 3.104-2.138C29.495 18.16 30 17.122 30 16c0-1.121-.505-2.16-1.285-3.012-.78-.851-1.84-1.555-3.104-2.138-.128-.06-.268-.112-.4-.168.017-.143.042-.29.055-.43.126-1.387.046-2.656-.301-3.758-.347-1.102-.994-2.058-1.965-2.619-.971-.56-2.122-.643-3.25-.393-1.128.25-2.267.817-3.404 1.62-.115.08-.23.175-.346.261-.115-.086-.23-.18-.346-.261-1.137-.803-2.276-1.37-3.404-1.62a5.624 5.624 0 00-.846-.123zm-.13 1.992c.17.012.351.04.544.084.756.167 1.661.591 2.616 1.255a23.064 23.064 0 00-2.325 2.573 23.073 23.073 0 00-3.386.724c-.098-1.158-.014-2.154.218-2.892.239-.756.595-1.22 1.059-1.489.348-.2.762-.294 1.273-.255zm9.453 0c.51-.039.925.055 1.273.255.464.268.82.733 1.059 1.489.232.738.316 1.734.218 2.892a23.073 23.073 0 00-3.386-.724 23.064 23.064 0 00-2.325-2.573c.955-.664 1.86-1.088 2.616-1.255.193-.043.374-.072.545-.084zM16 7.959c.351.325.702.686 1.053 1.064A29.618 29.618 0 0016 9c-.355 0-.704.011-1.053.023.35-.378.702-.739 1.053-1.064zM16 11c.965 0 1.9.057 2.799.152A26.459 26.459 0 0120.33 13.5c.482.835.9 1.673 1.268 2.5a26.457 26.457 0 01-1.268 2.5 26.459 26.459 0 01-1.531 2.348c-.9.095-1.834.152-2.799.152-.965 0-1.9-.057-2.799-.152A26.459 26.459 0 0111.67 18.5c-.482-.835-.9-1.673-1.268-2.5.367-.827.786-1.665 1.268-2.5s.999-1.617 1.531-2.348A26.46 26.46 0 0116 11zm-5.516.6c-.185.295-.369.592-.546.9a29.63 29.63 0 00-.506.924 19.611 19.611 0 01-.395-1.444c.457-.141.945-.266 1.447-.38zm11.032 0c.502.114.99.239 1.447.38-.106.467-.243.952-.395 1.444a29.629 29.629 0 00-.506-.924 29.648 29.648 0 00-.546-.9zM7.154 12.703c.256 1.065.609 2.17 1.067 3.297a23.057 23.057 0 00-1.067 3.297c-1.051-.495-1.872-1.067-2.394-1.637C4.225 17.076 4 16.536 4 16c0-.536.225-1.076.76-1.66.522-.57 1.343-1.142 2.394-1.637zm17.692 0c1.051.495 1.872 1.067 2.394 1.637.535.584.76 1.124.76 1.66 0 .536-.225 1.076-.76 1.66-.522.57-1.343 1.142-2.394 1.637A23.057 23.057 0 0023.779 16c.458-1.127.811-2.232 1.067-3.297zM16 13c-1.645 0-3 1.355-3 3s1.355 3 3 3 3-1.355 3-3-1.355-3-3-3zm0 2c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1zm-6.568 3.576c.163.308.328.616.505.924.178.308.362.605.547.9-.502-.114-.99-.239-1.447-.38.106-.467.243-.952.395-1.444zm13.136 0c.152.492.29.977.395 1.444-.457.141-.945.266-1.447.38.185-.295.369-.592.547-.9.177-.308.342-.616.505-.924zM8.723 22.012c1.05.31 2.183.558 3.386.724.747.96 1.53 1.818 2.325 2.573-.955.664-1.86 1.088-2.616 1.255-.773.172-1.354.096-1.818-.171-.464-.268-.82-.733-1.059-1.489-.232-.738-.316-1.734-.218-2.892zm14.554 0c.098 1.158.014 2.154-.218 2.892-.239.756-.595 1.22-1.059 1.489-.464.267-1.045.343-1.818.171-.756-.167-1.661-.591-2.616-1.255a23.064 23.064 0 002.325-2.573 23.073 23.073 0 003.386-.724zm-8.33.965c.349.012.698.023 1.053.023s.704-.011 1.053-.023c-.35.378-.702.739-1.053 1.064a19.585 19.585 0 01-1.053-1.064z" />
    </svg>
  )
}

export default SvgReact
