---
tags:
  - note/basic/primary
aliases: []
url: "[flowing-abyss](https://flowing-abyss.com/Obsidian-to-Anki)"
created: 2025-12-11T18:58:42+07:00
updated: 2026-02-20T21:20:19+07:00
share: true
title: "Obsidian to Anki"
comments: true
enableToc: false
---

Отройте Anki.

Наверху в левом меню выберите: `Tools -> Add-ons`
![[Obsidian to Anki 2025-12-11.png]]

Появится меню с расшрениями. Вам нужно нажать `Get Add-ons`, чтобы установить аддон для синхронизации.
![[Obsidian to Anki 2025-12-11-1.png]]

Вставьте в появившееся окошко вот этот (`2055492159`) номер аддона [AnkiConnect](https://ankiweb.net/shared/info/2055492159):
![[Obsidian to Anki 2025-12-11-2.png]]

Установится аддон `AnkiConnect`. Теперь настроим его:
1. Нажмите на `AnkiConnect` в списке
2. Отройте `Config` аддона
3. Вставьте код, который прикреплён ниже
4. Нажмите `OK`
![[Obsidian to Anki 2025-12-11-3.png]]

```json
{
    "apiKey": null,
    "apiLogPath": null,
    "webBindAddress": "127.0.0.1",
    "webBindPort": 8765,
    "webCorsOrigin": "http://localhost",
    "webCorsOriginList": [
        "http://localhost",
        "app://obsidian.md"
    ]
}
```

**Перезапустите Anki.**

Карточки в хранилище создаются с помощью префиксов вот [так](https://youtu.be/4wB-Ph5XYV0?t=8130). Команда для синхронизации карточек `Scan Vault`.
