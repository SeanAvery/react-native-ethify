import React, { Component } from 'react'
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native'
import Promise from 'bluebird'

export default class Eth extends Component {
  constructor() {
    super()
    this.state = {
      block_num: 0,
    }
    this.cron()
  }

  cron() {
    /**
     * Recursive promise chain that querys infura enpoint for latest block number
     */
    // return Promise.delay()
  }

  getBlockNumber() {

  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 100}}>Block #: {this.state.block_num}</Text>
      </View>
    )
  }
}
