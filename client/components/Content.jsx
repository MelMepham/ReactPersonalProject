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
      show: false
    }
    this.hideDiv = this.hideDiv.bind(this)
  }

hideDiv() {
  let { show } = this.state;
  this.setState( { show: !show } )
}
// {this.state.art.map(art => <img onClick={ art.hideDiv } className='art childHorizontal img-responsive' src={art.img}/>

render() {
    return (



    <div className="parentHorizontal">
      <HorizontalScroll>
        <img onClick={ this.hideDiv } className='art childHorizontal img-responsive' src={this.state.art[0].img}/>
      {this.state.show && <Box />}
  <img onClick={ this.hideDiv } className='art childHorizontal img-responsive' src={this.state.art[1].img}/>
  {this.state.show && <Box />}



      </HorizontalScroll>

      </div>
    )
}
}

class Box extends React.Component {
  render () {
    return (
      <div className='box'>
        <h1>jellyfish</h1>
      <img className='art childHorizontal img-responsive' src='images/art/jellyfish2.jpg'/>
      </div>
    )
  }
}

export default Content
