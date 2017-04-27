/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 // console.log('Buffer', global.Buffer)
import './global.js'
import { Eth } from './src/index'
console.log('Eth', Eth)
// import { keystore, txutils, signing } from 'eth-lightwallet/index';
// console.log('keystore', keystore)

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class react_native_ethify extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Eth />
      </View>
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
});

AppRegistry.registerComponent('react_native_ethify', () => react_native_ethify);
