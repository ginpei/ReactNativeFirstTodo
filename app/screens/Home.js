import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native'

export default class Home extends Component {
	render() {
		return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello React Native World!</Text>
        <Text style={styles.instructions}>I'm gonna create a great app!</Text>
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
