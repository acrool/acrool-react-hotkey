import './App.css';

import {HotkeyPortal} from '@acrool/react-hotkey';
import {GridThemeProvider} from '@acrool/react-grid';
import {createElement} from 'react';

import Banner from './components/Banner';
import Loader from './components/Loader';
import Example from './views/Example';



function App() {
    return (
        <GridThemeProvider>
            <div className="App">
                <Banner/>
                <Example/>

                <HotkeyPortal
                    renderLoader={() => createElement(Loader, {width: '30px', height: '30px'}, null)}
                    isVisibleQueueKey={true}
                    defaultMessage="Loading..."
                />

            </div>
        </GridThemeProvider>
    );

}

export default App;
