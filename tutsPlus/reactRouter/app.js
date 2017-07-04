import React from 'react';
import {render} from 'react-dom';
// import {Link, Route, Router} from 'react-router';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

var hashHistory = {}

const App = () => {
    return (
        <h2>{'TutsPlus - Welcome to React Routing Basic!'}</h2>
    );
};

const Navigation = () => {
    return (
        <section>
            <App />
            <ul>
                <li>{'Home'}</li>
                <li>
                    <Link to="/contact">{'Contact'}</Link>
                </li>
                <li>
                    <Link to="/about">{'About'}</Link>
                </li>
            </ul>
        </section>
    );
};

const About = () => {
    return (
        <section>
            <h2>{'Welcome to About!'}</h2>
            <Link to="/">{'Back to Home'}</Link>
        </section>
    );
};

const Contact = () => {
    return (
        <section>
            <h2>{'Welcome to Contact!'}</h2>
            <Link to="/">{'Back to Home'}</Link>
        </section>
    );
};

render(
    <Router>
        <Route
            component={Navigation}
            path="/"
        />

    </Router>,
    document.getElementById('app')
);
