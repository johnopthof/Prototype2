import React, {Component} from 'react';
import {TouchableOpacity, Button, Platform, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

export default class SaveApp extends Component{
  storeData = async () => {
    try {
      await AsyncStorage.setItem('key', 'I like to save it.');
    } catch (error) {
      console.log(error);
    }
  };

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('key');
      if (value !== null) {
        console.log(value);
      }
    } catch (error) {
      console.log(error); 
    }
  };

    render(){
        return(
        <View style={styles.container}>
          <Button title="storeData" onPress={this.storeData}></Button>
          <Button title="Load data" onPress={this.retrieveData}></Button>
        </View>
        )
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
