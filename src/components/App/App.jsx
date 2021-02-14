import React, { useState } from 'react';
import './App.css'
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
function App() {
    const [headerText, setHeaderText] = useState("Name-IT");
    const [headerExpanded, setHeaderExpanded] = useState(true);
    const handleInputChange = (searchText) => {
        setHeaderExpanded(!searchText);

    }
    return (
        <div>
            <Header headerExpanded={headerExpanded} headTitle={headerText} />
            <SearchBox onInputChange={handleInputChange} />
        </div>
    )
}

export default App;