import React, { Component } from "react"
import * as surveyQuestion from "../../config/dummy"
import constant from "../../config/constant"
import { Link } from "react-router-dom"

class App extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <section className="feature-area">
                <div className="container-fluid">
                    <div className="feature-inner row">
                        <div className="col-lg-2 col-md-6">
                            <div className="feature-item d-flex">
                                <i className="ti-book"></i>
                                <div className="ml-20">
                                    <h4>Vision</h4>
                                    <p>
                                        To be a Globally Remarkable Research based University and Cyber University
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature-item d-flex">
                                <i className="ti-cup"></i>
                                <div className="ml-20">
                                    <h4>Mission</h4>
                                    <p>
                                        To provide skillful engineers and outstanding researchers
                                        To create broad access of engineering education opportunities with smart learning
                                        To be a national/regional/global level high ranking university
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="feature-item d-flex border-right-0">
                                <i className="ti-desktop"></i>
                                <div className="ml-20">
                                    <h4>Motto</h4>
                                    <p>
                                        "Shape and Bright Your Future at UTYCC"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 row justify-content-center">
                        <div className="col-md-12 col-lg-8 justify-content-center align-items-center p-4">
                            <Link to="/survey" className="btn btn-primary">Take Survey</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default App;