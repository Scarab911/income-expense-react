import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SpeechProvider } from '@speechly/react-client';
import App from './App';
import { Provider } from './context/context';

ReactDOM.render(
    <SpeechProvider appId='ce9aff5e-24dc-401f-8379-0933bee4b482' language='en-US'>
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root'));