# re-my-mind
基于my-mind改造的脑图编辑器框架

# demo
[basic](https://mizy.github.io/re-my-mind/dist/index.html)

[<img src="https://github.com/mizy/re-my-mind/blob/master/snapshot.png?raw=true" alt="Koni" width="800">](https://mizy.github.io/re-my-mind/dist/index.html)

# 基于My-Mind改造部分
* 部分css样式改造
* 部分canvas渲染逻辑改造
* 工程化改造
* 去除UI依赖
* 放大缩小改为transform方式
* 具体效果请查看dist下index.html的demo

# 安装
```sh
npm i re-my-mind --save
```
# 直接引用
```html
<script src="https://unpkg.com/re-my-mind@${version}/dist/re-my-mind.js"></script>
```

# 调用
```
MM.App.init(document.getElementById("root"),{
	rootName:"未命名",
	data:{} // 数据
})
```

# 导出数据
```
MM.App.map.toJSON();
```