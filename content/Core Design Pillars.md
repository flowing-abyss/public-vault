---
tags:
  - note/basic/primary
  - category/knowledge_base
  - category/development
aliases:
  - GDD
  - pillars
cssclasses:
  - small-title
icon: 📝
color: "#70a0b5"
created: 2026-02-25T13:06:54+07:00
updated: 2026-04-16T20:06:12+07:00
description: "Как геймдизайнеры документируют игры: четырёхуровневая иерархия Pillar → Feature → Mechanic → Implementation на примере Factorio."
category:
  - "[[knowledge base]]"
  - "[[development]]"
url: "[flowing-abyss](https://flowing-abyss.com/Core-Design-Pillars)"
share: true
title: Core Design Pillars
comments: true
enableToc: false
---

В игровой индустрии существует классический подход к документированию игры. Любой игровой концепт декомпозируется через четыре последовательных уровня:

- Pillar
	- Feature
		- Mechanic
			- Implementation

**Pillar**[^1] – общая идея, яркий тезис, философский концепт, на котором стоит игра. Например, в Factorio это «Прогресс через оптимизацию».

**Feature** – глобальные системы, воплощающие pillar. Например, Переплавка, Энергоснабжение и Модульная система – каждая реализует идею оптимизации по-своему.

**Mechanic** – конкретные механики внутри фичи. Например, внутри Переплавки – Рецепты переплавки и Тиры печей.

**Implementation** – параметры, ограничения, формулы, преобразования, определяющие механику. Например, рецепт переплавки `iron-ore → iron-plate` или три конкретных типа печей с разными характеристиками.

Элегантная геймдизайн-схема печей в Factorio:
```
PILLAR: "Прогресс через оптимизацию"
│
├── FEATURE: Переплавка
│   │
│   ├── MECHANIC: Рецепты переплавки
│   │   └── IMPL: iron-ore → iron-plate
│   │
│   └── MECHANIC: Тиры печей
│       ├── IMPL: Каменная печь
│       ├── IMPL: Стальная печь
│       └── IMPL: Электрическая печь
│
├── FEATURE: Энергоснабжение
│   │
│   ├── MECHANIC: Потребление топлива
│   │   └── IMPL: формула
│   │
│   └── MECHANIC: Потребление электроэнергии
│       └── IMPL: формула
│
└── FEATURE: Модульная система
    │
    ├── MECHANIC: Установка модулей в слоты
    │   └── IMPL: ограничения
    │
    └── MECHANIC: Эффекты модулей
        ├── IMPL: Модуль скорости
        ├── IMPL: Модуль эффективности
        └── IMPL: Модуль продуктивности
```

Этот подход настолько изящно описывает любую игровую систему, что руки сами зачесались – сделал [хранилище в Obsidian](https://boosty.to/flowing-abyss/posts/bae511e1-24fe-4c1f-aac3-aaf29dcb28d3) именно под эту архитектуру.

[^1]: [Game Pillars and Values](https://www.charliecleveland.com/game-pillars/) - занимательная статья от геймдизайнера Subnautica
