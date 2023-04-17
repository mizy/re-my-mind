# [remind-editor](https://mizy.github.io/re-my-mind/)

Remind is a visual framework that supports rendering and editing tree-structured data in various layout types.

* Supports Canvas and SVG dual-engine rendering to improve rendering performance.
* Supports Docker deployment and NAS deployment.
* Does not rely on browser layout capabilities to enhance performance, large files open in seconds.
* Highly extensible, supports custom nodes and themes.
* Supports extensible animations.

[查看中文版本](readme-zh.md)

# Demo

[Complete DEMO](https://mizy.github.io/re-my-mind/dist/demo.html)

[base](https://mizy.github.io/re-my-mind/public/base.html)

![snapshot](https://mizy.github.io/re-my-mind/snapshot.png)

![snapshot](https://mizy.github.io/re-my-mind/snapshot1.png)

```
npm run start
```

# Docker Start

```
docker run -d -v your_data_path:/reminds -p 7001:7001 mizydocker/remind
```

# Install

```sh
npm i remind-editor --save
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
	data:{} // data
})
```

# Export Data

```
remind.page.toJSON()
```

[查看中文版本](readme-zh.md)
