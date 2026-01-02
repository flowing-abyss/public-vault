---
tags:
  - note/basic/primary
aliases: []
url: "[flowing-abyss](https://flowing-abyss.com/Tana-style-Supertags-in-Obsidian)"
created: 2026-01-01T21:58:29+07:00
updated: 2026-01-01T23:27:09+07:00
share: true
title: "Супертеги Tana в Obsidian (прототип)"
comments: true
enableToc: false
---

Решил попробовать [Tana](https://tana.inc/), т.к. давно была мысль узнать, что такое **супертеги** и как это можно использовать в Obsidian.

Протыкал весь интерфейс. Посмотрел то, как продвинутые юзеры им пользуются. Поймал себя на мысли, что этот софт никогда не станет популярным, т.к. у него высокий порог входа, а конечный профит не лучше, чем у Notion. Но это лирика.

Далее я попробовал реализовать логику супертегов в Obsidian.

У Tana основной единицей является блок:
```
- блок
- ещё блок
```

Супертег определяет свойства блока:
```
- блок #Task
	 Task status: Backlog
	 Due date: 2026-01-01
```

В Obsidian основной единицей является `md`-заметка. Пример выше конвертируется в такой вид:
```yaml
заметка.md
---
tags:
  - Task
Task status: Backlog
Due date: 2026-01-01
---
```

Чтобы автоматизировать создание метаданных, можно заюзать [Metadata Menu](https://github.com/mdelobelle/metadatamenu). Суть в том, чтобы создать классы и привязать их к тегам.

```
📂 classes
├── Task.md (#Task)
├── Idea.md (#Idea)
├── Meeting.md (#Meeting)
└── ...
```

Настраиваем для этих классов желаемые метаданные.

Когда мы присвоим нужный "супертег" к заметке, то можно будет через плагин `Metadata Menu` добавить соответствующие свойства командой `Add missing fields at selection...`.

![[Tana-style Supertags in Obsidian.png]]

В Tana, конечно, количество кликов оптимизировано. Но в любом случае суть та же.

А теперь то, что Tana не сможет сделать – динамически изменяющееся отображение в заметке. Тут я просто покажу идею.

Делаем вот такой дефолтный шаблон:
```js
~~~dataviewjs
const type = dv.current().tags[0]
await dv.view(`views/${type}`)
~~~
```

Создаём вот такую структуру:
```
📁 views
├── 📁 Task
│   └── view.js
├── 📁 Idea
│   └── view.js
└── 📁 Meeting
    └── view.js

```

И внутри под каждый тип делаем своё отображение. Например, для `Task` можно вывести, сколько дней осталось до окончания в зависимости от указанного `Due date` в метаданных:
> [!code]
> ```js
> const due = dv.current()["Due date"];
> 
> if (due) {
>     const now = dv.date("now");
>     const diff = due.diff(now, ["days"]);
>     
>     const days = Math.ceil(diff.days);
> 
>     dv.span(days >= 0 
>         ? `Days left: ${days} days` 
>         : `Overdue by: ${Math.abs(days)} days`
>     );
> } else {
>     dv.span("No due date found.");
> }
> ```
> Пример вывода:<br>
> `Days left: 9 days`

Соответственно, для разных типов заметок будут свои запросы. При этом, когда тип (супертег) у заметки будет меняться, то запрос будет также изменяться.

Такой, в общем, прототип. Я так и не определил целесообразность использования такого подхода, но, может, у вас появятся идеи.
