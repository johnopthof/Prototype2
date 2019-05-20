import React, {Component} from 'react';
import {TouchableOpacity, Platform, StyleSheet, Text, View} from 'react-native';
import CounterApp from './src/CounterApp.js'
import { createStore } from 'redux';
import {Provider} from 'react-redux';

type Props = {};

const initialState = {
  counter: 0
}

 const reducer = (state=initialState, action) =>{
   switch(action.type) {
     case "INCREASE_COUNTER": 
        return { counter: state.counter + 1}
     case "DECREASE_COUNTER":
        return { counter: state.counter - 1}
   }
   return state;
 }
 
 const store = createStore(reducer);
 
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <CounterApp/>
      </Provider>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
