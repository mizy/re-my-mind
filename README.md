# [remind-editor](https://mizy.github.io/re-my-mind/)

remind是一个支持渲染树结构数据，并对其进行各种布局类型渲染和编辑的可视化框架
* 支持canvas,svg双擎渲染，提升渲染性能
* 支持docker部署，支持Nas部署
* 不依赖浏览器布局能力，增强性能，大型文件秒开
* 高拓展性，支持自定义节点和主题
* 支持拓展性动画,


# demo

[完整DEMO](https://mizy.github.io/re-my-mind/dist/demo.html)

[base](https://mizy.github.io/re-my-mind/public/base.html)

![snapshot](https://mizy.github.io/re-my-mind/snapshot.png)

![snapshot](https://mizy.github.io/re-my-mind/snapshot1.png)

```
npm run start
```
# Docker启动

```
docker run -d -v your_data_path:/reminds -p 7001:7001 mizydocker/remind
```

# Install安装

```sh
npm i @tntx/remind --save
```


# Usage

```html
<script src="https://unpkg.com/remind-editor@${version}/dist/remind.js"></script>
```
```sh
npm i remind-editor --save
import Remind from 'remind-editor'
```

# Start

```
import Remind from 'remind-editor';

new Remind(document.getElementById("root"),{
	data:{} // 数据
})
```

# Export Data

```
remind.page.toJSON()
```
 