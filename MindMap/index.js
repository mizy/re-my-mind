import 'react';
import ReactDom from 'react-dom'
import App from './app';
window.basePath = 'reminds';
ReactDom.render(<App />, document.querySelector("#root"))
