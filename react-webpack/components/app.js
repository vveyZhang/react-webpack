import React,{Component,PropTypes} from 'react'
import {Router,Route,IndexRoute,Link} from 'react-router';
import {connect} from 'react-redux';
import {combineReducers} from 'redux';
import { render } from 'react-dom';
import {Btn} from './button.js'

export class App extends React.Component{
    state={
        name:'hello'
    }
    handlerClick(){
        this.setState({
            name:"hello React"
        });
    };
    render() {
        return (
            <div>
                <p onClick={this.handlerClick.bind(this)}>{this.state.name}</p>
            </div>
        )
    }
}