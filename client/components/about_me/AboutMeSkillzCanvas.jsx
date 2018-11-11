import React from 'react'
var SkillzCircle = require('./AboutMeSkillz').AboutMeSkillzCircle
var SkillzRectangle = require('./AboutMeSkillz').AboutMeSkillzRectangle

import createId from 'incremental-id'


class AboutMeSkillzCanvas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            baseShapes: [],
        }
        this.clickCircle = this.clickCircle.bind(this)
        this.createShapes = this.createShapes.bind(this)
    }
    componentDidMount() {
        this.createShapes()
        console.log(this.state)
    }

    createShapes() {
        let shapes = []
        for (let i = 0; i < 4; i++) {
            let id = createId()
            let circle = {
                id: id,
                cx: "30",
                cy: "30",
                fill: "#FFD080"
            }
            let rectangle = {
                id: id,
                width: "0",
                height: "",
                fill: "#FFD080"
            }
            shapes.push({circle: circle, rectange: rectangle})
        }
        this.setState({ baseShapes: shapes })
    }


    clickCircle(id) {
        console.log(id)
    }

    render() {
        return (
            <div className="about-me-flex-container">
                <div className="about-me-flex-col">
                    Title
                    <div className="about-me-flex-container">
                        <div className="about-me-flex-col">
                            {this.state.baseShapes.map(shape => {
                                console.log(shape.circle.id)
                                return (
                                    <div key={createId()}>
                                        <svg>
                                            <SkillzCircle
                                                key={shape.circle.id}
                                                id={shape.circle.id}
                                                clickCircle={this.clickCircle}
                                                cy={shape.circle.cy}
                                                cx={shape.circle.cx}
                                                r="30"
                                                color={shape.circle.fill} />

                                            {/* <SkillzRectangle
                                                key={shape.id}
                                                id={shape.id}
                                                clickCircle={this.clickCircle}
                                                cy={shape.cy}
                                                cx={shape.cx}
                                                r="30"
                                                color={shape.fill} /> */}
                                        </svg>
                                    </div>
                                )
                            })}


                        </div>
                        <div className="about-me-flex-col">
                            <svg>
                                <circle cy="30" cx="30" r="30" fill="#coff33" />
                            </svg>
                            box
                        </div>
                    </div>

                </div>

                <div className="about-me-flex-col">
                    Title
                    <div className="about-me-flex-container">
                        <div className="about-me-flex-col">
                            circle
                        </div>
                        <div className="about-me-flex-col">
                            box
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMeSkillzCanvas
