import React from 'react'

class artPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      art: [],
      artLong: [],
    }
  }

  componentWillMount() {
    const { infoSquare, infoLong } = this.props
    this.setState({ art: infoSquare, artLong: infoLong })
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
                  alt={art.alt} />
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
                  alt={art.alt}/>
                </div>

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
