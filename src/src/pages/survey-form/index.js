import React, { Component } from "react"
import * as surveyQuestion from "../../config/dummy"
import constant from "../../config/constant"

import TextFieldQuestion from "./TextFieldQuestion"
import TextAreaFieldQuestion from "./TextAreaFieldQuestion"
import NumberFieldQuestion from "./NumberFieldQuestion"
import RatingQuestion from "./RatingQuestion"
import SingleChoiceQuestion from "./SingleChoiceQuestion"
import YesNoChoiceQuestion from "./YesNoChoiceQuestion"

class App extends Component {

    constructor() {
        super()
        this.state = {
            questions: surveyQuestion.surveyFormData,
            currentIndex: 0
        }
    }

    componentDidMount() {

    }

    onBack = (question) => {
        if (this.state.currentIndex - 1 >= 0)
            this.setState(prev => ({ currentIndex: prev.currentIndex - 1 }))
    }

    onNext = (question) => {
        if (this.state.currentIndex + 1 <= this.state.questions.length && question.answer.length > 0 && question.answer[0].trim().length > 0)
            this.setState(prev => ({ currentIndex: prev.currentIndex + 1 }))
    }

    updateState = () => this.setState({})

    render() {
        const { questions, currentIndex } = this.state

        const questionViews = questions.map((question, index) => {
            if (index !== currentIndex) return null;
            if (question.type === constant.TEXT_FIELD) {
                return <TextFieldQuestion key={index} question={question} onBack={this.onBack} onNext={this.onNext} updateState={this.updateState} />
            } else if (question.type === constant.TEXT_AREA_FIELD) {
                return <TextAreaFieldQuestion key={index} question={question} onBack={this.onBack} onNext={this.onNext} updateState={this.updateState} />
            } else if (question.type === constant.NUMBER_FIELD) {
                return <NumberFieldQuestion key={index} question={question} onBack={this.onBack} onNext={this.onNext} updateState={this.updateState} />
            } else if (question.type === constant.RANGE_SELECT) {
                return <RatingQuestion key={index} question={question} onBack={this.onBack} onNext={this.onNext} updateState={this.updateState} />
            } else if (question.type === constant.SINGLE_CHOICE) {
                return <SingleChoiceQuestion key={index} question={question} onBack={this.onBack} onNext={this.onNext} updateState={this.updateState} />
            } else if (question.type === constant.YES_NO_CHOICE) {
                return <YesNoChoiceQuestion key={index} question={question} onBack={this.onBack} onNext={this.onNext} updateState={this.updateState} />
            } else return null
        })

        const headerView = (
            <div className="headerView">
                <div className="navBar p-4">
                    <a href="#" className="item">Survey Result</a>
                    <a href="#" className="item">Survey Result</a>
                </div>
                {/* <div className="pt-5 title">
                    <h2>Graduated Student Survey</h2>
                    <div className="trademark font-weight-light h5">
                        University of Technology (Yatanarpon Cyber City)
                    </div>
                </div> */}
                <div className="image-container">
                    {/* <image src="https://static.neris-assets.com/images/homepage/community.svg" alt="image" /> */}
                    <div className="image-wrapper">
                        <img width="400" height="300" src="https://static.neris-assets.com/images/homepage/community.svg" />
                    </div>
                </div>
            </div>
        )

        return (
            <div className="container-fluid-1 h-100" >
                <header className="default-header">
                    <nav className="navbar navbar-expand-lg  navbar-light">
                        <div className="container">
                            <a className="navbar-brand" href="index.html">
                                {/* <img width="42" src="https://www.utycc.edu.mm/stock-img/xlogo.png.pagespeed.ic.Ri0Fndsv59.webp" alt="" /> */}
                                <span className="px-2 text-white utycc-title">UT-YCC</span>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="lnr lnr-menu"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="courses.html">Survey</a></li>
                                    <li><a href="courses.html">Results</a></li>                                   
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <section className="home-banner-area">
                    <div className="container">
                        <div className="row justify-content-center fullscreen align-items-center" style={{ height: 817 }}>
                            <div className="col-lg-6 col-md-8 home-banner-left">
                                <h1 className="text-white">University of Technology<br /></h1>
                                    <h2 className="text-white" style={{ fontWeight: "normal"}}>(Yatanarpon Cyber City)</h2>

                                <p className="mx-auto text-white  mt-20 mb-40">
                                    <span className="h2 text-white">&ldquo;</span>Shape and Bright Your Future at UTYCC<span className="h2 text-white">&rdquo;</span>
                                </p>
                            </div>
                            <div className="offset-lg-1 col-lg-5 col-md-12 home-banner-right">
                                <img className="img-fluid" src="https://colorlib.com/preview/theme/eclipse/img/header-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section class="feature-area">
                    <div class="container-fluid">
                        <div class="feature-inner row">
                            <div class="col-lg-2 col-md-6">
                                <div class="feature-item d-flex">
                                    <i class="ti-book"></i>
                                    <div class="ml-20">
                                        <h4>Vision</h4>
                                        <p>
                                            To be a Globally Remarkable Research based University and Cyber University
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="feature-item d-flex">
                                    <i class="ti-cup"></i>
                                    <div class="ml-20">
                                        <h4>Mission</h4>
                                        <p>
                                            To provide skillful engineers and outstanding researchers
                                            To create broad access of engineering education opportunities with smart learning
                                            To be a national/regional/global level high ranking university
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6">
                                <div class="feature-item d-flex border-right-0">
                                    <i class="ti-desktop"></i>
                                    <div class="ml-20">
                                        <h4>Motto</h4>
                                        <p>
                                            "Shape and Bright Your Future at UTYCC"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer class="footer-area section-gap">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-10 single-footer-widget pt-4">
                                <h4>Contact Us</h4>
                                <ul>
                                    <li><a className="d-flex"><i className="fa fa-phone px-2 primary-text-color pt-1" /><p>+95-025178100, +95-025178200, +95-025178103</p></a></li>
                                    <li><a className="d-flex"><i className="fa fa-envelope px-2 primary-text-color pt-1" /><p>info@utycc.edu.mm</p></a></li>
                                    <li><a className="d-flex"><i className="fa fa-envelope-o px-2 primary-text-color pt-1" /><p>most.yatanarpon@gmail.com</p></a></li>
                                    <li><a className="d-flex"><i className="fa fa-map-marker px-2 primary-text-color pt-1" /><p>At 28 miles on Mandalay – Lashio road, between Pyin Sar Village and Thone Taung Village, Pyin Oo Lwin, Myanmar.</p></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-bottom row align-items-center">
                            <div class="col-lg-6 col-md-12 footer-social justify-content-center">
                                <a href="https://www.utycc.edu.mm/"><i class="fa fa-globe" title="Official website"></i></a>
                                <a href="#"><i class="fa fa-facebook" title="Official facebook page"></i></a>                            
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        )

        /*
            if(currentIndex===questions.length) {
                return (
                    <div className="container-fluid h-100">
                        <div className="row justify-content-center h-100 align-items-center">
                            <div className="col-lg-6 col-sm-12 font-weight-bold">
                                <div className="text-center">
                                    <strong>Thank you For your participation</strong>
                                </div>
                                <div className="p-4">
                                    <strong>Result</strong>
                                </div>
                                <div className="p-3 py-5border bg-light rounded">
                                    <small><pre>{JSON.stringify(questions, null, 2)}</pre></small>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                )
            }
    
            return (
                <div className="container-fluid h-100" >
                    <div className="row shapeContainer">
                        <div className="col">
                            {headerView}
                            <svg viewBox="0 0 600 105" preserveAspectRatio="none" className="shape">
                                <polygon points="600 61.82 476.72 105 351 74.68 157 105 0 55.39 0 -87 600 -87 600 61.82" className="c1">
                            </polygon></svg>
                        </div>
                    </div>
                    <div className="row justify-content-center h-100 align-items-center bg-transparent" style={{ marginTop: -150 }}>
                        <div className="col-lg-6 col-sm-12">
                            <div className="pt-5 title">
                                <h2>Graduated Student Survey</h2>
                                <div className="trademark font-weight-light h5 py-3">
                                    University of Technology (Yatanarpon Cyber City)
                                </div>
                            </div>
                            { questionViews }
                        </div>
                    </div>
                </div>
            )
            */
    }

}

export default App;