---
tags:
  - mark/ignore
  - mark/addition/aggregator
aliases: []
url: "[flowing-abyss](https://flowing-abyss.com/Obsidian-Hybrid-Search---plugin)"
created: 2026-03-22T07:42:35.000Z
updated: 2026-03-22T21:31:43+07:00
share: true
title: "Obsidian Hybrid Search - plugin"
comments: true
enableToc: true
---

![[telegram-cloud-photo-size-2-5330532655109445326-w.jpg]]

<div style="display: flex; justify-content: center; margin: auto 0;">
	<a href="https://github.com/flowing-abyss/obsidian-hybrid-search-plugin" style="display: inline-flex; align-items: center; gap: 8px; height: 40px; padding: 0 16px; border:1px solid #EBEBEC; border-radius:8px; text-decoration:none; color: inherit; box-sizing:border-box;">
		<img src="github-icon.png" style="max-height: 20px; height:auto;">
		<span style="font-size: 18px; font-weight: 500;">GitHub</span>
	</a>
</div>

В дополнение к [[Obsidian Hybrid Search|гибридному поиску]] я сделал плагин для Obsidian. Он закрывает сценарии встроенного поиска, быстрого переключателя, OmniSearch, Recent Files, Similar Notes (или любого другого плагина, который ищет по эмбеддингам).

## Как это работает

Плагин – максимально тонкий слой поверх терминальной утилиты `obsidian-hybrid-search`. Они общаются через stdio: плагин отправляет запрос напрямую в фоновый процесс и сразу получает результат. Никакого холодного старта на каждом запросе.

Единственное, что может замедлить поиск – облачный сервис для расчёта эмбеддингов запроса. Если важна скорость, лучше использовать локальную модель через Ollama, например [BGE-M3](https://ollama.com/library/bge-m3).

## Установка

Для установки CLI-утилиты нужен [Node.js](https://nodejs.org). Если он уже есть:
```
npm install -g obsidian-hybrid-search
```

Затем устанавливаем плагин через BRAT:
1. Установите плагин [BRAT](https://github.com/TfTHacker/obsidian42-brat)
2. В настройках BRAT нажмите **Add Beta Plugin** и вставьте ссылку на репозиторий
	- `https://github.com/flowing-abyss/obsidian-hybrid-search-plugin`
3. Включите **Hybrid Search** в списке плагинов

Плагин работает только на десктопе.

## Как пользоваться

Открыть поиск можно через иконку на боковой панели или через командную палитру (`Hybrid search: Open search`). Я поставил его на хоткей `ctrl+shift+f`. Результаты появляются по мере набора – с оценкой релевантности.

| Score       | Цвет                                         | Значение              |
| ----------- | -------------------------------------------- | --------------------- |
| $>0.8$      | <font color="#4caf50">зелёный</font>         | Высокая релевантность |
| $0.5 – 0.8$ | <font color="#ff9800">оранжевый</font>       | Средняя релевантность |
| $<0.5$      | <font color="#9e9e9e">серый</font>           | Низкая релевантность  |

Если ничего не вводить, плагин покажет заметки, семантически похожие на открытую в данный момент. Фактически, это замена плагина [Similar Notes](https://github.com/joybro/obsidian-similar-notes).

Если ни одна заметка не открыта – недавно открытые файлы. Это замена [Recent Files](https://github.com/tgrosinger/recent-files-obsidian).

Справа от поисковой выдачи будет окно предпросмотра. Под ним наиболее важные метаданные. Все ссылки внутри окна предпросмотра можно также смотреть через предпросмотр (базовый плагин page preview).

![[Obsidian Hybrid Search - plugin 20260322203246269.png]]

## Синтаксис запросов

По умолчанию поиск гибридный: BM25 + семантика. Но можно управлять режимом явно из поисковой строки:

| inline (ключ: значение)                                                    | @-постфикс               | Что делает                          |
| -------------------------------------------------------------------------- | ------------------------ | ----------------------------------- |
| <font color="#ab4642">hybrid:</font> <font color="#646a73">запрос</font>   | @hybrid / @hyb           | гибридный поиск                     |
| <font color="#ab4642">semantic:</font> <font color="#646a73">запрос</font> | @semantic / @sem         | семантический поиск                 |
| <font color="#ab4642">fulltext:</font> <font color="#646a73">запрос</font> | @full                    | полнотекстовый поиск                |
| <font color="#ab4642">title:</font> <font color="#646a73">запрос</font>    | @title                   | нечёткий поиск по названию          |
| <font color="#7cafc2">tag:</font> <font color="#646a73">project</font>     | `#project`               | фильтр по тегу                      |
| <font color="#7cafc2">tag:</font> <font color="#646a73">-archive</font>    | `-#archive`              | исключить тег                       |
| <font color="#f7ca88">folder:</font> <font color="#646a73">work</font>     | -                        | ограничить папкой                   |
| <font color="#a1b56c">limit:</font> <font color="#646a73">20</font>        | @limit:20 / @lim:20      | изменить количество результатов     |
| <font color="#ba8baf">threshold:</font> <font color="#646a73">0.5</font>   | @threshold:0.5 / @th:0.5 | минимальный порог релевантности     |
| -                                                                          | @rerank                  | переранжировать через cross-encoder |

Фильтры по тегам и папкам можно комбинировать в одном запросе.

![[Obsidian Hybrid Search - plugin 20260322203727897.png]]

![[Obsidian Hybrid Search - plugin 20260322203514697.png]]

Первый способ для тех, кто знаком с [операторами поиска](https://obsidian.md/help/plugins/search#Search+operators). Второй мне нравится больше, так как эти идентификаторы можно оставлять в любом месте.

## Настройки

В настройках плагина можно указать путь к бинарнику `obsidian-hybrid-search`, если он не в системном `PATH` (например, при нестандартной установке Node.js). Там же выбирается режим поиска по умолчанию при открытии окна: hybrid, semantic, fulltext или title.

## Хоткеи внутри модального окна

Mod = Ctrl (Windows/Linux) = Command (macOS)
Alt = Option (macOS)

| Хоткей            | Действие                                             |
| ----------------- | ---------------------------------------------------- |
| `Mod+J` / `Mod+K` | перейти к следующему / предыдущему результату        |
| `Mod+P`           | переключить панель превью                            |
| `Mod+O`           | открыть выбранный результат в новой вкладке          |
| `Mod+Shift+O`     | открыть все результаты в новых вкладках              |
| `Alt+Enter`       | вставить вики-ссылку на выбранный результат в курсор |
| `Alt+Shift+Enter` | вставить все результаты как вики-ссылки в курсор     |

Если вы кайфуете от таких инструментов, то буду рад поддержке на Boosty.

<div style="display: flex; justify-content: center; margin: auto 0;">
	<a href="https://boosty.to/flowing-abyss" style="display: inline-flex; align-items: center; gap: 8px; height: 40px; padding: 0 16px; border:1px solid #EBEBEC; border-radius:8px; text-decoration:none; color: inherit; box-sizing:border-box;">
		<img src="boosty-icon.png" style="max-height: 20px; height:auto;">
		<span style="font-size: 18px; font-weight: 500;">Boosty</span>
	</a>
</div>
