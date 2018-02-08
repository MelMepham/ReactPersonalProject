import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import ContentImages from './ContentImages'


class ArtPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      art: [
        {img: 'images/art/Mandala1.jpg', title: 'Mandala', about: 'Hey, this is a beautiful Mandala that I have made'},
        {img: 'images/art/jellyfish1.jpg', title: 'Jellyfish Kingdom', about: 'So I made a jellyfish instalation'},
        {img: 'images/art/Sketchbook2.jpg', title: 'A glimpse into the life', about: 'Yay for sketches'},

      ],
      targetArt: null
    }
    this.setTarget = this.setTarget.bind(this)
  }
  setTarget(art) {
    this.setState({targetArt: art})
  }

  render() {
      return (

        <div>
            {this.state.art.map(art =>
              <ContentImages setTarget={this.setTarget} targetArt={this.state.targetArt} art={art} />)}
        </div>

      )
  }
}


export default ArtPage
