---
tags:
  - note/basic/primary
aliases: []
icon: 📝
color: "#70a0b5"
created: 2026-05-18T18:22:54+07:00
updated: 2026-05-18T18:46:49+07:00
share: true
title: Чистый PDF для Zotero
url: "[flowing-abyss](https://flowing-abyss.com/Clean-PDF-for-Zotero)"
comments: false
enableToc: false
---

Кратко о том, как работает генерация PDF.

Сервис скачивает страницу по URL, через [Defuddle](https://github.com/kepano/defuddle) вытаскивает из нее главное содержимое без рекламы, меню и прочего мусора, затем собирает чистую HTML-версию.

После этого Playwright рендерит HTML в настоящий PDF с нормальной типографикой, форматами A4/Letter, светлой или темной темой и оглавлением.

Сервисом можно воспользоваться [напрямую](http://pdf.brainysnipe.ru/) или через Zotero скрипт.

Далее я опишу пошагово, что нужно сделать, чтобы настроить массовое скачивание в Zotero:
1. Сервис доступен только моим подписчикам [Boosty](https://boosty.to/flowing-abyss). Поэтому сначала вам нужно подписаться на тир `Point` или `Thread`
2. Зайдите на [эту страницу](https://pdf.brainysnipe.ru/claim.html) и введите email, который привязан к Boosty, чтобы получить свой API-ключ
3. Установите в Zotero плагин [Action & Tags](https://github.com/windingwind/zotero-actions-tags/releases)
4. Настройте плагин
	1. В настройках [[Clean PDF for Zotero 20260518183718242.png|нажмите плюс]]
	2. Заполните поля [[Clean PDF for Zotero 20260518183915972.png|следующим образом]]
		- Name `Add PDF` – это название скрипта
		- Operation `Script`
		- В Data нужно вставить вот [этот](https://pdf.brainysnipe.ru/zotero-script.js) скрипт
			- В скрипте обязательно поменяйте на свой API-ключ в переменной `API_KEY`
		- В Menu Label напишите `_add PDF` – это будет название команды в контекстном меню
		- Поставьте галочку `In item Menu`, чтобы можно было добавлять PDF через контекстное меню как на видео
	3. Нажмите Save
5. [[Clean PDF for Zotero 20260518185251774.png|Пользуйтесь)]]
