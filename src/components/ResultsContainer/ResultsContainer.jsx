import React from 'react';
import './ResultsContainer.css'
import NameCard from '../NameCard/NameCard'
const ResultsContainer = ({ suggestions }) => {
    const names = suggestions.map((suggestion, index) => {
        return <NameCard suggestionName={suggestion} key={index} />;
    })
    return (
        <div className="results-container">
            {names}
        </div>
    );
}

export default ResultsContainer;