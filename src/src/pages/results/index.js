import React, { Component } from "react"
import * as surveyQuestion from "../../config/dummy"
import constant from "../../config/constant"

import PieChart from "./PieChart"

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
                        <div className="col-lg-4 col-md-6">
                            <div className="pl-5" style={{ font: "1em" }}>
                                <div className=""><i className="fa fa-circle text-primary px-2" />Male 84% got salary $1500 - $8000</div>
                                <div className=""><i className="fa fa-circle text-primary px-2" />Female 16% got salary $1500 - $5000</div>
                            </div>
                            <div className="px-3 rounded" style={{ width: "100%", height: "20em" }}>
                                <PieChart />
                            </div>
                        </div> 
                        <div className="col-lg-2 col-md-6">
                        </div> 
                        <div className="col-lg-6 col-md-6" style={{ marginTop: "-5.8em" }}>
                            <div className=" text-center ">
                                <div className="h1 py-2 text-white">Graduated Students'</div>
                                <div className="h2 py-2 text-white">Survey Results</div>
                            </div>
                            <div className=" text-center py-3 text-white" style={{ fontSize: "1.02em" }}>
                                2235 students have participated.
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
        )
    }

}

export default App;