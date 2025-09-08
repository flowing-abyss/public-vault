---
tags:
  - note/basic/primary
aliases: []
url: "[flowing-abyss](https://flowing-abyss.com/MarkDB-Connect)"
created: 2025-08-18T13:27:42
updated: 2025-09-08T07:56:03+07:00
share: true
title: "MarkDB-Connect"
cssclasses:
  - small-title
---

[Плагин для Zotero](https://github.com/daeh/zotero-markdb-connect), который добавляет тег к элементу Zotero, если по нему есть заметка в Obsidian. Также он добавляет пункт в контекстное меню Zotero, который открывает соответствующую заметку в Obsidian.

Must-have плагин, если вы хотите улучшить интеграцию между Zotero и Obsidian.

### Настройка плагина

Данный плагин необходимо настроить для его корректной работы.

<u>1. Перейдите в настройки плагина</u>

Edit ➝ Settings ➝ MarkDB-Connect

<u>2. Выберете папку в хранилище Obsidian, где лежат заметки по источникам и также укажите фильтр для названия заметок</u>

![[MarkDB-Connect - folder.png]]

Примеры директорий:
- Для UNIX: `/home/flowing-abyss/data/vault/sources`
- Для Windows: `C:\Users\flowing-abyss\data\vault\sources`

**Первая опция** (`Default File Filter`) включена по дефолту. Она позволяет вычленить `citekey` из названия файла, если он назван как `@citekey.md`. Это самый быстрый способ, как можно сопоставить элементы в Zotero и заметки в Obsidian. Но у такого способа есть очевидный минус – в Obsidian будут ужасные названия у заметок.

**Вторая опция** работает через указание регулярного выражения. Причём будет две ситуации:
- *С захватывающей группой*. Если в регулярном выражении указать захватывающую группу (например, `^@(\S+)-.*\.md$`), то оно будет работать аналогично первой опции, но с большей гибкостью, позволяя создавать любые форматы имен файлов (например, `@citekey-название.md`).
- *Без захватывающей группы*. Если в регулярном выражении не использовать захватывающую группу (например, `^.+\.md$`), то сопоставление будет происходить по содержимому заметки.

<u>3. Выберите способ сопоставления по содержимому</u>

![[MarkDB-Connect - citekey.png]]

**Первая опция** (`BetterBibTex citekey - taken from YAML metadata`) включена по дефолту и она ищет в метаданных заметки `citekey` и соотвественно берёт ключ цитирования из него. (нежно подсветил)

```yaml /dalioBolshieDolgovyeKrizisy2021/
---
...
citekey: dalioBolshieDolgovyeKrizisy2021
...
---
```

**Вторая опция** (`BetterBibTex citekey - captured with custom RegExp`) ищет ключ цитирования по регулярному выражению во всей заметке.

Мне эта опция нравится больше, так как она позволяет сделать ссылку на элемент Zotero без необходимости дублирования ключа цитирования отдельными метаданными.

Регулярное выражение `zotero://select/items/@([\w.]+)` будет находить вот таким образом ключ цитирования:
```yaml /dalioBolshieDolgovyeKrizisy2021/
---
tags:
  - source/book
status: 
zotero: "[🇿](zotero://select/items/@dalioBolshieDolgovyeKrizisy2021)"
---

...
```

**Третья опция** (`Zotero-Item-Key - captured with custom RegExp`) делает тоже самое, что предыдущая, но только она отлавливает не *BetterBibTex citekey*, а *внутренний идентификатор*, который Zotero присваивает по умолчанию.

Например, регулярное выражение `^- local::.+\/items\/(\w+)\)` будет искать вот такие строки и доставать из неё идентификатор:
```md /GZ9DQ2AM/
- local:: [link](zotero://select/library/items/GZ9DQ2AM)
```

<u>4. Укажите название хранилища Obsidian</u>

![[MarkDB-Connect - vault name.png]]

<u>5.Укажите какой присваивать тег элементам в Zotero</u>

![[MarkDB-Connect - tag.png]]

Мне нравится использовать тег `💎`.

### Использование плагина

При загрузке плагин автоматически сихнонизирует элементы Zotero с заметками Obsidian.

Синхронизировать вручную можно из меню: Tools ➝ MarkDB-connect Sync Tags
![[MarkDB-Connect - sync tags.png]]

На этом всё.

<div style="display: flex; gap: 20px; width: 100%; margin: auto 0 auto 0; box-sizing: border-box;">
  <a href="https://t.me/flowing_abyss/68" style="flex:1; display: flex; align-items: center; justify-content: center; height: 70px;">
    <img src="telegram_discussion.png" style="border:1px solid #EBEBEC; border-radius:8px; padding:7px; max-width: 100%; max-height: 56px; height:auto; box-sizing:border-box;">
  </a>
</div>
