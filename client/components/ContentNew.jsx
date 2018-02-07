import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

class ContentNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      art: [
        {img: 'images/art/Mandala1.jpg', title: 'Mandala', about: 'Hey, this is a beautiful Mandala that I have made', show: true},
        {img: 'images/art/jellyfish1.jpg', title: 'Jellyfish Kingdom', about: 'So I made a jellyfish instalation', show: true},
        {img: 'images/art/Sketchbook2.jpg', title: 'A glimpse into the life', about: 'Yay for sketches', show: false},
      ],

      show: false,
      // targetArt: false
    }

    this.showArt = this.showArt.bind(this)
  }

  // showArt(artToShow){
  //   var allArt = this.state.art.map(art => {
  //     if (artToShow.title === art.title) {
  //       art.show = !show
  //     } else {
  //       art.show = false
  //     }
  //     return art
  //   })
  //   this.setState({art: allArt})
  //   console.log(art)
  //   console.log(art.title)
  // }

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
      <HorizontalScroll pageLock={true}>
        {this.state.art && this.state.art.map(art => {
          return ([
            <img onClick={ () => this.showArt(art) } className='art childHorizontal img-responsive' src={art.img}/>,
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
