import React,{Component} from 'react';
import Children from './children';
export default class App extends Component{
    render(){
        return(
            <div>
                <p> hello React webpack</p>
                <h1>webpack  React-hot</h1>
                <div> is ok ?</div>
                <Children />
            </div>
        )
    }
}
