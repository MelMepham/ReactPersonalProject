import React from 'react'

class artPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      art: [],
    }
  }

  componentWillMount() {
    const { infoSquare } = this.props
    this.setState({ art: infoSquare })
  }

  render() {
    const { infoSquare } = this.props
    const square = "400px"
    const rect = "570px"
    var height
    return (
      <div className="body">
        <div className="main-content">
          <div className="portfolio">

            {infoSquare && infoSquare.map(art => {
              height = art.imageSize === "square" ? square : rect
              return ([
                <div className="container">
                  <h2 className="overlay pink">{art.title.toUpperCase()}</h2>
                  <img
                    height={height}
                    src={art.img}
                    alt={art.alt} />
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
