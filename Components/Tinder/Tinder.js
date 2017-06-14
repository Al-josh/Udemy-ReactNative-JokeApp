import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <Text>{this.props.joke}</Text>
      </View>
    );
  }
}

class NoMoreCards extends React.Component {
  render() {
    return (
      <View>
        <Text>No Jokes To Show</Text>
      </View>
    );
  }
}

export default class Tinder extends React.Component {

  handleAccept () {
    console.log('I like this joke');
  }

  handleReject () {
    console.log('I don\'t like this joke');
  }

  render() {
    return (
      <SwipeCards
        cards={this.props.jokes}
        renderCard={(jokeObject) => <Card joke={jokeObject.joke} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={this.handleAccept}
        handleNope={this.handleReject}
      />
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 200,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: '#A8CD1B',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    padding: 20,
    fontSize: 20,
    marginTop: 10,
  },
});
