import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import thisArt from '../data/artInfo.js'

class artPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      art: [],
      show: false,
    }

    this.showArt = this.showArt.bind(this)
    this.scrollTo = this.scrollTo.bind(this)
  }
  componentDidMount() {
     this.setState({art:thisArt})
}

  scrollTo(element) {
      console.log('scroll' + element)
  }

  hideAll(artToHide) {
      var mappedArt = this.state.art.map((art) => {
        if (artToHide.show == true) {
        } else {
         art.show = false; return art}
        this.setState({art: mappedArt})
      })
    }

  showArt(artToShow) {
      const {art} = this.state
        var index = art.findIndex(artItem => artItem.title === artToShow.title)
        art[index].show = !art[index].show
        this.setState({art})
  }


  render() {
      return (
      <div className="parentHorizontal">
        <HorizontalScroll reverseScroll='true'>
          {this.state.art && this.state.art.map(art => {
            return ([
              <img onClick={ (e) => {this.hideAll(art); this.showArt(art); this.scrollTo(e.target) }} className='art img-responsive childHorizontal' src={art.img}/>,
              <div>{art.show == true && <div className='box'><h1>{art.title}</h1><p>{art.about}</p></div>}</div>
            ])
              }
          )}

        </HorizontalScroll>

        </div>
      )
  }
}



export default artPage
