import React, {Component} from 'react';
import {TouchableOpacity, Platform, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
type Props = {};

class CounterApp extends Component{

    render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', width: 200, justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={()=> this.props.increaseCounter()}><Text style={{fontSize:20}}>Increase</Text></TouchableOpacity>
          <Text>{this.props.counter}</Text>
          <TouchableOpacity onPress={()=> this.props.decreaseCounter()}><Text style={{fontSize:20}}>Decrease</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state){
    return{
        counter:state.counter
    }
}

 function mapDispatchToProps(dispatch){
   return{
     increaseCounter : () => dispatch({type: 'INCREASE_COUNTER'}),
     decreaseCounter : () => dispatch({type: 'DECREASE_COUNTER'}),
   }
 }

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);

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
