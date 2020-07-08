import React, { Component } from "react"
import * as surveyQuestion from "../../config/dummy"
import constant from "../../config/constant"

import PieChart from "./PieChart"
import PieChart1 from "./PieChart1"
import GroupedBarChart from "./GroupedBarChart"

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
                        <div className="col-lg-4 col-md-6 p-3">
                            <div className=" rounded p-3">
                                <div className="" style={{ fontSize: "0.8em" }}>
                                    <div className="d-flex align-items-start py-1" style={{ lineHeight: "1.6em"}}><i className="fa fa-circle text-success pr-2" style={{ fontSize: "0.6em", paddingTop: "1.2em"}} />Male 84% got salary $1500 - $8000</div>
                                    <div className="d-flex align-items-start py-1" style={{ lineHeight: "1.6em"}}><i className="fa fa-circle text-success pr-2" style={{ fontSize: "0.6em", paddingTop: "1.2em"}} />Female 16% got salary $1500 - $5000</div>
                                </div>
                                <div className="px-3" style={{ width: "100%", height: "20em" }}>
                                    <PieChart />
                                </div>
                            </div>
                        </div> 
                        <div className="col-lg-4 col-md-6  p-0">
                            <div className="d-flex h-100 align-items-end justify-content-center p-0 py-5">
                                <div className="py-3 bg-white rounded">
                                    <SalaryTiles />
                                </div>
                            </div>
                        </div> 
                        <div className="col-lg-4 col-md-6" style={{ marginTop: "-5.8em" }}>
                            <div className=" text-left ">
                                <div className="h1 py-2 text-white">Graduated Students'</div>
                                <div className="h2 py-2 text-white">Survey Results</div>
                            </div>
                            <div className=" text-left py-3 text-white" style={{ fontSize: "1.02em" }}>
                                2235 students have participated.
                            </div>
                            {/* <div className=" rounded border bg-white p-3">
                                <div className="pl-5" style={{ font: "1em" }}>
                                    <div className="d-flex align-items-start py-1" style={{ lineHeight: "1.6em"}}><i className="fa fa-circle text-success px-2" style={{ fontSize: "0.8em", paddingTop: "1.2em"}} />Male 84% got salary $1500 - $8000</div>
                                    <div className="d-flex align-items-start py-1" style={{ lineHeight: "1.6em"}}><i className="fa fa-circle text-success px-2" style={{ fontSize: "0.8em", paddingTop: "1.2em"}} />Female 16% got salary $1500 - $5000</div>
                                </div>
                                <div className="px-3" style={{ width: "100%", height: "20em" }}>
                                    
                                </div>
                            </div> */}
                        </div> 
                    </div>

                    <div className="feature-inner row">
                        <div className="col-lg-4 col-md-6 p-3">
                            <div className=" rounded border bg-white p-3">
                                <div className="" style={{ fontSize: "0.8em" }}>
                                    <div className="d-flex align-items-start py-1" style={{ lineHeight: "1.6em"}}><i className="fa fa-circle text-success pr-2" style={{ fontSize: "0.6em", paddingTop: "1.2em" }} />75% of most employed posts are related with degree.</div>
                                    <div className="d-flex align-items-start py-1" style={{ lineHeight: "1.6em"}}><i className="fa fa-circle text-success pr-2" style={{ fontSize: "0.6em", paddingTop: "1.2em" }} />13% of graduates are in another program / got other degree. </div>
                                    <div className="d-flex align-items-start py-1" style={{ lineHeight: "1.6em"}}><i className="fa fa-circle text-success pr-2" style={{ fontSize: "0.6em", paddingTop: "1.2em"}} />What are the UTYCC graduates doing?</div>

                                </div>
                                <div className="px-3" style={{ width: "100%", height: "20em" }}>
                                    <PieChart1 />
                                </div>
                            </div>
                        </div> 
                        <div className="col-lg-7 col-md-6 p-3">
                            <div className=" rounded border bg-white p-3">
                                <div className="" style={{ fontSize: "0.8em" }}>
                                    <div className="d-flex align-items-start py-1" style={{ lineHeight: "1.6em" }}><i className="fa fa-circle text-success pr-2" style={{ fontSize: "0.6em", paddingTop: "1.2em" }} />Almost 50% employed graduates are at Yangon.</div>
                                    <div className="d-flex align-items-start py-1" style={{ lineHeight: "1.6em"}}><i className="fa fa-circle text-success pr-2" style={{ fontSize: "0.6em", paddingTop: "1.2em"}} />Graduates at Japan are most satisfy on job.</div>
                                    <div className="d-flex align-items-start py-1" style={{ lineHeight: "1.6em" }}><i className="fa fa-circle text-success pr-2" style={{ fontSize: "0.6em", paddingTop: "1.2em" }} />Graduates at Yangon are least satisfy on job.</div>
                                </div>
                                <div className="px-3" style={{ width: "100%", height: "20em" }}>
                                    <GroupedBarChart />
                                </div>
                            </div>
                        </div> 
                    </div>

                </div>
            </section>
        )
    }

}

const SalaryTiles = props => {
    return (
        <div className="p-2">
            <div className="py-3 font-weight-bold">
                Highest paying positions
            </div>
            <div style={{ marginLeft: -100, marginRight: -100}}>
                <table className="w-100" style={{ fontSize: "0.9em"}}>
                    <tr>
                        <td>Administrative Assistant</td>
                        <td>$50k - $96k</td>
                        <td>
                            <div className="rounded" style={{ minWidth: 200, minHeight: 12, background: "#cccccc" }}>
                                <div className="rounded" style={{ marginLeft: 80, width: 130, minHeight: 12, background: "#b372f5" }}></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Full-stack Engineer</td>
                        <td>$35k - $65k</td>
                        <td>
                            <div className="rounded" style={{ minWidth: 200, minHeight: 12, background: "#cccccc" }}>
                                <div className="rounded" style={{ marginLeft: 40, width: 100, minHeight: 12, background: "#b372f5" }}></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Marketing Manager</td>
                        <td>$30k - $80k</td>
                        <td>
                            <div className="rounded" style={{ minWidth: 200, minHeight: 12, background: "#cccccc" }}>
                                <div className="rounded" style={{ marginLeft: 37, width: 150, minHeight: 12, background: "#b372f5" }}></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Web developer</td>
                        <td>$35k - $65k</td>
                        <td>
                            <div className="rounded" style={{ minWidth: 200, minHeight: 12, background: "#cccccc" }}>
                                <div className="rounded" style={{ marginLeft: 10, width: 90, minHeight: 12, background: "#b372f5" }}></div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default App;