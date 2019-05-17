import React, {Component} from 'react';
import {TouchableOpacity, Platform, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
type Props = {};
export default connect(mapStateToProps)(CounterApp) extends Component<Props> {
  state = {counter: 0}

  increaseCounter = () =>{
    this.setState({counter:this.state.counter +1})
  }

  decreaseCounter = () =>{
    this.setState({counter:this.state.counter -1})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', width: 200, justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={()=> this.increaseCounter()}><Text style={{fontSize:20}}>Increase</Text></TouchableOpacity>
          <Text>{this.state.counter}</Text>
          <TouchableOpacity onPress={()=> this.decreaseCounter()}><Text style={{fontSize:20}}>Decrease</Text></TouchableOpacity>
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
