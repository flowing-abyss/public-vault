---
title: "changes to the evergreen"
cssclasses:
  - no-inline-title
comments: false
---

Заметки, которые относятся к Evergreen workflow будут отображаться в inbox в виде таблиц:
![[changes to the evergreen notes - example 1.png]]
Рядом с названием заметки отображается количество входящих и исходящих ссылок. В Genesis будут отображаться high-notes, проекты или источники, в которых упоминается соответствующая заметка.

___

Также были добавлены [Feynman's Favorite Problems](https://youtu.be/Mtw9zmK6RK8):
![[changes to the evergreen notes - example 2.png]]

Чтобы создать такую проблему, нужно указать в заметке тег из Evergreen workflow и `#note/discourse/question`. Например:
```yaml
---
tags:
  - note/basic/seed
  - note/discourse/question
---
```
