import React, { useState } from 'react';
import './App.css'
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const namer = require('@rstacruz/startup-name-generator')

function App() {
    const [headerText, setHeaderText] = useState("Name-IT");
    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [suggestions, setSuggestions] = useState([]);
    const handleInputChange = (searchText) => {
        setHeaderExpanded(!searchText);
        searchText.length ? setSuggestions(namer(searchText)) : setSuggestions([]);
    }
    return (
        <div>
            <Header headerExpanded={headerExpanded} headTitle={headerText} />
            <SearchBox onInputChange={handleInputChange} />
            <ResultsContainer suggestions={suggestions} />
        </div>
    )
}

export default App;