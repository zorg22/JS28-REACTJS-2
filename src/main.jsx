import React from 'react';
import ReactDOM from 'react-dom';
import Beer from './beer';
import BeerComment from './beerComment';

const App = () => {
    return (
        <section>
            <h1>Test</h1>
            <Beer />
            <BeerComment></BeerComment>
        </section>
    )
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
);