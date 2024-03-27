// import MainFoot from "./Footer/MainFoot";
import React, { Component } from 'react'

export default class MainFoot extends Component {
  render() {
    return (
      <div>
        <li><a href="#">{this.props.linkName}</a></li>
      </div>

    )
  }
}
