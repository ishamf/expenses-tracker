/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {AppRegistry, AsyncStorage} from 'react-native'
import {compose, applyMiddleware, createStore} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './src/app'
import {reducer, initialState} from './src/state'

const store = createStore(reducer, initialState, compose(
  applyMiddleware(thunk),
  autoRehydrate()
))

persistStore(store, {storage: AsyncStorage})

export default class expensesTracker extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('expensesTracker', () => expensesTracker)
