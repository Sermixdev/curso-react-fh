import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HelloWorldApp } from './HelloWorldApp';
import { CounterApp } from './CounterApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp title='CounterApp' value={0} />
        {/* <HelloWorldApp /> */}
    </React.StrictMode>
);
