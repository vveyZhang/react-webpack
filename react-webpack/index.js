import React from 'react';
import { render } from 'react-dom';
import {App} from './components/app.js';
import {Router,Route,IndexRoute,Link} from 'react-router';
import {connect} from 'react-redux';
import {combineReducers} from 'redux';
let rootElement = document.getElementById('main')
render(
    <App />,
    rootElement
)