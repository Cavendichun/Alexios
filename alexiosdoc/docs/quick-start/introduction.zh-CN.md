---
title: 简介
group:
  title: 简介
# translateHelp: true
---

## 开发初衷

目的是开发一款配置项极其简洁，<b>类 Nextjs</b>，没有大量的 api 和配置文档来拖慢开发进度的<b>启动器 + 打包器</b>，让初学者也能瞬间上手。不希望对现有的项目结构做任何的改造，只是换了一种启动方式。<b>不强制使用任何业务属性</b>，用户<b>不必因为一个启动器而去适应一种新的开发模式</b>，毕竟一个再好的思路也未必适合所有人。最好将一切用户不想关心的、没时间去关心的东西做到<b>自动化</b>，你只需要去关注你的业务代码，其他的就交给他吧。

## 功能

- 🗳️ 零配置或极少的配置即可开始项目，满足 80% 以上的企业级开发需求。
- 🚄 多核编译，缩短编译时间 50% 以上，减少不必要的等待时间。
- 🤖 自动的分包策略，js 懒加载，尽可能复用资源，兼容私有化部署，最大限度利用缓存。
- 📟 类 JSON 的 mock 数据结构，支持自定义 mock 逻辑，热插拔拦截接口请求。
- 📝 支持 css、less、sass、scss、stylus 的 CSS Modules，根据引入方式自动启用。
- 🧱 基于 react-app-polyfill，一键开启 IE9 以上的兼容。

## 环境要求

- Node 版本 > 8.6.0

## 未来计划

- 🤩 webpack@5.
- 🤩 启用物理缓存，极速的二次启动。
- 🤩 内置可选的功能性插件。
- 🤩 Websocket Mock.
- 🤩 内置脚手架。
- 🤩 ....