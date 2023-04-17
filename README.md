# [remind-editor](https://mizy.github.io/re-my-mind/)

Remind is a visual framework that supports rendering and editing tree-structured data with various layout types. 

* It provides dual render engines of Canvas and SVG to improve rendering performance.
* It supports Docker deployment and NAS deployment.
* It is highly performant due to its independence from the layout ability of browsers, and can quickly load large files.
* It is highly extensible, supporting custom nodes and themes.
* It supports animated extensions.

# Demo

[Full Demo](https://mizy.github.io/re-my-mind/dist/demo.html)

[Base](https://mizy.github.io/re-my-mind/public/base.html)

![Snapshot](https://mizy.github.io/re-my-mind/snapshot.png)

![Snapshot](https://mizy.github.io/re-my-mind/snapshot1.png)

```
npm run start
```

# Docker Startup

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

# Startup

```
import Remind from 'remind-editor';

new Remind(document.getElementById("root"),{
	data:{} // Data
})
```

# Export Data

```
remind.page.toJSON()
```
