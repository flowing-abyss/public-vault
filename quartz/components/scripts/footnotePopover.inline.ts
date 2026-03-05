import { computePosition, flip, inline, shift } from "@floating-ui/dom"

let currentPopover: HTMLElement | null = null
let hideTimer: ReturnType<typeof setTimeout> | null = null

function scheduleHide() {
  hideTimer = setTimeout(() => {
    if (currentPopover) {
      currentPopover.remove()
      currentPopover = null
    }
  }, 100)
}

function cancelHide() {
  if (hideTimer !== null) {
    clearTimeout(hideTimer)
    hideTimer = null
  }
}

document.addEventListener("nav", () => {
  const links = [...document.querySelectorAll("a[data-footnote-ref]")] as HTMLAnchorElement[]

  for (const link of links) {
    const mouseEnterHandler = async ({ clientX, clientY }: MouseEvent) => {
      cancelHide()

      // If popover for this exact link already exists, keep it
      const existingId = `fn-popover-${link.getAttribute("href")?.slice(1)}`
      if (currentPopover?.id === existingId) return

      // Remove any other popover immediately
      if (currentPopover) {
        currentPopover.remove()
        currentPopover = null
      }

      const href = link.getAttribute("href")
      if (!href?.startsWith("#")) return

      const footnoteEl = document.getElementById(href.slice(1))
      if (!footnoteEl) return

      // Extract inner paragraph content, skipping the <li> wrapper to avoid bullet
      const inner = document.createElement("div")
      const paragraphs = [...footnoteEl.querySelectorAll("p")]
      paragraphs.forEach((p, i) => {
        const pClone = p.cloneNode(true) as HTMLElement
        pClone.querySelectorAll("[data-footnote-backref]").forEach((el) => el.remove())
        // Append jump arrow inline at the end of the last paragraph
        if (i === paragraphs.length - 1) {
          const jumpLink = document.createElement("a")
          jumpLink.href = href
          jumpLink.textContent = " ↓"
          jumpLink.style.cssText = "font-size:0.8em;opacity:0.6;text-decoration:none;"
          jumpLink.addEventListener("click", () => {
            if (currentPopover) {
              currentPopover.remove()
              currentPopover = null
            }
          })
          pClone.appendChild(jumpLink)
        }
        inner.appendChild(pClone)
      })

      const popoverEl = document.createElement("div")
      popoverEl.id = existingId
      popoverEl.classList.add("popover")
      const popoverInner = document.createElement("div")
      popoverInner.classList.add("popover-inner")
      popoverInner.appendChild(inner)
      popoverEl.appendChild(popoverInner)

      // Keep popover visible when mouse moves onto it
      popoverEl.addEventListener("mouseenter", cancelHide)
      popoverEl.addEventListener("mouseleave", scheduleHide)

      document.body.appendChild(popoverEl)
      currentPopover = popoverEl

      const { x, y } = await computePosition(link, popoverEl, {
        strategy: "fixed",
        placement: "top",
        middleware: [inline({ x: clientX, y: clientY }), shift({ padding: 8 }), flip()],
      })

      // Guard: user may have moved mouse away before positioning resolved
      if (currentPopover !== popoverEl) return

      Object.assign(popoverEl.style, {
        transform: `translate(${x.toFixed()}px, ${y.toFixed()}px)`,
      })
      popoverEl.classList.add("active-popover")
    }

    link.addEventListener("mouseenter", mouseEnterHandler)
    link.addEventListener("mouseleave", scheduleHide)
    window.addCleanup(() => {
      link.removeEventListener("mouseenter", mouseEnterHandler)
      link.removeEventListener("mouseleave", scheduleHide)
    })
  }
})
