import React from 'react'
var AboutMeSkillz = require('./AboutMeSkillz').AboutMeSkillz
import createId from 'incremental-id'


class AboutMeSkillzCanvas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="about-me-flex-container">
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
