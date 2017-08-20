---
title: Material 主题公共 CDN 服务
tags:
  - CDN
categories:
  - Material
date: 2017-8-22 1:25:00
updated: 2017-8-22 1:25:00
---

Material 主题新的 MaterialCDN 公共 CDN 服务。

<!-- more -->

为了加速主题的访问，Material 主题于 1.3.2 版本开始，内置了 MaterialCDN 功能的支持。

为了满足没有自己的 CDN 的用户的加速需求，Material 主题将于 1.5.0 版本开始正式支持使用第三方公共 CDN 服务加载第三方库如 jQuery、Material-Design-Icons，NProgeres 等，届时[主题文档](https://material.viosey.com)将会介绍。

对于 Material 主题中并未使用的第三方库文件如 `material.css` `style.css` 等，现在也可以使用全新的公共 CDN！

> [jsDelivr](https://www.jsdelivr.com) 是一家公共 CDN 服务，支持从 GItHub Release 和 NPM 抓取文件并由 CDN 分发，拥有国内外 1000+ 节点，由网宿、CloudFlare、Fastly、MaxCDN 等多家著名 CDN 服务商提供支持。阅读 [jsDelivr 的文档](https://github.com/jsdelivr/jsdelivr#usage)以了解 jsDelivr 的更多用法。

请确保你的 Material 主题为当前最新版，然后在 主题配置文件 中找到 materialcdn，填入 `https://cdn.jsdelivr.net/gh/viosey/hexo-theme-material@latest/source` 即可使用 Material 主题的公共 CDN 服务。

> 你也可以修改填入的 URL，使用指定版本的 Material 主题的文件。

在 Material 主题中，如果对同一个文件同时在 主题配置文件 中配置了多个加载来源，那么 Material 主题采用的优先级顺序是：

```
Vendors > MaterialCDN > (Google Fonts > Google Fonts Proxy) > Origin
```
