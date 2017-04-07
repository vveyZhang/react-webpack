import React,{Component,PropTypes} from 'react'
import {Router,Route,IndexRoute,Link} from 'react-router';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import {combineReducers} from 'redux';
export class Btn extends Component{
    constructor(props){
        super(props)
    }
    testClick(){
        console.log(2)
        console.log(this)
    }
    render(){
        const {...other} =this.props;
        return(
            <div onClick={this.testClick.bind(this)}><p>点击</p></div>
        )
    }
}