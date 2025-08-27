---
tags:
  - project/single
  - category/public
aliases: []
status: 📢
priority: 🇨
category:
  - "[[public]]"
meta:
  - "[[flowing-abyss]]"
problem:
creator:
production:
url: "[flowing-abyss](https://flowing-abyss.com/Description-of-Obsidian-Vault)"
cover:
published:
start: 2025-08-17
end: 2025-08-17
total_hours: 4
created: 2025-08-17T10:54:15+07:00
updated: 2025-08-24T20:42:51+07:00
title: "Obsidian Vault"
share: true
---

![Intro](https://youtu.be/Zc6ph-mw9wU)

%%
[[boosty_buy_now.png]]
[[telegram_discussion.png]]
[[new_changelog.png]]
%%

<div style="display: flex; gap: 20px; width: 100%; margin: auto 0 auto 0; box-sizing: border-box;">
  <a href="https://boosty.to/flowing-abyss/posts/c2e3d43f-c2bc-44e1-b771-77244a8cc8ee" style="flex:1; display: flex; align-items: center; justify-content: center; height: 70px;">
    <img src="boosty_buy_now.png" style="border:1px solid #EBEBEC; border-radius:8px; padding:7px; max-width: 100%; max-height: 56px; height:auto; box-sizing:border-box;">
  </a>
  <a href="https://t.me/thepresumptionofnaturalness/66" style="flex:1; display: flex; align-items: center; justify-content: center; height: 70px;">
    <img src="telegram_discussion.png" style="border:1px solid #EBEBEC; border-radius:8px; padding:7px; max-width: 100%; max-height: 56px; height:auto; box-sizing:border-box;">
  </a>
  <a href="https://flowing-abyss.com/obsidian-vault/changelog" style="flex:1; display: flex; align-items: center; justify-content: center; height: 70px;">
    <img src="new_changelog.png" style="border:1px solid #EBEBEC; border-radius:8px; padding:7px; max-width: 100%; max-height: 56px; height:auto; box-sizing:border-box;">
  </a>
</div>

> [!toc]+ Table of Contents
> - [[#Описание]]
> - [[#Что вы получите]]
> - [[#Скриншоты]]
> - [[#Дополнения]]

# Описание

Данное хранилище является технически продвинутой версией [демо-хранилища](https://t.me/thepresumptionofnaturalness/53). Однако вместе с новыми механиками, я также сделал большой упор на визуальный минимализм и на оптимизацию workflow (управлять всем хранилищем можно будет через один хоткей).

Отличия от демо-хранилища:
- Внедрена система префиксов, которая заметным образом ускоряет создание заметок
- Интегрирована логика интервальных повторений (через [Spaced Repetition](https://obsidian.md/plugins?id=obsidian-spaced-repetition) или [Obsidian to Anki](https://obsidian.md/plugins?id=obsidian-to-anki-plugin) – на выбор)
- Реализована [интеграция с Zotero](https://obsidian.md/plugins?id=obsidian-zotero-desktop-connector)
- Добавлена [система дел](https://habr.com/en/articles/833654/), которая сильно интегрирована в базу знаний
	- Добавлен мощный календарь для Tasks
	- Добавлена динамическая фильтрация задач
	- Добавлена сортировка по времени `⏰️`
- [Интегрирован плагин Breadcrumbs](https://habr.com/en/articles/806339/)
- [Добавлены Longform-проекты](https://habr.com/en/articles/789248/)
- Весьма сильно улучшено отображение заметок-категорий и внедрены ~~[интерактивные Dataview-таблицы](https://github.com/anareaty/dataview-interactive-views)~~ Bases с возможностью быстрой, динамической фильтрации
- Внедрена логика с дополнениями к источникам и проектам
- В качестве базовой темы используется [Shimmering Focus](https://github.com/chrisgrieser/shimmering-focus)

Чтобы не продолжать распыляться в ответах на вопросы, как можно структурировать информацию в таком хранилище, я решил записать видеоинструкцию.

В видео будет объяснено, как работают основные типы заметок в хранилище. Объяснение будет строиться **исключительно на примерах**. Таким подходом я хочу решить две проблемы: во-первых, примеры нагляднее объяснят, где данное хранилище будет уместно использовать; во-вторых, я хочу показать, что даже несмотря на разные контексты, система всё равно будет работать одинаково.

Примеры будут в следующих контекстах:
- Абитуриент/первокурсник биоинформатик *(чтение и заметки)*
- Начинающий программист, готовящийся к стажировке, и программист в корпорации *(проектная система)*
- Инди-программист *(структура хранилища)*
- ⭐ Историк-медиевист *(discourse graph)*
- ⭐ Менеджер с уклоном в аналитику *(обзоры и иерархические заметки)*
- ⭐ Физик-инженер в исследовательском институте *(longform projects)*

<font color="#72AEFD">⭐ Эти контексты я рассмотрю позже и при условии, если будет заметный интерес к хранилищу. Но не переживайте. Вам разбора и первых трёх контекстов хватит на года два-четыре.</font>

В рамках примеров будет рассмотрено какие элементы в системе стоит создавать и что можно в них делать. По ходу дела я отвечу на следующие вопросы:
- Как стоит читать
- Как строить структуру, чтобы организовывать свою работу
- Каким образом добываются заметки
- Как заметки помогают в проектах

Даже если вам вовсе не понравится демо-хранилище, то рабочие процессы, рассуждения, а также различные действия с заметками и их обоснование вам всё же могут пригодиться. Ну, и да. В видео также будут показаны разные и интересные технические штучки.

# Что вы получите

Всё описанное выше, как вы могли понять, небесплатное. В итоге за свои кровные вы получите две вещи:
1. Хранилище
2. Видеоинструкцию

Хотел бы сразу предупредить, что это <u>не</u> является курсом. Поэтому не надо ожидать, что вы в процессе гарантированно чему-то научитесь. Хоть я и буду в процессе аргументировать и объяснять свои действия, однако из этого не следует, что просто послушав, вы преисполнитесь и превратитесь в зверь-машину.

С другой стороны, не буду уж совсем преуменьшать потенциальную пользу видео. Вы увидите вещи, которые вероятно даже не предполагали, что можно сделать в "текстовом" редакторе. Вы увидите процессы, которые будут уходить сильно дальше и глубже, чем в популярных системах по типу PARA или LYT. О том, что данное хранилище является само по себе некоторой мета-структурой, которая будет упорядочивать другие структуры, я уж совсем молчу...

Отзывы, вопросы и комментарии я предлагаю оставлять [под постом](https://t.me/thepresumptionofnaturalness/66). Иначе говоря, вы можете задавать вопросы по видео, по хранилищу, можете прикреплять скрины, можете гневно (но культурно) проклинать за то, что потратили последние кровные на то, что вам оказалось ненужным. Всё это мы будем обсуждать в открытую.

# Скриншоты

![[obsidian vault - index.png]]
![[obsidian vault - contacts.png]]
![[obsidian vault - dynamic grouping.png]]
![[obsidian vault - hierarchy.png]]
![[obsidian vault - note.png]]
![[obsidian vault - panels.png]]
![[obsidian vault - projects.png]]
![[obsidian vault - quick switcher.png]]
![[obsidian vault - sorting tasks.png]]
![[obsidian vault - sources.png]]
![[obsidian vault - structure.png]]
![[obsidian vault - task calendar.png]]
![[obsidian vault - vault statistics.png]]
![[obsidian vault - calendar.png]]

# Дополнения

> [!example]- Тайм-коды
> <div style="max-width:520px;margin:32px auto 0 auto;font-family:sans-serif;">
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">00:00</span>
>     <span>Короткое введение</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">01:12</span>
>     <span>Студент биоинформатик</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">02:15</span>
>     <span>Создание категории</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">03:43</span>
>     <span>Точки входа</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">06:25</span>
>     <span>Индексная заметка</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">07:24</span>
>     <span>Мета-заметка</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:22px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">13:59</span>
>     <span>Учебный план (1st academic year)</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">18:47</span>
>     <span>Сопутствующие источники</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">22:03</span>
>     <span>Новые категории</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:22px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">32:59</span>
>     <span>Создание источника</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">34:32</span>
>     <span>Структура курса</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">35:33</span>
>     <span>Структура на основе заголовков</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">37:34</span>
>     <span>Конспекты в виде заметок</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">42:19</span>
>     <span>Знакомство с Breadcrumbs</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">47:51</span>
>     <span>Организация практики</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">50:19</span>
>     <span>Создание проектов</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:22px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">59:02</span>
>     <span>Заголовки + проекты</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">1:04:25</span>
>     <span>Sources</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">1:09:11</span>
>     <span>Понемногу к заметкам</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">1:11:35</span>
>     <span>О преимуществах Zotero</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">1:13:11</span>
>     <span>Создание источника в Zotero</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:22px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">1:18:39</span>
>     <span><a href="https://youtu.be/nNAXnE6SnJo" style="color:#29bbb1;text-decoration:underline;" target="_blank">Алгоритм чтения и формирования заметок</a></span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">1:36:10</span>
>     <span>Начинаем читать</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">2:15:30</span>
>     <span>Префиксы</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">2:26:21</span>
>     <span>Первая заметка (два процесса)</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">2:46:38</span>
>     <span>Продолжаем чтение (классификаторы)</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">3:45:43</span>
>     <span>Делаем заметки</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">4:45:17</span>
>     <span>Концентрация на смысле (marks)</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">5:08:08</span>
>     <span>Продолжаем чтение</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">5:38:19</span>
>     <span>⚔️</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">6:02:47</span>
>     <span>Продолжаем чтение</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">6:17:49</span>
>     <span>Добавление в систему дел</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:22px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">6:25:56</span>
>     <span>Продолжаем чтение</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">7:38:45</span>
>     <span>Делаем заметки</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:22px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">7:55:43</span>
>     <span>Резюмируем процесс чтения</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">8:16:32</span>
>     <span>Будущий корпорат или как попасть на стажировку</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">8:18:23</span>
>     <span>Мета-заметка как компания</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">8:20:01</span>
>     <span>Мета-заметка как классификатор (создание проекта)</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">8:34:46</span>
>     <span>Источники внутри проекта</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">8:39:18</span>
>     <span>Конечность проекта</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:22px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">8:50:49</span>
>     <span>Проработка проекта (статусы на # Заголовках)</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:24px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">9:08:08</span>
>     <span>Структурирование (структура коллекций в Zotero)</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:16px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">9:25:39</span>
>     <span>Корпорат</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">9:57:22</span>
>     <span>Инди-программист (entrepreneurship)</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:24px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">10:17:22</span>
>     <span>Development (иерархии)</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:24px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">10:38:30</span>
>     <span>Балансировка нагрузки</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">10:47:14</span>
>     <span>Main menu (alt+p)</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">10:58:36</span>
>     <span>Hotkeys</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:6px;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">11:06:32</span>
>     <span>Plugins</span>
>   </div>
>
>   <div style="display:flex;gap:14px;margin-bottom:0;">
>     <span style="width:82px;text-align:right;color:#20adbb;font-variant-numeric:tabular-nums;white-space:nowrap;flex-shrink:0;">11:42:50</span>
>     <span>Микроскоп</span>
>   </div>
>
> </div>

> [!info] Для тех, кто уже как-то, да использует моё демо-хранилище
> Теоретически все технические изменения можно внедрить путём копирования шаблонов, папки `.obsidian` и всех других сервисных папок. Но я так делать не рекомендую. Всё же основная мощь персональной системы не в её технической накрученности, а в общей способности агрегировать, структурировать и продуцировать информацию. Однако если вы всё же захотите что-то внедрить, то можете сделать на основе моих объяснений, которые будут даваться в процессе видео.

> [!info] Информация для новичков
> Несмотря на внешний минимализм системы, технических наворотов в ней будет довольно много. Если вы едва ли понимаете зачем нужен [frontmatter](https://help.obsidian.md/properties), как пишутся скрипты для [Templater](https://silentvoid13.github.io/Templater/introduction.html), как формируются ~~[Dataview](https://blacksmithgu.github.io/obsidian-dataview/)-запросы~~ конфиги для Bases или вы не можете открыть [css-сниппет](https://help.obsidian.md/snippets), чтобы пофиксить в нём ту или иную проблему, то предложенная система для вас будет, либо переусложнённой фигнёй, либо "недоступной" магией. Чтобы таких негативных исходов избежать, я бы предложил вам всё же потратить своё время и прочие ресурсы на изучение других, [более простых хранилищ](https://github.com/SoRobby/ObsidianStarterVault).<br><br>
> *Хотя есть* [_обратное мнение_](https://t.me/thepresumptionofnaturalness/66?comment=5086) *о том, что данное хранилище наооброт очень даже подойдет новичкам из-за его продуманности.*

> [!info] Про процесс чтения
> В видео будет ооооочень долгая часть с процессом чтения. Это связано с тем, что чтение сделано в стиле стрима, т.е. я буду читать и прям на ходу буду пытаться рассуждать и объяснять свои решения. Этот блок можно пропустить и посмотреть сразу как делаются заметки. Но я бы не рекомендовал ничего пропускать, т.к. разные части видео **не** являются независимыми друг от друга. К тому же, на мой взгляд, процесс чтения для большинства является большой проблемой. Если пропустить блок с чтением, то есть огромный шанс, что чтение так и останется проблемой и как следствие сам по себе процесс заметкотворчества станет не более, чем глупым коллекционированием.

> [!info]- Для тех, кто уже владеет хранилищем
> - <u>Английский язык</u>
> 
> Некоторые скрипты и плагины настроены с учётом того, что интерфейс на английском языке.
>
> - <u>Изменение шрифтов</u>
> 
> Шрифты жёстко заданы в сниппете `general-view.css`. Это сделано для того, чтобы у вас хранилище выглядело примерно также, как и на видео.
>
> Чтобы поставить свои шрифты, из сниппета вам нужно убрать вот [эти](https://t.me/thepresumptionofnaturalness_chat/3457) строчки.
>
> - <u>Импорт аннотаций из Zotero</u>
> 
> Я это явно нигде не сказал, но выгружаться будут только 4 цвета:
> ![[highlight colors in zotero.png]]
>
> - 🟩 key idea
> 	- главная или основная идея
> - 🟧 exact idea/term/example
> 	- точно сформулированная идея, справочная информация, значимый пример или термин
> - 🟪 well-spoken
> 	- отлично написано или просто забавно
> - 🟨 with references or requires clarification
> 	- аннотация имеющая подтверждение или наоборот нуждающаяся в подтверждениях/разъяснениях
> 
> Это ограничение можно использовать как возможность. Например, красным можно выделять ключевые слова (как я очень часто делал на видео), голубеньким — слова, [выражающие](https://t.me/thepresumptionofnaturalness_chat/4075) взаимосвязь, а серые — для [имитации оглавления](https://t.me/thepresumptionofnaturalness_chat/4444). Эти цвета выполнят свою функцию при анализе текста и навигации, но при этом они не будут засорять Obsidian.
>
> *Кстати, выбор таких цветов не имеет какой-то глубинной причины. Просто так получилось, что [[typical set of text highlighters.png|в наборах текстовыделителей]] часто идут именно эти цвета.*

<div style="display: flex; gap: 20px; width: 100%; margin: auto 0 auto 0; box-sizing: border-box;">
  <a href="https://boosty.to/flowing-abyss/posts/c2e3d43f-c2bc-44e1-b771-77244a8cc8ee" style="flex:1; display: flex; align-items: center; justify-content: center; height: 70px;">
    <img src="boosty_buy_now.png" style="border:1px solid #EBEBEC; border-radius:8px; padding:7px; max-width: 100%; max-height: 56px; height:auto; box-sizing:border-box;">
  </a>
  <a href="https://t.me/thepresumptionofnaturalness/66" style="flex:1; display: flex; align-items: center; justify-content: center; height: 70px;">
    <img src="telegram_discussion.png" style="border:1px solid #EBEBEC; border-radius:8px; padding:7px; max-width: 100%; max-height: 56px; height:auto; box-sizing:border-box;">
  </a>
  <a href="https://flowing-abyss.com/obsidian-vault/changelog" style="flex:1; display: flex; align-items: center; justify-content: center; height: 70px;">
    <img src="new_changelog.png" style="border:1px solid #EBEBEC; border-radius:8px; padding:7px; max-width: 100%; max-height: 56px; height:auto; box-sizing:border-box;">
  </a>
</div>
