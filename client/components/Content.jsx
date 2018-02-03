import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'


class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.hideDiv = this.hideDiv.bind(this)
  }

hideDiv() {
  let { show } = this.state;
  this.setState( { show: !show } )
}


render() {
    return (



    <div className="parentHorizontal">
      <HorizontalScroll>

      <img onClick={ this.hideDiv } className='art childHorizontal img-responsive' src='images/art/jellyfish1.jpg'/>
      {this.state.show && <Box />}
      </HorizontalScroll>

      </div>
    )
}
}

class Box extends React.Component {
  render () {
    return (
      <div><h1>hello</h1></div>

    )
  }
}

export default Content
