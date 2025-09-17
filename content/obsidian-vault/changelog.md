---
title: "Changelog"
---

>[!toc]+ Vault versions
> `Obsidian >= 1.9.10`
> 
> - [[#3.1.0]] 
> - [[#3.0.0]]
> 
> `Obsidian < 1.9.10`
> 
> - [[#2.1.0]]
> - [[#2.0.0]]
> - [[#1.0.0]]

# 3.1.0

- Обновлены плагины и тема
- Удалён плагин [Breadcrumbs](https://github.com/SkepticMystic/breadcrumbs)
	- [[bases replaces breadcrumbs|Вместо него используется Bases]]
	- Обновлен [[mobile workspace.png|default]] workspace
	- Обновлён сниппет `breadcrumbs.css`
	- Обновлён сниппет `supercharged-links-manual.css`
- Удалён плагин [Hover Editor](https://github.com/nothingislost/obsidian-hover-editor)
	- Не является критическим. Его добавление оставлено на усмотрение пользователя
- Отключены core плагины: Backlinks и Outgoing links
	- Они заменены панелью слева
- Обновлены настройки для [Context Command Hider](https://github.com/mara-li/obsidian-context-menu-hider)
- В корень хранилища добавлен файл `.version`, в котором будет указываться версия хранилища
- [[filter panel.png|Фильтрующая панель]] не будет ломаться, если в названиях заметок есть одинарная кавычка (`'`)

> [!info] Обновление
> - Обновление с `3.0.0` на `3.1.0` делается [[upgrade-from-version-3.0.0-to-3.1.0|заменой файлов]]. 
> - Обновление с `2.1.0` на `3.1.0` делается через [[upgrade vault using a script.mp4|скрипт]].

# 3.0.0

- Обновлены плагины и тема
- Удалён плагин [Editor Shortcuts](https://github.com/timhor/obsidian-editor-shortcuts), т.к. используемые из него команды есть в Quiet Outline
- Внедрён [Bases](https://help.obsidian.md/bases)
	- Все Dataview-запросы, которые возможно, заменены на Bases
	- Удалён плагин [Dataview Interactive Views](https://github.com/anareaty/dataview-interactive-views), т.к. он имеет [проблемы](https://t.me/flowing_abyss_chat/8431) на новой версии Obsidian
	- Установлен плагин [Meta Bind](https://github.com/mProjectsCode/obsidian-meta-bind-plugin) для быстрых фильтрующих кнопок
	- [[filter panel.png|Фильтрующая панель]] работает по принципу
		- `[ ... OR ...] AND [ ... OR ...] AND ...`
		- Чтобы удалить фильтр, нажмите на него правой кнопкой мыши
	- Все ненужные views были удалены
- Шрифты грузятся локально из `fonts.css`, а не с серверов Google
- Удалён `cssclass-cards.css`, т.к. в нём нет больше необходимости
- В Heatmap сделана привязка к свойству `created`, что исключает проблемы при переносе хранилища
- Добавлен тег `creator/expert` и стилизация для него
- Добавлен тег `mark/bookmark` и стилизация для него
- Внедрены [теги для Zotero](https://flowing-abyss.com/zotero-tags)
	- отрефакторены шаблоны
	- добавлены соответствующие колонки в таблицы
- Отключен поиск в реальном времени в ripgrep, т.к. иногда это приводит к зависаниям
- Отрефакторен `experiment template`
- Обновлены настройки для [Linter](https://github.com/platers/obsidian-linter)
- Добавлены новые cssclasses
	- `hide-bases-header` - скрывает панель Bases
	- `hover-bases-header` - показывает панель Bases при наведении
- Внесены мелкие изменения в `general-view.css`

💔 ~~На таблицах Bases не работают Supercharged иконки. Чтобы ускорить исправление этой проблемы, нужно **обязательно** зайти в [issue](https://github.com/mdelobelle/obsidian_supercharged_links/issues/245) плагина и поставить лайк разработчику.~~ Обновите плагин Supercharged Links. Если у вас будут дублироваться иконки, то добавьте [этот](https://t.me/flowing_abyss_chat/8680) сниппет в `supercharged-links-manual.css`.

> [!info] Обновление
> Обновление с `2.1.0` на `3.0.0` делается всё также через [[upgrade vault using a script.mp4|скрипт]].

# 2.1.0

- В `calendar.md` внедрена другая реализация календаря ([[task calendar.png|desktop]], [[task calendar (mobile).jpg|mobile]])
- В `vault statistics.md` добавлен [[heatmap.png|Heatmap]]
- [[calendar (periodic notes).png|Календарь]] на панели теперь имеет кликабельные год, месяц и кварталы
- Для метаданных icon в css установлен !important
- В обычных заметках через Metadata Menu можно добавлять icon
- В плагине Periodic Notes явным образом указаны формат и шаблоны для всех периодов
- В плагине BRAT явным образом указаны latest версии

> [!info] Обновление
> - [[upgrade-from-version-2.0.0-to-2.1.0|Обновление с 2.0.0 на 2.1.0]]
> 
> - Обновление с `1.0.0` до `2.1.0` делается [[upgrade vault using a script.mp4|тем же образом]], что и в `2.0.0`

# 2.0.0

- Удалены плагины
	- [Virtual Linker](https://github.com/vschroeter/obsidian-virtual-linker)
		- Не является критическим. Его добавление оставлено на усмотрение пользователя
		- Также удалены пункты меню в QuickAdd, связанные с этим плагином
	- [ExcaliBrain](https://github.com/zsviczian/excalibrain)
		- Не является критическим. Его добавление оставлено на усмотрение пользователя
	- [Recent Files](https://github.com/tgrosinger/recent-files-obsidian)
		- Данный плагин заменён вкладкой в inbox
- Обновлены плагины
- Изменена дефолтная [[new default panels.png|раскладка панелей]] ([обоснование](https://t.me/flowing_abyss/66?comment=5428))
- Исправлена проблема загрузки панели Breadcrumbs
	- Также плагин будет работать только на компьютере (`isDesktopOnly: true`)
- [[Lazy plugins loader|Добавлен плагин Lazy Plugin Loader]]
- Добавлены новые cssclasses
	- [[hide-embedded-heading.png|hide-embedded-heading]] – скрывает заголовки у встроенных заметок
	- [[native-embed.png|native-embed]] – скрывает обводку у встроенной заметки
	- [[task-contrast.png|task-contrast]] – подсвечивает незавершённые задачи
- Удалена заметка `_all tasks.md`, так как она нигде не использовалась
- Удалена заметка `weekly calendar.md`, так как она нигде не использовалась
- Удалена заметка `last created-updated.md`. Данная заметка заменена вкладкой в inbox
- Удалена заметка `_people.md`, так как она дублировала по смыслу `people.md`
- Заметка `monthly calendar.md` переименована в `calendar.md`
- В календаре у сегодняшнего дня сделана более [[colorful border in the calendar.png|яркая обводка]]
- В inbox изменена вкладка с [[recent notes tab.png|недавними заметками]]
- В inbox заменена вкладка `interim` на `tasks`. Теперь в ней отображается заметка `periodic/statuses/inbox.md`
- В [Various Complements](https://github.com/tadashi-aikawa/obsidian-various-complements-plugin) добавлен [словарь русских слов](https://raw.githubusercontent.com/hingston/russian/refs/heads/master/50000-russian-words-cyrillic-only.txt)
- На телефоне агрегирующие заметки будут отображаться более [[sources - mobile.jpg|компактным образом]]
- Не телефоне меню `alt+p` вызывается через свайп сверху-вниз
- У категории в метаданных можно установить иконку (`icon: 👨🏻‍💻`), которая будет отображаться [[icons for categories.png|перед названием]] и [[icons for task categories.png|при создании задач]]
- Внесено множество изменений в сниппеты для сохранения консистентного отображения темы на телефоне
- Обновлена заметка `hotkeys.md`
- В entertainment по умолчанию включено отображение [[entertainment as cards.png|в виде карточек]]
- В callout добавлены следующие свойства
	- [[hide-title.png|hide-title]] – скрывает заголовок
	- [[hide-icon.png|hide-icon]] – скрывает иконку
- Группирование задач на canvas
	- `Eisenhower Matrix` переименован в `tasks (grouped by priority)`
	- Добавлен canvas [[tasks (grouped by time).png|группирующий задачи по времени]]
	- Добавлен canvas [[tasks (grouped by effort).png|группирующий задачи по усилиям]]
	- Ссылки на все группирующие canvases находятся в заметке [[priority.png|priority]]
- `_tasks.md` переименован в `tasks.md` и отрефакторен
- Стилизовано [[stylized successful start notification.png|уведомление о корректной загрузке]] дефолтного пространства при старте
- В шаблоны периодических заметок добавлен cssclass, который скрывает обратные ссылки в конце документа
- Inbox-заметки будут получать название по такому шаблону: `DATE_YYYY-MM-DD TIME_HH-mm-ss`
- Улучшена консистентность [[icons in the selection menu.png|в меню выбора системных заметок]]
- High-notes заметки, имеющие `relevant: true`, в меню выбора будут [[relevant notes before others.png|отображаться раньше остальных]]
- Исправлена проблема с возникновением ошибки при создании inbox-заметки
- Всем проектам при создании присваивается приоритет `🇨`
- Из шаблона сцены для longform удалены заголовки
- В шаблонах high-notes изменён эмодзи на `💤`
- Список всех cssclasses вынесен в `list of cssclasses.md`. Также у всех заметок теперь можно указать cssclasses через Metadata Menu
- В `cssclass: category` добавлено скрытие рамки у вставленных заметок
- В `high-notes.md` добавлена вкладка `categories`
- В Supercharged Links добавлена [[priority.png|иконка "⬜"]] для canvas
- Отрефакторено меню `alt+p`
- В mermaid-диаграмме (structure) не будут отображаться системные заметки, имеющие тег `mark/ignore`
- При выборе задач, не будут отображаться категории, имеющие тег `mark/task_ignore`
- В запросах tasks исправлены названия групп так, чтобы они корректно рендерились
- Из [Dynamic Highlights](https://github.com/nothingislost/obsidian-dynamic-highlights) удалена подсветка для дат и времени (`basic-datetime`)
- В периодических заметках Dataview-запрос вынесен в отдельный view.js. Добавлена также возможность [[dataview result in the weekly note.png|открыть заметки и скопировать на них ссылки]]
- Добавлена [[sorting tasks by time and date.png|сортировка задач по времени и дате]] везде, где это возможно
- В плагин [Linter](https://github.com/platers/obsidian-linter) добавлены в исключение заметки, которые нерекурсивно лежат в папке `periodic`
- Добавлена заметка с базовой статистикой [[vault statistics.png|vault statistics.md]]. Зайти в неё можно через `alt+p -> settings`
- Цвет у ==выделения== изменён на [[purple highlight color for text.png|фиолетовый]]
- В `today.md` при нажатии на ссылку сегодняшней заметки, будет открыта сегодняшняя заметка, если она есть. Если её нет, то она будет создана и открыта
- Вставка ссылки с title теперь работает по сочетанию `alt+shift+v`
- В шаблон создания/изменения префиксов у задачи добавлена возможность редактировать задачи, которые находятся в callout-блоке
- [[favorite collections at Zotero|В Zotero можно сделать коллекцию избранной, если добавить в начало "+"]]
- Значительно улучшена команда `insert time`
- В css-сниппетах стили теперь привязаны к переменным темы. Это значит, что можно использовать светлую тему и другие темы, которые провайдит Shimmering focus
	- [[shimmering focus - light theme.png|light theme]]
	- [[Shimmering focus - coffee.png|coffee]]
	- [[Shimmering focus - everforest.png|everforest]]
	- [[Shimmering focus - gruvbox.png|gruvbox]]
- Изменён порядок выбора свойств при создании проектов и источников (name -> type -> status -> category -> meta -> problem)
- Если в системе нет категорий, то не будут показываться пустые меню с выбором категории
- [[note containing a category not as a flash card|Добавлен новый шаблон для префиксов]]
- Типы задач (filters) будут [[task types in alphabetical order.png|отображаться в алфавитном порядке]]
- Отрефакторены `today.md` и `upcoming.md`
- Исправлены иконки при выборе дополнительных префиксов у задач (`alt+shift+q -> task additions`)
- Отрефакторены шаблоны для периодических заметок
- [[zoom plugin.png|Структура]], которую отображает плагин [Zoom](https://github.com/vslinko/obsidian-zoom), будет серого цвета
- При выборе `TOC` в callout menu (`atl+shift+c`), будет сразу вставлено оглавление
- Ripgrep (`F5`) ищет в реальном времени
- [[changes to the evergreen notes|Улучшено отображение Evergreen notes]]
- В меню выбора категории, также будут отображаться [[aliases for high-notes.png|их aliases]]
- Добавлен шаблон с Dataview-запросом, который ищет заметки, имеющие категорию, как у иерархии, но не упоминающиеся в иерархических заметках
	- Название шаблона: `search for notes that are not in the hierarchy (insert into the hierarchy)`
	- Вставить его можно через `alt+e`
- Добавлен [[mobile workspace.png|workspace для телефона]]
- При создании проектов, источников и системных заметок из названия будут исключены запрещённые символы
- В `calendar.md` добавлена ссылка на Google Calendar
- Добавлены новые команды в [Context Command Hider](https://github.com/mara-li/obsidian-context-menu-hider)
- Изменён globalQuery в плагине Tasks
- Периодически заметки с тегом `mark/ignore` не будут отображаться на dashboard
- Модальное окно Metadata Menu имеет теперь фиксированный размер
- Улучшено регулярное выражение для long-dash в Dynamic Highlights
- Скрыта кнопка ведущая на периодическую заметку на панели метаданных
- Добавлен тег `mark/ai` и [[css styles for AI generated notes.png|стилизация для него]]
- Добавлена возможность [[dynamic task grouping.png|динамического изменения группировки у задач]]

___

💔 Ломающие изменения:
- [[breaking change with aggregation of tasks by category|В категориях не нужно создавать заметку для агрегации задач]]
	- Удалена папка `periodic/categories`
- [[removed the restriction related to the prohibition of spaces in categories|В категория можно и нужно использовать пробелы ]]
- У всех заметок, связанных с задачами, убрано нижнее подчёркивание в начале названия
	- Типы задач (`periodic/statuses`) будут созданы заново с новым шаблоном и без `_` в начале названия

[[obsidian web clipper|Obsidian Web Clipper]]

> [!info] Обновление
> [[upgrade vault using a script.mp4|Как обновиться с 1.0.0 на 2.Х.Х]]

# 1.0.0

Это базовая версия, которая шла изначально вместе с видеоинструкцией.