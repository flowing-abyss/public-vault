document.addEventListener("nav", () => {
  for (const section of document.querySelectorAll<HTMLElement>("section.footnotes")) {
    // Skip if already transformed
    if (section.querySelector("details.footnotes-details")) continue

    const details = document.createElement("details")
    details.className = "footnotes-details"

    const summary = document.createElement("summary")
    summary.className = "footnotes-summary"

    const h2 = section.querySelector("h2")
    const labelText = h2?.textContent ?? "Footnotes"
    if (h2) h2.remove()

    const foldIcon = document.createElement("span")
    foldIcon.className = "footnotes-fold"
    foldIcon.textContent = "›"

    const titleSpan = document.createElement("span")
    titleSpan.textContent = labelText

    summary.appendChild(titleSpan)
    summary.appendChild(foldIcon)

    details.appendChild(summary)
    while (section.firstChild) {
      details.appendChild(section.firstChild)
    }
    section.appendChild(details)
  }

  // When navigating to a footnote anchor, open <details> first, then scroll
  function openAndScrollToHash(hash: string) {
    if (!hash) return
    const target = document.getElementById(hash.slice(1))
    if (!target) return
    const details = target.closest("details.footnotes-details") as HTMLDetailsElement | null
    if (details && !details.open) {
      details.open = true
      requestAnimationFrame(() => target.scrollIntoView({ block: "start" }))
    }
  }

  for (const link of document.querySelectorAll<HTMLAnchorElement>("a[data-footnote-ref]")) {
    const handler = () => {
      const href = link.getAttribute("href")
      if (href) openAndScrollToHash(href)
    }
    link.addEventListener("click", handler)
    window.addCleanup(() => link.removeEventListener("click", handler))
  }

  if (window.location.hash) {
    openAndScrollToHash(window.location.hash)
  }
})
