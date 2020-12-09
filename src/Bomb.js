// your Bomb code here!
import React, { Fragment, Component } from 'react'

class Bomb extends Component {
  constructor(props) {
    super()
    // console.log(props.initialCount);
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    // console.log(this.props)
    let message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    return (
      <Fragment>
        {message}
      </Fragment>
    )
  }
}

export default Bomb