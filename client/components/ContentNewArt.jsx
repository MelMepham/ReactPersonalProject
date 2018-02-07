import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

class ContentNewArt extends React.Component {
  constructor(props) {
    super(props)
  }


render() {
    return (

          return ( <div>
            <img onClick={ (art) => this.showArt(art) } className='art childHorizontal img-responsive' src={art.img}/>
              {show == true && <div className='box'><h1>{art.title}</h1></div>} </div>
                )
            }
        )}




export default ContentNewArt
