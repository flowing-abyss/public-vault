function highlightSymbols() {
  const content = document.querySelector(".special-symbols-wrapper")
  if (!content) return

  const textNodes = new Set<Text>()
  const punctuation = '+.,/#$%^&;:{}=\\-~()"|–@—'
  const punctuationRegex = new RegExp(
    `[${punctuation.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")}]`,
    "gu",
  )
  const specialCharsRegex = /[!?]/gu
  const numbersRegex = /\d+/gu

  function getTextNodes(element: Element) {
    for (const child of element.childNodes) {
      if (child.nodeType === Node.TEXT_NODE && child.textContent?.trim() !== "") {
        textNodes.add(child as Text)
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        const childElement = child as Element
        if (
          !["SCRIPT", "STYLE", "A", "CODE", "PRE"].includes(childElement.tagName) &&
          !childElement.classList.contains("highlight")
        ) {
          getTextNodes(childElement)
        }
      }
    }
  }

  getTextNodes(content)

  for (const node of textNodes) {
    const parent = node.parentNode
    if (!parent) continue

    const fragment = document.createDocumentFragment()
    const text = node.textContent ?? ""
    let lastIndex = 0
    let match

    const allMatches = []

    while ((match = punctuationRegex.exec(text)) !== null) {
      allMatches.push({
        index: match.index,
        end: punctuationRegex.lastIndex,
        className: "highlight-punctuation",
      })
    }
    punctuationRegex.lastIndex = 0

    while ((match = specialCharsRegex.exec(text)) !== null) {
      allMatches.push({
        index: match.index,
        end: specialCharsRegex.lastIndex,
        className: "highlight-special",
      })
    }
    specialCharsRegex.lastIndex = 0

    while ((match = numbersRegex.exec(text)) !== null) {
      allMatches.push({
        index: match.index,
        end: numbersRegex.lastIndex,
        className: "highlight-number",
      })
    }
    numbersRegex.lastIndex = 0

    allMatches.sort((a, b) => a.index - b.index)

    for (const m of allMatches) {
      if (m.index > lastIndex) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex, m.index)))
      }
      const span = document.createElement("span")
      span.className = m.className
      span.textContent = text.slice(m.index, m.end)
      fragment.appendChild(span)
      lastIndex = m.end
    }

    if (lastIndex < text.length) {
      fragment.appendChild(document.createTextNode(text.slice(lastIndex)))
    }
    parent.replaceChild(fragment, node)
  }
}

document.addEventListener("nav", highlightSymbols)
