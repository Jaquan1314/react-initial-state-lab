// your ImageSlider code here!
import React, { Fragment, Component } from 'react'

class ImageSlider extends Component {
  state = {
    currentSlideIndex: 0
  }

  render() {
    return (
      <Fragment>
        <p>I am on slide { this.state.currentSlideIndex }</p>
      </Fragment>
    )
  }
}

export default ImageSlider