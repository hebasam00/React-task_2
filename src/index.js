import React from 'react';
import ReactDOM from 'react-dom/client';

import FormComponent from './task1'; 
import CounterApp from './task2'; 
import FetchDataComponent from './task3'; 


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <FormComponent />
        <CounterApp />
        <FetchDataComponent />
    </React.StrictMode>
);
