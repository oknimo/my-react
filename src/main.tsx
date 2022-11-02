import React from 'react'
import ReactDOM from 'react-dom/client'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import MyRouter from "./router";
import 'antd/dist/antd.css'
import { Provider } from "react-redux";
import { ConfigProvider } from 'antd';
import { store } from "./store";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ConfigProvider locale={zh_CN}>
      <MyRouter />
    </ConfigProvider>
  </Provider>
)