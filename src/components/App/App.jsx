import React, { useState } from 'react';
import './App.css'
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
function App() {
    const [headerText, setHeaderText] = useState("Name-IT");
    return (
        <div>
            <Header headTitle={headerText} />
            <SearchBox />
        </div>
    )
}

export default App;