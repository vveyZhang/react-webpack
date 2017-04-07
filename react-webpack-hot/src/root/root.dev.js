import React,{Component} from 'react';
import {AppContainer} from 'react-hot-loader';
import App from '../components/app';

export default class Root extends Component{
    render(){
        return(
            <AppContainer>
                <App />
            </AppContainer>
        )
    }
}