import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MenuItem from './component/MenuItem';
import Menu from './component/Menu'
import InputForm from "./component/InputForm";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let menuItemWording=[
    "測試文字1",
    "測試文字2",
    "測試文字3",
    "測試文字4"
];

let menuItemArr = menuItemWording.map((wording) => <MenuItem text={wording}/>);

root.render(
    <Menu title={"測試標題"}>{menuItemArr}</Menu>
    // <InputForm></InputForm>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
