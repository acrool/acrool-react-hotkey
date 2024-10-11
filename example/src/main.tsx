import './index.css';
import '@acrool/react-table/dist/index.css';
import '@acrool/react-table/dist/themes/acrool.css';
import '@acrool/react-grid/dist/index.css';

import {HotkeyScopeManagerProvider} from '@acrool/react-hotkey';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
    <HotkeyScopeManagerProvider>
        <App />
    </HotkeyScopeManagerProvider>
    // </React.StrictMode>,
);
