function relativeTime(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = diffMs / (1000 * 60 * 60 * 24)
  const diffMonths = diffDays / 30.44
  const diffYears = diffDays / 365.25

  if (diffDays < 0.5) return "today"
  if (diffDays < 1.5) return "1 day ago"
  if (diffDays < 6.5) return `${Math.round(diffDays)} days ago`
  if (diffDays < 13) return "1 week ago"
  if (diffDays < 26) return `${Math.round(diffDays / 7)} weeks ago`
  if (diffMonths < 1.5) return "1 month ago"
  if (diffMonths < 11.5) return `${Math.round(diffMonths)} months ago`
  if (diffYears < 1.5) return "1 year ago"
  return `${Math.round(diffYears)} years ago`
}

function initRecentNotes() {
  const container = document.querySelector<HTMLElement>(".recent-notes")
  if (!container) return
  const table = container.querySelector<HTMLTableElement>(".recent-table")
  if (!table) return
  const recentTable = table

  // Fill relative times
  container.querySelectorAll<HTMLElement>(".date-rel[data-ts]").forEach((el) => {
    const ts = el.getAttribute("data-ts")
    if (!ts) return
    el.textContent = relativeTime(new Date(ts))
  })

  // ── Filter buttons ──────────────────────────────────────────────────────────
  let activeCategory = "all"
  let activeType = "all"

  function applyFilters() {
    recentTable.querySelectorAll<HTMLElement>("tbody tr").forEach((row) => {
      const catMatch =
        activeCategory === "all" ||
        (row.getAttribute("data-category") ?? "").split("|").includes(activeCategory)
      const typeMatch = activeType === "all" || row.getAttribute("data-type") === activeType
      row.style.display = catMatch && typeMatch ? "" : "none"
    })
  }

  const filterBtns = container.querySelectorAll<HTMLElement>(".filter-btn")

  const onFilterClick = (btn: HTMLElement) => () => {
    const group = btn.getAttribute("data-filter-group")!
    const filter = btn.getAttribute("data-filter")!
    container
      .querySelectorAll<HTMLElement>(`.filter-btn[data-filter-group="${group}"]`)
      .forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")
    if (group === "category") activeCategory = filter
    else activeType = filter
    applyFilters()
  }

  filterBtns.forEach((btn) => {
    const handler = onFilterClick(btn)
    btn.addEventListener("click", handler)
    window.addCleanup(() => btn.removeEventListener("click", handler))
  })

  // ── Column sort ─────────────────────────────────────────────────────────────
  let sortCol = "created"
  let sortDir: "asc" | "desc" = "desc"

  const headers = recentTable.querySelectorAll<HTMLElement>("th.sortable")

  // Apply initial sort so DOM order matches the created-desc default
  applySort()

  function applySort() {
    const tbody = recentTable.querySelector("tbody")!
    const rows = Array.from(tbody.querySelectorAll<HTMLElement>("tr"))

    rows.sort((a, b) => {
      if (sortCol === "title" || sortCol === "tag") {
        const valA = (
          a.getAttribute(sortCol === "tag" ? "data-category" : "data-title") ?? ""
        ).toLowerCase()
        const valB = (
          b.getAttribute(sortCol === "tag" ? "data-category" : "data-title") ?? ""
        ).toLowerCase()
        const cmp = valA < valB ? -1 : valA > valB ? 1 : 0
        return sortDir === "asc" ? cmp : -cmp
      } else {
        const attr = sortCol === "created" ? "data-created" : "data-modified"
        const tsA = a.getAttribute(attr) ?? ""
        const tsB = b.getAttribute(attr) ?? ""
        const cmp = (tsA ? new Date(tsA).getTime() : 0) - (tsB ? new Date(tsB).getTime() : 0)
        return sortDir === "asc" ? cmp : -cmp
      }
    })

    rows.forEach((row) => tbody.appendChild(row))
  }

  const onHeaderClick = (th: HTMLElement) => () => {
    const col = th.getAttribute("data-col")!
    if (col === sortCol) {
      sortDir = sortDir === "desc" ? "asc" : "desc"
    } else {
      sortCol = col
      sortDir = col === "title" || col === "tag" ? "asc" : "desc"
    }

    headers.forEach((h) => {
      h.classList.remove("sort-active", "sort-asc", "sort-desc")
      const icon = h.querySelector(".sort-icon")
      if (icon) icon.textContent = ""
    })
    th.classList.add("sort-active", sortDir === "asc" ? "sort-asc" : "sort-desc")
    const icon = th.querySelector(".sort-icon")
    if (icon) icon.textContent = sortDir === "asc" ? "↑" : "↓"

    applySort()
  }

  headers.forEach((th) => {
    const handler = onHeaderClick(th)
    th.addEventListener("click", handler)
    window.addCleanup(() => th.removeEventListener("click", handler))
  })
}

document.addEventListener("nav", initRecentNotes)
