# [re-my-mind](https://mizy.github.io/re-my-mind/)

* 基于 my-mind 改造的脑图编辑器框架
* base on my-mind

# demo

[basic](https://mizy.github.io/re-my-mind/dist/index.html)

![snapshot](https://mizy.github.io/re-my-mind/snapshow.png)


# Install

```sh
npm i re-my-mind --save
```

# Usage

```html
<script src="https://unpkg.com/re-my-mind@${version}/dist/re-my-mind.js"></script>
```
```sh
npm i re-my-mind --save

```

# Start

```
import 're-my-mind';

MM.App.init(document.getElementById("root"),{
	rootName:"未命名",
	data:{} // 数据
})
```

# Export Data

```
MM.App.map.toJSON();
```

# 基于 My-Mind 改造部分

-   部分 css 样式改造
-   改为对称居中布局
-   加入 map-right,map-left 布局
-   工程化改造
-   去除 UI 依赖
-   放大缩小改为 transform 方式
-   具体效果请查看 dist 下 index.html 的 demo