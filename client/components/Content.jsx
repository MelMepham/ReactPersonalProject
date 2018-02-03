import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true

    }
z  }
  toggleHidden () {
      this.setState({
        isHidden: !this.state.isHidden
      })
    }


render() {
    return (
      <div className="parentHorizontal">
        <HorizontalScroll>
            <img onClick={this.toggleHidden.bind(this)} className='art childHorizontal img-responsive' src='images/art/jellyfish1.jpg'/>
            {!this.state.isHidden && <Child />}
            <div id='myDIV'><h1>hello</h1></div>



        </HorizontalScroll>
      </div>
    )
}
}


export default Content
