import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Builder } from '@builder.io/react';
import MyButton from './components/common/Mybutton';

Builder.init('1a19d785dcd548d6a427a21d0619697b');

Builder.registerComponent(MyButton, {
    name: 'MyButton',
    inputs: [
        {
            name: 'text',
            type: 'string',
            defaultValue: 'Click Me',
            required: true,
        },
        {
            name: 'variant',
            type: 'string',
            enum: ['primary', 'secondary'],
            defaultValue: 'primary',
        },
    ],
    defaultStyles: {
        padding: '10px 20px',
        borderRadius: '4px',
    },
    noWrap: true, // 避免被 div 包裹
    hideFromInsertMenu: false, // 显示在 Insert 菜单
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
