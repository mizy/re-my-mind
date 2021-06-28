# [re-my-mind](https://mizy.github.io/re-my-mind/)

 由于基于my-mind的第一版本存在各种问题，所以完全推倒重来，全新开发了这个版本，对比原先的my-mind,有以下特点
* canvas,svg双擎渲染
* 支持docker部署，支持Nas部署
* 不依赖浏览器布局能力，增强性能
* 高拓展性，支持自定义节点和主题
* 支持拓展性动画


# demo

[basic](https://mizy.github.io/re-my-mind/dist/index.html)

![snapshot](https://mizy.github.io/re-my-mind/snapshot.png)


# Install

```sh
npm i re-my-mind@2 --save
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
import Remind from 're-my-mind';

new Remind(document.getElementById("root"),{
	data:{} // 数据
})
```

# Export Data

```
remind.page.toJSON()
```
 