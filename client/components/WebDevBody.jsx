
import React from 'react'

class WebDevBody extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

    render() {
      return (
        <div>
          <br/><br/><br/><br/><br/>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3 imgPadding">
                  </div>
                </div>
                <div className="col-md-7 typePadding">
                  <h1> LOOK I MADE THIS </h1>
                  <p className="pAboutMe">
                    So I thought about giving you some static images of what I have done, but how boring is that. Check out my site, press around and see what you find. If you want to talk more send me a message, if you want to see more code check out my github, and if you want to follow me check out my instagram and twitter.
                  </p>
                </div>
              </div>
              <br/><br/>
              <br/><br/>
            </div>
        )}
      }


  export default WebDevBody
