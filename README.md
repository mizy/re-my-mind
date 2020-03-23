# [re-my-mind](https://mizy.github.io/re-my-mind/)

* 基于 [my-mind](http://my-mind.github.io/) 改造优化的脑图编辑器框架
* base on my-mind

# demo

[basic](https://mizy.github.io/re-my-mind/dist/index.html)

![snapshot](https://mizy.github.io/re-my-mind/snapshot.png)


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

-   样式优化
-   改为对称居中布局
-   加入 map-right,map-left 布局
-   webpack工程化改造
-   去除 UI 依赖
-   放大缩小改为 transform 方式
-   增加多行文本功能
-   增加xmind解析
-   优化1000节点以上的dom树性能
-   优化canvas绘制线逻辑
-   增加备注功能
-   增加节点布局模式
-   具体效果请查看 dist 下 index.html 的 demo
-   添加主题支持
