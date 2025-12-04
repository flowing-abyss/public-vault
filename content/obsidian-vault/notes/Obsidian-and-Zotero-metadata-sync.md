---
title: "Obsidian and Zotero metadata synchronization"
cssclasses:
  - no-inline-title
comments: false
---

*Предполагается, что вы используете подход из статьи про [[zotero tags|теги в Zotero]].*

В корне хранилища лежит скрипт `.zotero_sync.py`, который согласует метаданные импортированных источников из Zotero в Obsidian.

Он смотрит на экспортированную библиотеку `./.library.json` и меняет метаданные у заметок, которые лежат в `sources`.

Скрипт будет синхронизировать следующие метаданные:
```yaml
---
status:
rating:
scientificity:
category:
meta:
problem:
---
```

Скрипт нужен для ситуации, когда в Zotero сделал какие-то сложные манипуляции (изменил коллекции, поменял статусы, переоценил источники). В таком случае, вручную сопоставлять изменения с Obsidian утомительно. Скрипт это автоматизирует.

Чтобы это заработало, нужно сделать следующее:
1. Экспортировать библиотеку в JSON-формат
	- Делается это в настройках Zotero
		- File > Export Library... > BetterBibTeX JSON (✔️ keepUpdated, ✔️ Items)
	- Экспортировать нужно в корень хранилища с названием `.library.json`
2. Запускаете скрипт
	- `python ./.zotero_sync.py`

Для тех кому не хочется вручную запускать скрипт. Есть вариант добавить `.zotero_watcher.sh` в автозагрузку. Он будет следить за изменением `.library.json` и автоматом запускать `.zotero_sync.py`.

Вывод будет выглядеть примерно так:
```bash
➜ ./.zotero_watcher.sh

👀 Zotero Watcher started.
📂 Watching file: ./.library.json
🚀 Triggering on change: ./.zotero_sync.py
---------------------------------------------------
./.library.json CLOSE_WRITE,CLOSE
🔄 Changes detected! Starting synchronization...
📚 Reading Zotero library: .library.json...
✅ Loaded 10 items.
📝 Updated: Мифы экономики.md

🎉 Done! Updated files: 1
---------------------------------------------------
✅ Synchronization complete. Waiting for new changes...
```