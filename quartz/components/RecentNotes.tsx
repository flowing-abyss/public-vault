import { GlobalConfiguration } from "../cfg"
import { i18n } from "../i18n"
import { QuartzPluginData } from "../plugins/vfile"
import { classNames } from "../util/lang"
import { SimpleSlug, resolveRelative } from "../util/path"
import style from "./styles/recentNotes.scss"
// @ts-ignore
import script from "./scripts/recentNotes.inline"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  title?: string
  limit: number
  linkToMore: SimpleSlug | false
  filter: (f: QuartzPluginData) => boolean
  sort: (f1: QuartzPluginData, f2: QuartzPluginData) => number
}

const defaultOptions = (_cfg: GlobalConfiguration): Options => ({
  limit: 3,
  linkToMore: false,
  filter: () => true,
  sort: sortByCreatedDesc,
})

function getCategories(frontmatter: Record<string, unknown> | undefined | null): string[] {
  const raw = frontmatter?.category
  const items: unknown[] = Array.isArray(raw) ? raw : raw != null ? [raw] : []
  return items
    .map((v) =>
      String(v)
        .replace(/^\[\[|\]\]$/g, "")
        .trim(),
    )
    .filter(Boolean)
}

const TYPE_MAP: Record<string, { icon: string; label: string }> = {
  note: { icon: "📝", label: "note" },
  "project/short": { icon: "🗞️", label: "essay" },
  "project/single": { icon: "✏️", label: "article" },
}

function getTypeInfo(tags: string[]): { icon: string; label: string } | null {
  for (const tag of tags) {
    if (tag === "project/short") return TYPE_MAP["project/short"]
    if (tag === "project/single") return TYPE_MAP["project/single"]
    if (tag === "note" || tag.startsWith("note/")) return TYPE_MAP["note"]
  }
  return null
}

function sortByCreatedDesc(f1: QuartzPluginData, f2: QuartzPluginData): number {
  const d1 = f1.dates?.created?.getTime() ?? 0
  const d2 = f2.dates?.created?.getTime() ?? 0
  if (d1 !== d2) return d2 - d1
  const t1 = (f1.frontmatter?.title ?? "").toLowerCase()
  const t2 = (f2.frontmatter?.title ?? "").toLowerCase()
  return t1.localeCompare(t2)
}

export default ((userOpts?: Partial<Options>) => {
  const RecentNotes: QuartzComponent = ({
    allFiles,
    fileData,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    const opts = { ...defaultOptions(cfg), ...userOpts }
    const pages = allFiles.filter(opts.filter).sort(opts.sort)

    const allCategories = new Set<string>()
    const allTypes = new Set<string>()
    for (const page of pages.slice(0, opts.limit)) {
      const tags = page.frontmatter?.tags ?? []
      for (const cat of getCategories(page.frontmatter)) allCategories.add(cat)
      const typeInfo = getTypeInfo(tags)
      if (typeInfo) allTypes.add(typeInfo.label)
    }
    const categories = Array.from(allCategories).sort()
    const types = Array.from(allTypes).sort()

    return (
      <div class={classNames(displayClass, "recent-notes")}>
        {opts.title && <h3 class="recent-title">{opts.title}</h3>}
        <div class="recent-filters-wrap">
          {types.length > 0 && (
            <div class="recent-filters recent-filters-type">
              <button class="filter-btn active" data-filter="all" data-filter-group="type">
                All types
              </button>
              {Object.entries(TYPE_MAP)
                .filter(([, v]) => types.includes(v.label))
                .map(([, v]) => (
                  <button class="filter-btn" data-filter={v.label} data-filter-group="type">
                    {v.icon} {v.label}
                  </button>
                ))}
            </div>
          )}
          <div class="recent-filters">
            <button class="filter-btn active" data-filter="all" data-filter-group="category">
              All
            </button>
            {categories.map((cat) => (
              <button class="filter-btn" data-filter={cat} data-filter-group="category">
                {cat.replace(/_/g, " ").toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <ul class="recent-list">
          {pages.slice(0, opts.limit).map((page) => {
            const title = page.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title
            const tags = page.frontmatter?.tags ?? []
            const typeInfo = getTypeInfo(tags)
            const createdISO = page.dates?.created?.toISOString() ?? ""
            return (
              <li class="recent-list-item" data-type={typeInfo?.label ?? ""}>
                {typeInfo && (
                  <span class="type-icon" title={typeInfo.label}>
                    {typeInfo.icon}
                  </span>
                )}
                <a href={resolveRelative(fileData.slug!, page.slug!)} class="internal">
                  {title}
                </a>
                <span class="list-date date-rel" data-ts={createdISO}></span>
              </li>
            )
          })}
        </ul>
        <div class="recent-table-wrap table-container">
          <table class="recent-table">
            <thead>
              <tr>
                <th class="col-title sortable" data-col="title">
                  Title <span class="sort-icon">↕</span>
                </th>
                <th class="col-tag sortable" data-col="tag">
                  Category <span class="sort-icon">↕</span>
                </th>
                <th class="col-created sortable sort-active sort-desc" data-col="created">
                  Created <span class="sort-icon">↓</span>
                </th>
                <th class="col-updated sortable" data-col="updated">
                  Updated <span class="sort-icon">↕</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {pages.slice(0, opts.limit).map((page) => {
                const title = page.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title
                const tags = page.frontmatter?.tags ?? []
                const cats = getCategories(page.frontmatter)
                const typeInfo = getTypeInfo(tags)
                const createdISO = page.dates?.created?.toISOString() ?? ""
                const modifiedISO = page.dates?.modified?.toISOString() ?? ""

                return (
                  <tr
                    data-category={cats.join("|")}
                    data-type={typeInfo?.label ?? ""}
                    data-created={createdISO}
                    data-modified={modifiedISO}
                    data-title={title.toLowerCase()}
                  >
                    <td class="td-title" data-type={typeInfo?.label ?? ""}>
                      {typeInfo && (
                        <span class="type-icon" title={typeInfo.label}>
                          {typeInfo.icon}
                        </span>
                      )}
                      <a href={resolveRelative(fileData.slug!, page.slug!)} class="internal">
                        {title}
                      </a>
                    </td>
                    <td class="td-tag">{cats.map((cat) => cat.replace(/_/g, " ")).join(", ")}</td>
                    <td class="td-date">
                      <span class="date-rel" data-ts={createdISO}></span>
                    </td>
                    <td class="td-date">
                      <span class="date-rel" data-ts={modifiedISO}></span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        {opts.linkToMore && pages.length > opts.limit && (
          <p class="recent-more">
            <a href={resolveRelative(fileData.slug!, opts.linkToMore)}>
              {i18n(cfg.locale).components.recentNotes.seeRemainingMore({
                remaining: pages.length - opts.limit,
              })}
            </a>
          </p>
        )}
      </div>
    )
  }

  RecentNotes.css = style
  RecentNotes.afterDOMLoaded = script
  return RecentNotes
}) satisfies QuartzComponentConstructor
