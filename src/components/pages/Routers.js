import React from 'react'
import Home from './Home';
import Contact from './Contact';
import Main from './Main';
import { Routes, Route, Router } from 'react-router';

function Routers() {
    return (
        <div>
            <Router>
                <Route exact path='/'> < Home /></Route>
                <Route exact path='/Contact' element={< Contact />}></Route>
            </Router>
        </div>
    )
}

export default Routers