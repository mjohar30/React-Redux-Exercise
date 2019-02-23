import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';

import './App.css'
import Persons from './containers/Persons';

const currentStore = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={currentStore}>
      <div className="App">
        <h1>Evoluciona la aplicación a Redux</h1>
        <Persons />
      </div>
      </Provider>
    );
  }
}

export default App;
