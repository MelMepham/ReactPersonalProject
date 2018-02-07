import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      art: [
        {img: 'images/art/Mandala1.jpg', title: 'Mandala', about: 'Hey, this is a beautiful Mandala that I have made'},
        {img: 'images/art/jellyfish1.jpg', title: 'Jellyfish Kingdom', about: 'So I made a jellyfish instalation'},
        {img: 'images/art/Sketchbook2.jpg', title: 'A glimpse into the life', about: 'Yay for sketches'},
      ],
      show: false,
      targetArt: false
    }
    this.hideDiv = this.hideDiv.bind(this)
    this.setTarget = this.setTarget.bind(this)
  }

hideDiv() {
  let { show } = this.state;
  this.setState( { show: !show } )
}
setTarget() {
  let { targetArt } = this.state;
  this.setState({targetArt: !targetArt})
}
render() {
    return (



    <div className="parentHorizontal">
      <HorizontalScroll>

        <img onClick={ this.setTarget } className='art childHorizontal img-responsive' src={this.state.art[0].img}/>
            {this.state.targetArt && <div className='box'><h1>{this.state.art[0].title}</h1></div>}
        <img onClick={ this.hideDiv } className='art childHorizontal img-responsive' src={this.state.art[1].img}/>
            {this.state.show && <div><h1>{this.state.art[1].title}</h1></div>}

        <img onClick={ this.hideDiv } className='art childHorizontal img-responsive' src={this.state.art[1].img}/>
            {this.state.show && <div><h1>{this.state.art[1].title}</h1></div>}
        <img onClick={ this.hideDiv } className='art childHorizontal img-responsive' src={this.state.art[1].img}/>
            {this.state.show && <div><h1>{this.state.art[1].title}</h1></div>}
        <img onClick={ this.hideDiv } className='art childHorizontal img-responsive' src={this.state.art[1].img}/>
            {this.state.show && <div><h1>{this.state.art[1].title}</h1></div>}
        <img onClick={ this.hideDiv } className='art childHorizontal img-responsive' src={this.state.art[1].img}/>
            {this.state.show && <div><h1>{this.state.art[1].title}</h1></div>}



      </HorizontalScroll>

      </div>
    )
}
}



export default Content
