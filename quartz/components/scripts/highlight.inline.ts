function highlightSymbols() {
  const content = document.querySelector(".special-symbols-wrapper");
  if (!content) return;

  const textNodes = new Set();
  const punctuation = "+.,/#$%^&;:{}=\\-~()\"|–@—";
  const punctuationRegex = new RegExp(`[${punctuation.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")}|\\d]`, "gu");
  const specialCharsRegex = /[!?]/gu;

  function getTextNodes(element) {
    for (const child of element.childNodes) {
      if (
        child.nodeType === Node.TEXT_NODE &&
        child.textContent?.trim() !== ""
      ) {
        textNodes.add(child);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        if (
          !["SCRIPT", "STYLE", "A", "CODE", "PRE"].includes(child.tagName) &&
          !child.classList.contains("highlight")
        ) {
          getTextNodes(child);
        }
      }
    }
  }

  getTextNodes(content);

  for (const node of textNodes) {
    const parent = node.parentNode;
    if (!parent) continue;

    const fragment = document.createDocumentFragment();
    const text = node.textContent;
    let lastIndex = 0;
    let match;

    const allMatches = [];

    while ((match = punctuationRegex.exec(text)) !== null) {
      allMatches.push({
        index: match.index,
        end: punctuationRegex.lastIndex,
        className: "highlight-punctuation",
      });
    }
    punctuationRegex.lastIndex = 0;

    while ((match = specialCharsRegex.exec(text)) !== null) {
      allMatches.push({
        index: match.index,
        end: specialCharsRegex.lastIndex,
        className: "highlight-special",
      });
    }
    specialCharsRegex.lastIndex = 0;

    allMatches.sort((a, b) => a.index - b.index);

    for (const m of allMatches) {
      if (m.index > lastIndex) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex, m.index)));
      }
      const span = document.createElement("span");
      span.className = m.className;
      span.textContent = text.slice(m.index, m.end);
      fragment.appendChild(span);
      lastIndex = m.end;
    }

    if (lastIndex < text.length) {
      fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
    }
    parent.replaceChild(fragment, node);
  }
}

document.addEventListener("DOMContentLoaded", highlightSymbols);