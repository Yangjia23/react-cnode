import React, { Component } from 'react'
import {AdvertiseWrap, AdvertiseItem} from '../style'

export default class Advertise extends Component {
  render() {
    return (
      <AdvertiseWrap>
        <AdvertiseItem>广</AdvertiseItem>
        <AdvertiseItem>告</AdvertiseItem>
        <AdvertiseItem>位</AdvertiseItem>
        <AdvertiseItem>招</AdvertiseItem>
        <AdvertiseItem>租</AdvertiseItem>
      </AdvertiseWrap>
    )
  }
}
