import React from 'react'
import MyHorizontalScroll from './MyHorizontalScroll'
import thisArt from '../data/artInfo.json'


class artPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      art: [],
      animValues: '',
    }
    this.showArt = this.showArt.bind(this)
  }

  componentDidMount() {
      this.setState({art:thisArt})
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
            <br />
              <MyHorizontalScroll>
                {this.state.art && this.state.art.map(art => {
                  return ([
                      <div className=" art container">
                        <h2 className="overlay pink">{art.title.toUpperCase()}</h2>
                        <img onClick={ (e) => {this.hideAll(art); this.showArt(art)} }
                        className=" cursor img-responsive childHorizontal" src={art.img}/>
                      </div>,
                      <div className="mobileMargin">{art.show == true && <div className='img-responsive box'><h1>{art.title}</h1><p>{art.about}</p></div>}</div>
                  ])
                }
              )}
              </MyHorizontalScroll>
          </div>
        )}
  }



export default artPage
