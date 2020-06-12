---
group:
  title: 基本用法
order: 0
# translateHelp: true
---

# <strong>命令行参数</strong>

包含 <strong>dev</strong>，<strong>build</strong>，<strong>serve</strong> 三个指令，分别有一些命令行参数可以快速设置某些功能。

## <strong>dev</strong>

- <b>--port</b>:

  自定义端口号，默认 `3000`。

- <b>--open</b>

  是否自动打开浏览器，默认 `false`。

- <b>--mock</b>

  是否开启接口 mock，默认 `true`。设置 `--port=false` 可以一键关闭所有接口 mock。

- <b>--ie</b>

  最低兼容的 ie 版本，默认不兼容。支持 `9` 和 `11`。如：设置 `--ie=9` 则会自动在所有入口处引入兼容的 polyfill。

## <strong>build</strong>

- <b>--ie</b>

  最低兼容的 ie 版本，默认不兼容。支持 `9` 和 `11`。如：设置 `--ie=9` 则会自动在所有入口处引入兼容的 polyfill。

- <b>--analysis</b>

  是否显示产物分析页面，自动化部署慎用，会启动一个 server 阻塞当前进程。默认 `false`。

## <strong>serve</strong>

- 暂无