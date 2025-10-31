import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { QuartzComponent } from "./quartz/components/types"

// Define a component that renders nothing
const NoOpComponent: QuartzComponent = () => null

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.ConditionalRender({
      condition: (props) => props.fileData.slug === "index",
      component: Component.RecentNotes({
        title: "Recent",
        limit: 100,
        linkToMore: false,
        showTags: false,
        filter: (page) => {
          // Exclude index page and obsidian-vault folder
          if (page.slug === "index" || page.slug?.startsWith("obsidian-vault/")) {
            return false
          }

          // Exclude pages with #mark/ignore tag
          if (page.frontmatter?.tags?.includes("mark/ignore")) {
            return false
          }

          return true
        },
      }),
    }),
  ],
  footer: Component.Backlinks(),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [Component.Search()],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [],
  right: [],
}
