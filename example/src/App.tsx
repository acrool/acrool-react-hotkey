import './App.css';

import {GridThemeProvider} from '@acrool/react-grid';

import Banner from './components/Banner';
import Example from './views/Example';



function App() {
    return (
        <GridThemeProvider>
            <div className="App">
                <Banner/>
                <Example/>
            </div>
        </GridThemeProvider>
    );

}

export default App;
