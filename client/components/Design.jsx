import React from 'react'
import MyHorizontalScroll from './MyHorizontalScroll'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import thisDesign from '../data/designInfo.js'

class Design extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      design: [],
    }
    this.showDesign = this.showDesign.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
  }
  componentDidMount() {
     this.setState({design:thisDesign})
  }

  onMouseOver(img) {
      const {design} = this.state
      var index = design.findIndex(item => item.img == img.img)
      design[index].img = design[index].imgMouseOver
      this.setState({design})
  }

  onMouseOut(img) {
      const {design} = this.state
      var index = design.findIndex(item => item.imgMouseOver == img.imgMouseOver)
      design[index].img = design[index].imgMouseOut
      this.setState({design})
  }

  hideAll(designToHide) {
      var mappedDesign = this.state.design.map((design) => {
        if (designToHide.show == true) {
        } else {
         design.show = false; return design}
         this.setState({design: mappedDesign})
      })
    }

  showDesign(designToShow) {
      const {design} = this.state
        var index = design.findIndex(designItem => designItem.title === designToShow.title)
        design[index].show = !design[index].show
        this.setState({design})
  }

  render() {
        return (
          <div className="parentHorizontal">
            <br />
            <MyHorizontalScroll>
              {this.state.design && this.state.design.map(design => {
                return ([
                  <img onClick={(e) => {this.hideAll(design); this.showDesign(design)}}
                    onMouseOver={(e) => {this.onMouseOver(design)}}
                    onMouseOut={(e) => {this.onMouseOut(design)}}
                    className='cursor design img-responsive childHorizontal'
                    src={design.img}/>,
                  <div>{design.show == true && <div className='box'><h1>{design.title}</h1><p>{design.about}</p></div>}</div>
                ])
              }
            )}
          </MyHorizontalScroll>
        </div>
      )}
  }



export default Design
