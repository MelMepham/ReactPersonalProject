import React from 'react'

class artPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      art: [],
      artLong: [],
      animValues: '',
    }
    this.showArtLong = this.showArtLong.bind(this)

    this.showArtSquare = this.showArtSquare.bind(this)
  }

  componentWillMount() {
    const { infoSquare, infoLong } = this.props
    this.setState({ art: infoSquare, artLong: infoLong })
  }
  
  hideAllLong(artToHide) {
    var mappedLongArt = this.state.artLong.map((art) => {
      if (artToHide.show == true) {
      } else {
        art.show = false; return art
      }
      this.setState({ artLong: mappedLongArt })
    })
  }

  hideAllSquare(artToHide) {
    var mappedArt = this.state.art.map((art) => {
      if (artToHide.show == true) {
      } else {
        art.show = false; return art
      }
      this.setState({ art: mappedArt })
    })
  }

  showArtSquare(artToShow) {
    const { art } = this.state
    var index = art.findIndex(artItem => artItem.title === artToShow.title)
    art[index].show = !art[index].show
    this.setState({ art })
  }

  showArtLong(artToShow) {
    const { artLong } = this.state
    var index = artLong.findIndex(artItem => artItem.title === artToShow.title)
    art[index].show = !art[index].show
    this.setState({ artLong })
  }

  render() {
    const { infoSquare, infoLong } = this.props
    return (
      <div className="body">
        <div className="main-content">
          <div className="portfolio">

            {infoLong && infoLong.map(art => {
              return ([
                <div className="container">
                <h2 className="overlay pink">{art.title.toUpperCase()}</h2>
                <img 
                  height="400px" 
                  src={art.img} 
                  onClick={ (e) => {this.hideAllLong(art); this.showArtLong(art)}}/>
                  </div>
              ])
            })
            }

            {infoSquare && infoSquare.map(art => {
              return ([
                <div className="container">
                <h2 className="overlay pink">{art.title.toUpperCase()}</h2>

                <img 
                  height="570px" 
                  src={art.img}
                  onClick={ (e) => {this.hideAllSquare(art); this.showArtSquare(art)}} />
                </div>,
                // <div className="mobileMargin">{art.show == true && <div className='img-responsive box'><h1>{art.title}</h1><p>{art.about}</p></div>}</div>

              ])
            })

            }
          </div>
        </div>
      </div>

    )
  }
}



export default artPage

            // <div className="image-parent-grid">
            //   <img height="300px" width="auto" className="image-class " onClick={(e) => { this.hideAll(art); this.showArt(art) }}
            //     src={art.img} />
            // </div>