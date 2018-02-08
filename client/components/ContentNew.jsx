import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class ContentNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      art: [
        {img: 'images/art/Mandala1.jpg', title: 'Mandala', about: 'Hey, this is a beautiful Mandala that I have made', show: false},
        {img: 'images/art/jellyfish1.jpg', title: 'Jellyfish Kingdom', about: 'So I made a jellyfish instalation', show: false},
        {img: 'images/art/Sketchbook2.jpg', title: 'A glimpse into the life', about: 'Yay for sketches', show: false},
      ],

      show: false,
      // targetArt: false
    }

    this.showArt = this.showArt.bind(this)
    this.scrollTo = this.scrollTo.bind(this)
  }

  scrollTo(element) {
      console.log(element)
  }

  showArt(artToShow) {
    const {art} = this.state
    console.log({art, artToShow});
    var index = art.findIndex(artItem => artItem.title === artToShow.title)
    art[index].show = !art[index].show
    this.setState({art})
  }

render() {
    return (
    <div className="parentHorizontal">
      <HorizontalScroll>
        {this.state.art && this.state.art.map(art => {
          return ([
            <img onClick={ (e) => {this.showArt(art); this.scrollTo(e.target) }} className='art childHorizontal img-responsive' src={art.img}/>,
            <div>{art.show == true && <div className='box'><h1>{art.title}</h1></div>}</div>
          ])
            }
        )}

      </HorizontalScroll>

      </div>
    )
}
}



export default ContentNew
