import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class Input extends React.Component {

  fetchData () {
    console.log(this.props.value);
    fetch(`http://api.icndb.com/jokes/random/${this.props.value}`)
    .then((response) => { return response.json() })
    .then((data) => this.props.updateJokes(data.value))
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          keyboardType={'numeric'}
          value={this.props.value}
          style={styles.input}
          onChangeText={(text) => this.props.onChange(text)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.fetchData()}>
          <Text
            style={styles.text}
            >Search</Text>
        </TouchableHighlight>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAB6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 3,
  },
  button: {
    backgroundColor: '#005A31',
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});
