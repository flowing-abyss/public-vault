---
tags:
  - note/basic/primary
aliases:
  - "Передача файла из n8n в Obsidian через WebDAV"
url: "[flowing-abyss](https://flowing-abyss.com/sending-a-file-from-n8n-to-Obsidian-via-WebDAV)"
created: 2025-08-18T17:18:11+07:00
updated: 2026-01-29T17:15:33+07:00
cssclasses:
  - small-title
share: true
title: "Передача файла из n8n в Obsidian через WebDAV"
---

Paul Dickson [выпустил ролик](https://youtu.be/NyL0ovWYj7M), в котором показал, как отправлять файлы из n8n в Obsidian с помощью плагина [Local REST API](https://obsidian.md/plugins?id=obsidian-local-rest-api). Я же покажу, как отправлять файлы с помощью WebDAV.

### Общая схема работы

![[sending a file from n8n to Obsidian via WebDAV - diagram.png]]

Алгоритм работы довольно прост:
1. Из n8n файл отправляется через `HTTP`-запрос методом `PUT` на *сервер*, где настроен WebDAV
2. Хранилище Obsidian на *сервере* синхронизируется с локальным хранилищем пользователя через [Syncthing](https://hub.docker.com/r/linuxserver/syncthing)

В данной схеме предполагается, что у пользователя есть *персональный сервер*.

### WebDAV с помощью Docker

Как мне кажется, самый простой и легко воспроизводимый способ добавить WebDAV — использовать Docker.

Я предлагаю использовать [этот](https://github.com/maltokyo/docker-nginx-webdav) контейнер. Минимально жизнеспособный `docker-compose.yml`:
```yaml
services:
  webdav-obsidian:
    image: maltokyo/docker-nginx-webdav
    container_name: webdav-obsidian
    restart: unless-stopped
    environment:
      - USERNAME=username
      - PASSWORD=pass
    ports:
      - "83:80"
    volumes:
      - /path/to/the/vault:/media/data
```
- `username` — имя, которое будет использоваться при аутентификации
- `pass` — пароль, который будет использоваться при аутентификации
- `/path/to/the/vault` — путь к хранилищу на сервере
	- Чтобы избежать проблем с правами, выполните команду `sudo chmod -R a+rwX /path/to/the/vault`
	- Эта команда даст всем права на чтение и изменение файлов
	- В общем случае это небезопасно, но для персонального сервера это непринципиально

Доступ к WebDAV будет по адресу `http://<your-server-ip>:83`. Я бы рекомендовал переадресовать на доменное имя с сертификатом, чтобы можно было обращаться к серверу, например, как к `https://webdav.domain.com`.

### Ноды в n8n

Пример нодов будет для случая, когда отправляется `MD-файл`. Для других типов файлов подход будет идентичным.

Итак, есть 3 нода:
![[sending a file from n8n to Obsidian via WebDAV - n8n to obsidian.png]]

- `Text`
	- [Edit Fields](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.set/)
	- В нём формируется текст, который нужно отправить
	- Например, можно добавить сложный frontmatter и ответ ИИ ([[sending a file from n8n to Obsidian via WebDAV - note template.png|пример]])
- `Text to MD`
	- [Convert to File](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.converttofile/)
	- Преобразование текста в MD-файл
- `Send to Obsidian`
	- [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/)
	- Отправка файла на сервер
	- На скрине файл отправляется в корень хранилища, но можно указать более точный путь

*После отправки файла можно, например, добавить нод, который оповестит в Telegram об успешно выполненном процессе.*

Вот такой простой способ отправлять файлы в своё хранилище. Если вы знаете, как это можно сделать ещё проще, то расскажите об этом в комментариях.
