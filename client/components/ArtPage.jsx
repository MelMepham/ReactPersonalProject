import React from 'react'
import MyHorizontalScroll from './MyHorizontalScroll'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import thisArt from '../data/artInfo.js'
import Swipe, { SwipeItem } from 'swipejs/react';
import Draggable, {DraggableCore} from 'react-draggable';


class artPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      art: [],
      animValues: '',
    }
    this.showArt = this.showArt.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
    this.handleDrag = this.handleDrag.bind(this)

  }
  componentDidMount() {
      let mySwipe = this.swipe;
      this.setState({art:thisArt})
  }

  onMouseOver(img) {
      const {art} = this.state
      var index = art.findIndex(Item => Item.img == img.img)
      art[index].img = art[index].imgMouseOver
      this.setState({art})
  }

  onMouseOut(img) {
      const {art} = this.state
      var index = art.findIndex(Item => Item.imgMouseOver == img.imgMouseOver)
      art[index].img = art[index].imgMouseOut
      this.setState({art})
  }

  hideAll(artToHide) {
      var mappedArt = this.state.art.map((art) => {
        if (artToHide.show == true) {
        } else {
         art.show = false; return art}
         this.setState({art: mappedArt})
      })
  }

  handleDrag() {
    this.state.animValues + deltaX
  }

  showArt(artToShow) {
      const {art} = this.state
        var index = art.findIndex(artItem => artItem.title === artToShow.title)
        art[index].show = !art[index].show
        this.setState({art})
  }

  render() {
    window.mySwipe = new Swipe(document.getElementById('slider'));
        return (
          <Draggable
            axis="x"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            onDrag={this.handleDrag}>
          <div className="parentHorizontal">
            <br />
              <MyHorizontalScroll>
                {this.state.art && this.state.art.map(art => {
                  return ([
                    <img onClick={ (e) => {this.hideAll(art); this.showArt(art)} }
                      onMouseOver={(e) => {this.onMouseOver(art)}}
                      onMouseOut={(e) => {this.onMouseOut(art)}}
                      className='art cursor img-responsive childHorizontal'
                      src={art.img}/>,
                    <div>{art.show == true && <div className='img-responsive box'><h1>{art.title}</h1><p>{art.about}</p></div>}</div>
                  ])
                }
                )}
              </MyHorizontalScroll>
          </div>
        </Draggable>
        )}
  }



export default artPage
