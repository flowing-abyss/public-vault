import { classNames } from "../util/lang"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const ArticleTitle: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  const cssclasses = fileData.frontmatter?.cssclasses

  if (title) {
    return <h1 class={classNames(undefined, "article-title", ...(cssclasses ?? []))}>{title}</h1>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
