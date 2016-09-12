import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld} from './comp-two.jsx';

class CorespringPieEs6Demo extends HTMLElement{
  createdCallback(){
    console.log('created');
    var element = React.createElement(HelloWorld, {});
    ReactDOM.render(element, this, function () { 
      console.log('rendered');
    });
  }
}

document.registerElement('corespring-pie-es6-demo', CorespringPieEs6Demo);