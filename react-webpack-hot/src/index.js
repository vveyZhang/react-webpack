import React from "react";
import {render} from 'react-dom';
import App from './root/Root';
const rtElement=document.getElementById('root');
try{
    render(<App/> ,rtElement)
}catch(e){
    console.error(e.stack)
}
if(process.env.NODE_ENV=="development"&&module.hot){
    module.hot.accept();
}