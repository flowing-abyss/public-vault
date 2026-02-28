---
title: "Changelog"
comments: false
enableToc: false
---

>[!toc]+ Vault versions
>
> `Obsidian >= 1.12.4`
>
>  - [[#6.0.0]]
>
> `Obsidian <= 1.11.4`
>
> - [[#5.1.1]]
> - [[#5.1.0]]
> 
> `Obsidian <= 1.10.3`
>
> - [[#5.0.0]]
> - [[#4.0.0]]
> 
> `Obsidian <= 1.9.14`
> 
> - [[#3.1.0]] 
> - [[#3.0.0]]
> 
> `Obsidian < 1.9.10`
> 
> - [[#2.1.0]]
> - [[#2.0.0]]
> - [[#1.0.0]]

# 6.0.0

- Обновлены плагины и тема
- Добавлена интеграция с [[Obsidian Vault - FAQ#Claude Code|Claude Code]]
	- Скиллы зависят от [Obsidian CLI](https://help.obsidian.md/cli), поэтому убедитесь, что у вас он [[obsidian cli.png|включен]]
- Значительным образом переработаны `home/databases/*.base`
	- `breadcrumbs.base`
		- Добавлено отображение `🎲 Random`, которое отображает 20 случайных заметок
		- Добавлено `🥢 2-hop`, которое показывает [[2hop links|опосредованно]] связанные заметки
	- `fleetings.base`
		- Добавлено отображение `🤖 AI Generated`, которое показывает заметки с тегом `#mark/ai`
	- `notes.base`
		- Добавлено отображение `🪡 Single Link`, которое показывает заметки с одной исходящей или входящей ссылкой
		- Добавлено отображение `🕸️ Most Connected`, которое сортирует заметки по общему количеству связей (входящие + исходящие)
		- Добавлено отображение `⚖️ Imbalanced`, которое показывает заметки, которые имеют заметный разрыв между количеством входящих и исходящих ссылок
		- Добавлено отображение `🔇 Unused`, которое показывает добытые, но нигде неиспользованные заметки (их нет ни в проектах, ни в системных заметках)
	- `recent.base`
		- Добавлено отображение `📅 Today activity`, которое показывает, какие заметки были созданы или обновлены сегодня
		- Добавлены отображения `📆 Last N Days`, которые показывают заметки, созданные или обновлённые за выбранный период
		- Добавлено отображение `🧊 Stale`, которое показывает заметки, к которым не притрагивались год
	- `projects.base` / `sources.base` / `people.base` / `high-notes.base` (пример отображений для [[bases - projects.png|проектов]])
		- `📊 All .. ` - все заметки
		- `📋 Workflow ...` - над чем нужно работать или что стоит распланировать
		- `_ Status ...` - выборка по выбранному статусу
		- `_ Group` - сгруппированные по выбранному свойству
		- `🖼️ Gallery` - отображение в виде карточек (для источников)
		- `❗ Overdue` - просрочено по `end` (для проектов)
		- `✅ Structure Validation` - отображает заметки с неправильно заполненными метаданными
- Удалён плагин [Image Context Menus](https://github.com/NomarCub/obsidian-copy-url-in-preview), так как в Obsidian появилось нативное меню
- Добавлен воркспейс tasks
- Добавлена статистика с [[links stat.png|плотностью связей заметок]]
- Обновлены хоткеи
- Возвращён плагин [Query Control](https://github.com/reply2za/obsidian-query-control), так как он надёжно сворачивал обратные ссылки
	- Отключен сниппет для [[minimalist-backlinks.png|минималистичных]] обратных ссылок
	- Сделано это для [[similar notes - example.png|консистентного отображения]] с рекомендуемым плагином Similar Notes (смотреть в конце)
- Исправлено открытие файла в QuickAdd
- Обновлены шаблоны для [[obsidian web clipper|Web Clipper]]
- Добавлена автоматически формируемая [[Gantt - projects.png|Gantt-диаграмма]] для проектов
	- Основывается на метаданных `start` и `end`
- Добавлено [[kanban for bases.png|интерактивное Kanban-отображение]] для Bases
	- Для этого установлен плагин [Board view](https://github.com/seventhxiv/obsidian-board-view)
	- Разработчики тянут, поэтому решил найти замену
- Вернул [[status indicators.png|индикаторы статусов]] вокруг заметок
- Добавлены новые шаблоны, которые вставляются по `Alt + E`
	- `periodic - random questions` генерирует 3 рандомных вопроса из 500+ выборки
		- На случай, если вы останетесь на необитаемом острове и вам нужно будет о чём-то каждый день рефлексировать, чтобы не сойти с ума
	- `periodic - start (...)` простые шаблоны для старта выбранной периодической заметки
- Добавлен сниппет `mobile.css`, который на телефоне [убирает](https://forum.obsidian.md/t/revert-new-mobile-floating-and-rounded-ui/110107) дефолтные закругления

> [!info]- Рекомендуемые плагины
> Эти плагины могут органично вписаться в хранилище: 
> - [Virtual Linker](https://obsidian.md/plugins?id=virtual-linker)
> 	- Подсвечивает незалинкованные заметки
> 	- Плагин прямым образом влияет на повышение связности хранилища
> - [Similar Notes](https://obsidian.md/plugins?id=similar-notes)
> 	- ИИ плагин, который на основе эмбедингов высчитывает похожие заметки
> 	- Мне он нравится, так как он [[similar notes - example.png|органично вписывается в интерфейс]]
> 	- Использование топовых моделей через OpenRouter стоит копейки (буквально)
> - [Graph Analysis](https://obsidian.md/plugins?id=graph-analysis) + [NLP](https://github.com/SkepticMystic/nlp)
> 	- На основе расчета различных метрик выстраивает список, который позволяет находить несвязанные заметки
> 	- Если вы научитесь пользоваться заморозкой отображения, то это сильно поможет при работе с [[Obsidian Vault - FAQ#Discourse Graph|дискурс-графом]]
> 	- Версия с [последними изменениями](https://t.me/flowing_abyss_chat/12129)
> - [Inline AI](https://obsidian.md/plugins?id=inlineai)
> 	- Выделяете текст и просите ИИ его как-то обработать
> 	- Удобен для исправления грамматики, пунктуации и орфографии
> - [Latex Suit](https://obsidian.md/plugins?id=obsidian-latex-suite)
> 	- Для быстрого ввода формул в LaTeX
> - [[Obsidian Vault - FAQ#Obsidian Terminal|Terminal]]
> 	- Интегрирует терминал, чем делает взаимодействие с терминальными агентами удобнее 

> [!info] Обновление
> - Обновите Obsidian до `Obsidian >= 1.12.4` версии
> - Обновление с `5.x.x` на `6.0.0` делается через [[upgrade vault using a script.mp4|скрипт]]

# 5.1.1

- Обновлены плагины
- Исправлена проблема пустых ссылок в шаблоне для Zotero
- В `default` воркспейс добавлена панель [Spaced Repetition](https://github.com/st3v3nmw/obsidian-spaced-repetition)
- Отрефакторены `home/databases/*.base`
- Удалена `meta-notes.base`, так как она нигде не использовалась
- В inbox не будут отображаться заметки, имеющие категорию
- Увеличена задержка прыжка курсора при создании периодических заметок через панель `Alt+P`
- Панель [Editing Toolbar](https://github.com/PKM-er/obsidian-editing-toolbar) теперь прозрачная

> [!info] Обновление
> - Обновление с `4.0.0`/`5.x.x` на `5.1.1` делается через [[upgrade vault using a script.mp4|скрипт]]

# 5.1.0

- Обновлены плагины и тема
- Удалён плагин [Frontmatter Markdown Links](https://github.com/mnaoumov/obsidian-frontmatter-markdown-links)
	- В Obsidian `1.11.4` появилась нативная поддержка Markdown-ссылок во frontmatter, поэтому плагин больше не нужен
- Dashboard ведёт на 2026
- В `hotkeys` добавлено больше ссылок
- Обновлены настройки [Context Command Hider](https://github.com/mara-li/obsidian-context-menu-hider) 
- Обновлены настройки [Metadata Menu](https://github.com/mdelobelle/metadatamenu)
- Уменьшен Search Delay в [Another Quick Switcher](https://github.com/tadashi-aikawa/obsidian-another-quick-switcher)

> [!info] Обновление
> - Обновление с `4.0.0`/`5.0.0` на `5.1.0` делается через [[upgrade vault using a script.mp4|скрипт]]

# 5.0.0

- Обновлены плагины
- Изменена [[base16-default-dark.png|базовая тема]] на [Base16 Default Dark](https://github.com/flowing-abyss/obsidian-base16-default-dark)
	- Обновлены цвета в [Obsidian List Callouts](https://github.com/mgmeyers/obsidian-list-callouts)
	- Обновлены цвета для [Supercharged Links](https://github.com/mdelobelle/obsidian_supercharged_links)
	- Отрефакторены сниппеты
		- В хранилище остались специфичные для него сниппеты
		- Это значит, что вы можете попереключаться на другие темы
	- Удалён плагин [Style Settings](https://github.com/mgmeyers/obsidian-style-settings), т.к. в нём нет больше необходимости
	- [[hover-metadata.png|Свойства будут отображаться]] в заметке при наведении мышки на название
- Удалён плагин [Better Footnotes](https://github.com/aidenlx/better-fn)
	- Obsidian теперь корректно отображает сноски и без него
- Удалены плагины [Better Search Views](https://github.com/ivan-lednev/better-search-views) и [Obsidian Query Control](https://github.com/reply2za/obsidian-query-control)
	- Оба плагина приводят к сильным лагам при большом количестве элементов
- Удалён плагин [Lazy Plugin Loader](https://github.com/alangrainger/obsidian-lazy-plugins)
	- Его использование больше не увеличивает скорость загрузки хранилища
- Удалён плагин [Note Aliases](https://github.com/pulsovi/obsidian-note-aliases)
	- Его функционал заменен командой в QuickAdd
- Удалён плагин [Better Link Inserter](https://github.com/salmund/obsidian-better-link-inserter)
	- Его функционал заменен командой в QuickAdd
- Удалён плагин [Hotkeys for specific files](https://github.com/Vinzent03/obsidian-hotkeys-for-specific-files)
	- Его функционал заменен скриптом `templates/openFile.js` для QuickAdd
- Удалён плагин [Quiet Outline](https://github.com/guopenghui/obsidian-quiet-outline), т.к. он не является критическим
	- Команды для навигации по заголовкам заменены на команды в QuickAdd
- Удалён плагин [Smarter Markdown Hotkeys](https://github.com/chrisgrieser/obsidian-smarter-md-hotkeys)
	- Используемые из него команды заменены на команды в QuickAdd
- Удалена [[filter panel.png|фильтрующая панель]]
	- Она значительным образом тормозит интерфейс в большом хранилище
	- Для типичных ситуаций сделаны [[different-views-of-bases.png|отдельные отображения в Bases]]
	- Для сложных фильтраций используйте [встроенный интерфейс Bases](https://youtu.be/o_h5HC8yAeU?t=480)
	- Удалён плагин [Meta Bind](https://github.com/mProjectsCode/obsidian-meta-bind-plugin), т.к. в нём больше нет необходимости
- Обновлены стили в [Dynamics Highlights](https://github.com/nothingislost/obsidian-dynamic-highlights)
- Обновлены настройки [Linter](https://github.com/platers/obsidian-linter)
- Шаблоны для импорта источников из Zotero объединены в один шаблон
	- Теперь в тело заметки будут сразу выгружаться аннотации
	- Данный шаблон будет также работать при [[zotero-mass-import.png|массовом импорте источников]]
	- [[Obsidian-and-Zotero-metadata-sync|о согласовании метаданных Obsidian и Zotero...]]
- Включены обратные ссылки внизу заметки
	- Также применен [[minimalist-backlinks.png|минималистичный стиль]], чтобы было легче считывать и быстрее навигироваться
- Canvases будут складываться в `📁 files`
- Добавлен сниппет `dark-print.сss` для тёмной печати
- Обновлены workspaces и удалён `mobile`
- Оптимизированы настройки для быстрого переключателя
- Упразднён тег `mark/fleeting`
	- В inbox будут отображаться заметки (`#note`), которые не имеют входящих и исходящих ссылок
		- Если заметка находится в контексте, то она уже не fleeting
		- Это уменьшает рутину и при этом решает проблему заметок-сирот
	- Если вы хотите отметить заметки, то используйте `mark/bookmark`. Они будут отображаться в той же таблице, но на другом отображении
- Упразднена логика с уникальными днями через заголовки
	- Используйте в Inbox вкладку Periodic для обзора дневника
- Отрефакторены `home/databases/*.base`
- В меню `Alt+P` команды для `notes`, `sources`, `projects`, `people`, `high-notes` будут сразу вести на базы данных
- `Today` и `Upcoming` будут выглядеть минималистичнее
- При добавлении лога, идеи или задачи через `Alt+I` появится небольшое уведомление
- Вернул переключатель хранилищ и кнопки для открытия боковых панелей 😀

> [!info] Обновление
> - Обновление с `4.0.0` на `5.0.0` делается через [[upgrade vault using a script.mp4|скрипт]]

# 4.0.0

- Обновлены плагины и тема
- Удалён плагин [Better Command Palette](https://github.com/AlexBieg/obsidian-better-command-palette), т.к. его функционал появился в [Another Quick Switcher](https://github.com/tadashi-aikawa/obsidian-another-quick-switcher)
- Добавлена стилизация задач [[tasks-as-blocks.png.png|в виде блоков]]
- Отрефакторены [[refactoring-today.png|today]] и [[refactoring-upcoming.png|upcoming]]
- Отрефакторен [[refactoring-inbox.png|inbox]]
	- Сделан один поиск для всех вкладок
	- Добавлены относительные время редактирования и создания
	- Заметки группируются по директории
	- Внизу отображается количество заметок
- Обновлено главное меню `Alt+P`
	- Добавлена вкладка с заметкой [[notes-database.png|notes]]
	- Добавлены [[comments-in-the-main-menu.png|комментарии]] в меню
	- Удалено меню для Longform-проектов
	- Удалено меню для передвижения по дневниковым заметкам
	- В меню `new -> inbox` сделаны более [[quick-notes-in-the-main-menu.png|подробные названия]]
	- Убраны назойливые предупреждения при создании заметок вне контекста
- При открытии периодических заметок курсор будет перемещаться в конец
- Улучшена работа [[filter panel.png|фильтрующей панели]]
	- Панель работает реактивным образом - какие есть значения в отображаемой таблице, такие будут и в фильтре
	- Добавлена возможность фильтровать [[filter-by-empty-values.png|по пустым значениям]] (`∅ empty`)
	- Добавлены [[two-filtration-modes.png|два режима фильтрации]]
		- "OR" - *отфильтровать, где есть или то, или то*
			- `[ ... OR ...] AND [ ... OR ...] AND ...`
		- "AND" - *отфильтровать, где есть и то, и то одновременно*
			- `[ ... AND ...] AND [ ... AND ...] AND ...`
- Добавлен новый workspace [[workspace-for-search.png|search]]
- При выборе типа источника будет показываться [[short-menu-for-sources.png|сокращённое меню]]
- Структура категории [[refactoring-the-display-of-the-category-structure.png|отображается плотнее и нагляднее]]
- Изменены [[accent-colors.png|цвета акцентов]] для разных начертаний
- Изменено [[card-divider.png|отображение разделителя]] для карточек (`—`)
- Из [Spaced Repetition](https://github.com/st3v3nmw/obsidian-spaced-repetition) убран разделитель для однострочных карточек
- Удалены мета-шаблоны и скрапперы
	- Для быстрого добавления контента используйте [[obsidian web clipper|Obsidian Web Clipper]]
- В `sources` заменена вкладка `🎉 fun` на `✨ collection`
	- На ней будут отображаться источники, у которых в метаданных есть `cover`
	- Стиль отображения будет почти такой же минималистичный [[film-collection.png|как у Letterboxd]]
- В sources и projects добавлены [[kanban-for-projects.png|kanban-отображения]], сделанные на основе callout
- Улучшено описание работы префиксов, а также добавлена [[subcategories-for-prefixes.png|возможность делать подкатегории]] (вложенные колоды)
- Таблицы стали [[metadata-source.png|более информативными]]
- Отрефакторен шаблон категорий (при обновлении категории будут пересозданы)
- Улучшены разделители [[separator-for-tags-in-the-menu.png|в меню выбора тегов]]
- [[canvas-refactoring-based-on-periodic-notes.png|Добавлены canvases]] для 2024 и 2026 годов
	- Сделана навигация между годами
	- В месяцах несуществующие заметки будут отображаться серым
- Логика для создания/изменения/удаления префиксов у задач вынесена в отдельный скрипт `task.js`
	- К задачам [[prefix-subtasks-and-comments.png|автоматически будет добавляться]] префикс подзадачи `⤵️` и комментария `💬`
- Удалена папка `templates/insert` . Все шаблоны из неё [[inserts-and-commands.png|перенесены в QuickAdd]]
- Улучшен шаблон для создания alias (`Alt+A`)
	- Если есть выделенный текст, то при нажатии на хоткей он добавится в aliases
- У людей появилось [[people-description.png|дополнительное текстовое поле]] `description` 
- Обновлен список [[excluded-files.png|исключенных файлов]], чтобы улучшить релевантность поиска
- Заметки с `relevant: true` будут группироваться [[relevant-grouping.png|вверху таблиц]]
- Обновлены настройки для [Context Command Hider](https://github.com/mara-li/obsidian-context-menu-hider) (используйте английский интерфейс для Obsidian)

> [!info] Обновление
> - Обновите Obsidian до `>= 1.10.3` версии
> - Обновление с `3.1.0` на `4.0.0` делается через [[upgrade vault using a script.mp4|скрипт]]

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
> - Обновление с `3.0.0` на `3.1.0` делается [[upgrade-from-version-3.0.0-to-3.1.0|заменой файлов]]
> - Обновление с `2.1.0` на `3.1.0` делается через [[upgrade vault using a script.mp4|скрипт]]

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
> Обновление с `2.1.0` на `3.0.0` делается всё также через [[upgrade vault using a script.mp4|скрипт]]

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
- На телефоне меню `alt+p` вызывается через свайп сверху-вниз
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
- При выборе `TOC` в callout menu (`alt+shift+c`), будет сразу вставлено оглавление
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
- Периодические заметки с тегом `mark/ignore` не будут отображаться на dashboard
- Модальное окно Metadata Menu имеет теперь фиксированный размер
- Улучшено регулярное выражение для long-dash в Dynamic Highlights
- Скрыта кнопка ведущая на периодическую заметку на панели метаданных
- Добавлен тег `mark/ai` и [[css styles for AI generated notes.png|стилизация для него]]
- Добавлена возможность [[dynamic task grouping.png|динамического изменения группировки у задач]]

___

💔 Ломающие изменения:
- [[breaking change with aggregation of tasks by category|В категориях не нужно создавать заметку для агрегации задач]]
	- Удалена папка `periodic/categories`
- [[removed the restriction related to the prohibition of spaces in categories|В категориях можно и нужно использовать пробелы]]
- У всех заметок, связанных с задачами, убрано нижнее подчёркивание в начале названия
	- Типы задач (`periodic/statuses`) будут созданы заново с новым шаблоном и без `_` в начале названия

[[obsidian web clipper|Obsidian Web Clipper]]

> [!info] Обновление
> [[upgrade vault using a script.mp4|Как обновиться с 1.0.0 на 2.Х.Х]]

# 1.0.0

Это базовая версия, которая шла изначально вместе с видеоинструкцией.
