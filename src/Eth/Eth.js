import React, { Component } from 'react'
import {
  View,
  TouchableHighlight,
  Text,
}

export default class Wallet extends Component {
  constructor() {
    super()
    // instantiate block number cron
  }

  cron() {

  }

  getBlockNumber() {

  }

  render() {
    return (
      <View>
        <TouchableHighlight>
          <View style={{ height 100, width:100}}>

          </View>

        </TouchableHighlight>
        <Text>Block #: {this.state.blockNumber}</Text>
      </View>
    )
  }

}
