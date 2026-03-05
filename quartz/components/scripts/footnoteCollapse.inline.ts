document.addEventListener("nav", () => {
  for (const section of document.querySelectorAll<HTMLElement>("section.footnotes")) {
    // Skip if already transformed
    if (section.querySelector("details.footnotes-details")) continue

    // Replace browser-inconsistent ↩ emoji with a plain arrow
    section.querySelectorAll<HTMLElement>("a[data-footnote-backref]").forEach((el) => {
      el.textContent = "↑"
      el.style.cssText = "font-size:0.8em;opacity:0.6;text-decoration:none;"
    })

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

  function flashTarget(target: HTMLElement) {
    target.classList.remove("footnote-flash")
    // Force reflow to restart animation if already applied
    void target.offsetWidth
    target.classList.add("footnote-flash")
    target.addEventListener("animationend", () => target.classList.remove("footnote-flash"), {
      once: true,
    })
  }

  // When navigating to a footnote anchor, open <details> first, then scroll
  function openAndScrollToHash(hash: string) {
    if (!hash) return
    const target = document.getElementById(hash.slice(1))
    if (!target) return
    const details = target.closest("details.footnotes-details") as HTMLDetailsElement | null
    if (details && !details.open) {
      details.open = true
      requestAnimationFrame(() => {
        target.scrollIntoView({ block: "start" })
        flashTarget(target)
      })
    } else {
      target.scrollIntoView({ block: "start" })
      flashTarget(target)
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

  // When navigating back from footnote to text, flash the source paragraph
  for (const backref of document.querySelectorAll<HTMLAnchorElement>("a[data-footnote-backref]")) {
    const handler = (e: MouseEvent) => {
      e.preventDefault()
      const href = backref.getAttribute("href")
      if (!href) return
      const target = document.getElementById(href.slice(1))
      if (!target) return
      const para = target.closest("p, li") as HTMLElement | null
      const flashEl = para ?? target
      target.scrollIntoView({ block: "center", behavior: "smooth" })
      flashEl.classList.remove("footnote-flash")
      void flashEl.offsetWidth
      flashEl.classList.add("footnote-flash")
      flashEl.addEventListener("animationend", () => flashEl.classList.remove("footnote-flash"), {
        once: true,
      })
    }
    backref.addEventListener("click", handler)
    window.addCleanup(() => backref.removeEventListener("click", handler))
  }

  if (window.location.hash) {
    openAndScrollToHash(window.location.hash)
  }
})
