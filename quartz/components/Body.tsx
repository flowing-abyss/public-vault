// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
// @ts-ignore
import highlightScript from "./scripts/highlight.inline"
import clipboardStyle from "./styles/clipboard.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <div id="quartz-body" class="special-symbols-wrapper">
      {children}
    </div>
  )
}

Body.afterDOMLoaded = `
${clipboardScript}
${highlightScript}
`
Body.css = clipboardStyle

export default (() => Body) satisfies QuartzComponentConstructor
