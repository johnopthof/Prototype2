import React, {Component} from 'react';
import {TouchableOpacity, Button, Platform, StyleSheet, Text, View} from 'react-native';
import CounterApp from './src/CounterApp.js'
import SaveApp from './src/SaveApp.js'
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import { createStackNavigator, createAppContainer } from "react-navigation";
import PinView from 'react-native-pin-view'

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
 
class App extends Component<Props> {
  
  render() {
    return (  
      <Provider store={store}>
        <CounterApp/>
        <Button title="Go home" onPress={() => this.props.navigation.navigate('Home')}/>
        <SaveApp/>
      </Provider>
    );
  }
} 

class PinScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.text}>Login met je pincode</Text>
        <PinView
          style={styles.pin} buttonTextColor="#443456" inputActiveBgColor="#443456"
          onComplete={(val, clear)=> {
              if (val === '0000') {
                this.setState({ isLoginSuccess: true });
              } else {
                Alert.alert('Foutje bedankt');
                clear();
              }
            }
          }
          pinLength={4}
        />
        <Text>PinScreen</Text>
         <Button title="Go to Details" onPress={() => this.props.navigation.navigate('Details')}/>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: PinScreen,
    Details: App
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);

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
