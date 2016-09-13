import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld} from './comp-two.jsx';

export default class CorespringPieEs6Demo extends HTMLElement {
  createdCallback() {
    console.log('created');
    var element = React.createElement(HelloWorld, {});
    ReactDOM.render(element, this, function () {
      console.log('rendered');
    });
  }
}
