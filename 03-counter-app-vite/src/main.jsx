import React from 'react';
import ReactDOM from 'react-dom/client';

import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';
// import { CounterApp } from './CounterApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <CounterApp title='CounterApp' value={0} /> */}
        <FirstApp title="Hola, soy GOKU"></FirstApp>
    </React.StrictMode>
);
