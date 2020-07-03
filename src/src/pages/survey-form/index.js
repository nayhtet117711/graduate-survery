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
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-lg-6 col-sm-12">
                        { questionViews }
                    </div>
                    
                </div>
            </div>
        )
    }

}

export default App;