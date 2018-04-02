import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAXKyYfKGAGVuZHDP1T0AvYfEwsnswU2d4'

const App = function () {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDom.render(<App />, document.querySelector('.container'));
