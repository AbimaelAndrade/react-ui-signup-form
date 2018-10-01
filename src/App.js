import React, { Component } from 'react'
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

import Modal from './components/Modal'

class App extends Component {

  state = {
    mounted: false
  }

  componentDidMount = () => {
    this.setState({ mounted: true})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ mounted: false})
  }

  render = () => {

    let child

    if (this.state.mounted) {
      child = (<Modal onSubmit={this.handleSubmit} />)
    } 

    return (
      <div className="App">
        <ReactCSSTransitionGroup
          transitionName="signup"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {child}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default App
