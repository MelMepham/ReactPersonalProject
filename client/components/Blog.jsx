import React from 'react'
import P5Wrapper from 'react-p5-wrapper'

import aboutMe from '../sketches/aboutMe'

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutMe: aboutMe,
    }
  }

  render () {

    return (
      <div className="page-container">
        <h1>
          CHECK OUT MY BLOG
        </h1>
        <div className='mandalaCentered'>
          <P5Wrapper sketch={this.state.aboutMe}/>
        </div>
        <div className="container">
          <div className="row">

            <div className="col-md-4">
            <div className="blog-card">
              <p className="blog-title">One Plastic Free Month</p>
              </div>
            </div>

            <div className="col-md-4">
            <div className="blog-card">
              <p className="blog-title">One Plastic Free Month</p>
              </div>

            </div>

            <div className="col-md-4">
            <div className="blog-card">
              <p className="blog-title">One Plastic Free Month</p>
            </div>

            </div>
            <div className="col-md-4">
            <div className="blog-card">
              <p className="blog-title">One Plastic Free Month</p>
            </div>

            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default Blog