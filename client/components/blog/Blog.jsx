import React from "react";
import P5Wrapper from "react-p5-wrapper";

import { Link } from "react-router-dom";

import blogContent from '../../data/blogHomepage.json';
import aboutMe from "../../sketches/aboutMe";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: aboutMe,
      blogContent: blogContent
    };
    this.findMyColour = this.findMyColour.bind(this);
  }

  findMyColour() {
    let colours = ["#1D55FF", '#5EEDCC', "#31E384", "#167C55", "#74B7C1"];
    return colours[Math.floor(Math.random() * colours.length)];
  }

  render() {
    const { match } = this.props
    console.log(match.url)
    let blogContent = this.state.blogContent;
    
    return (
      <div className="page-container">
        <h1>CHECK OUT MY BLOG PAGE</h1>
        <div className="mandalaCentered">
          <P5Wrapper sketch={this.state.aboutMe} />
        </div>
        <div className="blog-container">
          <div className="row">
            {blogContent.map(blog => {
              return [
                <div className="col-md-4">
                  <Link to={`${match.url}${blog.link}`}>
                    <div
                      style={{ backgroundColor: this.findMyColour() }}
                      className="blog-card"
                    >
                      <img
                        className="blog-image"
                        alt={blog.imageAlt}
                        src={blog.imageSrc}
                        width="100%"
                        height="100%"
                      />
                      <p className="blog-title">{blog.title.toUpperCase()}</p>
                    </div>
                  </Link>
                </div>
              ];
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
