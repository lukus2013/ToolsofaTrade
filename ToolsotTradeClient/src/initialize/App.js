import { useState } from 'react';
import Routing from '../routes';
import Navigation from '../components/Navigation';

function App() {
    return(
        <div className="App">
            <Navigation />    
            <Routing />
        </div>
    );
}

export default App;