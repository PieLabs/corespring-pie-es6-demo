import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld} from './comp-two.jsx';

export default class CorespringEs6Demo extends HTMLElement {

  constructor() {
    super();
    this._model = null;
    this._session = null;
  }

  get session() {
    return this._session;
  }

  set session(session) {
    this._session = session;
    this._rerender();
  }

  get model() {
    return this._model;
  }
  
  set model(model) {
    this._model = model;
    this._rerender();
  }

  _rerender() {
    console.log('_rerender...');
    if (this._model && this._session) {
      var element = React.createElement(HelloWorld, { model: this._model, session: this._session });
      ReactDOM.render(element, this, function () {
        console.log('rendered');
      });
    } else {
      console.log('skip');
    }
  }

  createdCallback() {
    console.log('created');
    this._rerender();
  }
}
