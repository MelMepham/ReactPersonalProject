import React from 'react'
import MyHorizontalScroll from './MyHorizontalScroll'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import thisDesign from '../data/designInfo.js'

class Design extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      design: [],
      show: false,
    }

    this.showDesign = this.showDesign.bind(this)
  }
  componentDidMount() {
     this.setState({design:thisDesign})
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
          <MyHorizontalScroll>

            {this.state.design && this.state.design.map(design => {
              return ([
                <img onClick={ (e) => {this.hideAll(design); this.showDesign(design)}} className='design img-responsive childHorizontal' src={design.img}/>,
                <div>{design.show == true && <div className='box'><h1>{design.title}</h1><p>{design.about}</p></div>}</div>
              ])
                }


            )}

          </MyHorizontalScroll>

          </div>
        )
    }
  }



export default Design
