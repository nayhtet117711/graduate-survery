import React, { Component } from "react"
import * as surveyQuestion from "../../config/dummy"
import constant from "../../config/constant"

import TextFieldQuestion from "./TextFieldQuestion"
import TextAreaFieldQuestion from "./TextAreaFieldQuestion"
import NumberFieldQuestion from "./NumberFieldQuestion"
import RatingQuestion from "./RatingQuestion"
import SingleChoiceQuestion from "./SingleChoiceQuestion"
import YesNoChoiceQuestion from  "./YesNoChoiceQuestion"

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
        if(this.state.currentIndex - 1 >= 0)
            this.setState(prev => ({ currentIndex: prev.currentIndex - 1 }))
    }

    onNext = (question) => {
        if (this.state.currentIndex + 1 <= this.state.questions.length && question.answer.length>0 && question.answer[0].trim().length>0)
            this.setState(prev => ({ currentIndex: prev.currentIndex+1 }))
    }

    updateState = () => this.setState({})

    render() {
        const { questions, currentIndex } = this.state

        const questionViews = questions.map((question, index) => {
            if(index!==currentIndex) return null;
            if(question.type===constant.TEXT_FIELD) {
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
                <div className="pt-5 title">
                    <h2>Graduated Student Survey</h2>
                    <div className="trademark font-weight-light h5">
                        University of Technology (Yatanarpon Cyber City)
                    </div>
                </div>
                <div className="image-container">
                    {/* <image src="https://static.neris-assets.com/images/homepage/community.svg" alt="image" /> */}
                    <div class="image-wrapper">
                        <img width="400" height="300" src="https://static.neris-assets.com/images/homepage/community.svg" />
                    </div>
                </div>
            </div>
        )

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
                            <polygon points="600 61.82 476.72 105 351 74.68 157 105 0 55.39 0 -87 600 -87 600 61.82" class="c1">
                        </polygon></svg>
                    </div>
                </div>
                <div className="row justify-content-center h-100 align-items-center bg-transparent" style={{ marginTop: -150 }}>
                    <div className="col-lg-6 col-sm-12">
                        { questionViews }
                    </div>
                </div>
            </div>
        )
    }

}

export default App;