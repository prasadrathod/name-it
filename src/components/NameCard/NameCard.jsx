import React from 'react';
import './NameCard.css'

const nameCheapURL = 'https://www.namecheap.com/domains/registration/results/?domain='
const NameCard = ({ suggestionName }) => {
    return (
        <a className="card-link" href={`${nameCheapURL}${suggestionName}`} target="_blank">
            <div className="result-name-card">
                <p className="result-name">{suggestionName}</p>
            </div>
        </a>
    );
}

export default NameCard;