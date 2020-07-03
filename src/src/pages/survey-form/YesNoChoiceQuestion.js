import React, { useState } from "react"

import constant from "../../config/constant"
import TextFieldQuestion from "./TextFieldQuestion"
import TextAreaFieldQuestion from "./TextAreaFieldQuestion"
import NumberFieldQuestion from "./NumberFieldQuestion"
import RatingQuestion from "./RatingQuestion"
import SingleChoiceQuestion from "./SingleChoiceQuestion"
import YesNoChoiceQuestion from "./YesNoChoiceQuestion"

export default props => {
    const { question, onNext = () => null, onBack = () => null, updateState } = props
    const [currentIndex, setCurrentIndex] = useState(-1)
    const onChange = (e) => {
        question.answer[0] = e.target.value
        updateState()
    }

    const onBackInner = (q) => {
        if (currentIndex - 1 >= 0)
            setCurrentIndex(currentIndex - 1)
        else {
            onBack(question)
        }
    }

    const onNextInner = (q) => {
        // console.log("YYYYEEEEEE: ", q, currentIndex)
        if (question.yesQuestion && question.answer.length > 0 && question.answer[0] == question.choice[0] && currentIndex<0) {
            console.log("Y 1")
            setCurrentIndex(currentIndex + 1)
        }
        else if (question.yesQuestion && currentIndex + 1 < question.yesQuestion.length && q.answer.length > 0 && q.answer[0].trim().length > 0) {
            console.log("Y 2")
            setCurrentIndex(currentIndex + 1)
        } else {
            console.log("yesNo: ", q, question.answer > 0, question.answer, question.choice[0])
            onNext(question)
        }
    }

    const choiceViews = question.choice.map((v, k) => {
        return (
            <div className="form-check form-check-inline p-1" key={k}>
                <input type="radio" className="form-check-input" name={question.key} id={question.key + k} value={v} onChange={onChange} checked={question.answer.length > 0 && question.answer[0] == v} />
                <label htmlFor={question.key + k} className="form-check-label">{v}</label>
            </div>
        )
    })

    const choiceViewsOthers = question.yesQuestion ? question.yesQuestion.map((vv, index) => {
        if (index !== currentIndex) return null;
        if (vv.type === constant.TEXT_FIELD) {
            return <TextFieldQuestion key={index} question={vv} onBack={onBackInner} onNext={onNextInner} updateState={updateState} />
        } else if (vv.type === constant.TEXT_AREA_FIELD) {
            return <TextAreaFieldQuestion key={index} question={vv} onBack={onBackInner} onNext={onNextInner} updateState={updateState} />
        } else if (vv.type === constant.NUMBER_FIELD) {
            return <NumberFieldQuestion key={index} question={vv} onBack={onBackInner} onNext={onNextInner} updateState={updateState} />
        } else if (vv.type === constant.RANGE_SELECT) {
            return <RatingQuestion key={index} question={vv} onBack={onBackInner} onNext={onNextInner} updateState={updateState} />
        } else if (vv.type === constant.SINGLE_CHOICE) {
            return <SingleChoiceQuestion key={index} question={vv} onBack={onBackInner} onNext={onNextInner} updateState={updateState} />
        } else if (vv.type === constant.YES_NO_CHOICE) {
            return <YesNoChoiceQuestion key={index} question={vv} onBack={onBackInner} onNext={onNextInner} updateState={updateState} />
        } else return null
    }) : null

    if (currentIndex > -1 )
        return (choiceViewsOthers)
    else 
        return (
            <div className="p-2">
                <div className="bg-light border p-4 rounded py-5">
                    {/* <small><pre>{JSON.stringify(question, null, 2)}</pre></small> */}
                    <label className="form-check-label">{question.text}</label>
                    <div className="flex flex-column px-2 py-2">
                        {choiceViews}
                    </div>
                    <div className="d-flex justify-content-between py-4 px-1">
                        <button className="btn btn-primary" onClick={() => onBackInner(question)}>Previous</button>
                        <button className="btn btn-primary" onClick={() => onNextInner(question)}>Next</button>
                    </div>
                </div>
            </div>
        )
}