import 'react';
import ReactDom from 'react-dom'
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import App from './app';
window.basePath = 'reminds';
ReactDom.render( <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>, document.querySelector("#root"))
