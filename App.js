import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Input from './Components/Input/Input';
import Tinder from './Components/Tinder/Tinder';
export default class App extends React.Component {

  state = {
    value: '',
    jokes: [],
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, type a number in order to get a joke!</Text>
        <Input
          updateJokes={(jokes) => this.setState({ jokes: jokes })}
          value={this.state.value}
          onChange={(value) => this.setState({ value: value })}
        />
        <Text>Liked it? Swipe left!</Text>
        <Tinder
          jokes={this.state.jokes}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAB6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  button: {
    width: 100,
    height: 50,
  },
});
