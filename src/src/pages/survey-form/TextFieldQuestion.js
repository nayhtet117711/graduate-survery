import React, { } from "react"

export default props => {
    const { question, onNext = () => null, onBack = () => null, updateState } = props
    const onChange = (e) => {
        question.answer[0] = e.target.value
        updateState()
    }
    return (
        <div className="p-2">
            <div className="border p-4 rounded py-5 questionBox">
                {/* <small><pre>{JSON.stringify(question, null, 2)}</pre></small> */}
                <div className="form-group">
                    <label className="label" htmlFor={question.key}>{ question.text }</label>
                    <input type="text" className="form-control" id={question.key} value={question.answer[0] || ""} onChange={onChange } placeholder="Please fill this field" />
                </div>
                <div className="d-flex justify-content-between py-4 px-1">
                    <button className="btn btn-primary" onClick={onBack}>Previous</button>
                    <button className="btn btn-primary" onClick={() => onNext(question)}>Next</button>
                </div>
            </div>
        </div>
    )
}
