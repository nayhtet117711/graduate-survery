import React from "react"

export default props => {
    const { question, onNext = () => null, onBack = () => null, updateState } = props
    const onChange = (e) => {
        question.answer[0] = e.target.value
        updateState()
    }

    return (
        <div className="p-2">
            <div className="bg-light border p-4 rounded py-5">
                {/* <small><pre>{JSON.stringify(question, null, 2)}</pre></small> */}
                <div className="form-group">
                    <label htmlFor={question.key}>{question.text}</label>
                    <div className="px-4">
                        <input type="range" className="form-control-range text-success py-3" min={0} max={5} step={1} id={question.key} value={question.answer[0] || 3} onChange={onChange} />
                    </div>
                </div>
                <div className="d-flex justify-content-between py-4 px-1">
                    <button className="btn btn-primary" onClick={onBack}>Previous</button>
                    <button className="btn btn-primary" onClick={() => onNext(question)}>Next</button>
                </div>
            </div>
        </div>
    )
}
