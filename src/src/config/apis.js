
const BASE_URL = "http://localhost:3003"
const SURVEY_FORM_SUBMIT = `${BASE_URL}/survey-form-submmit`

export const surveyFormSubmit = (data, onSuccess, onError) => {
    const body = data.body
    fetch(SURVEY_FORM_SUBMIT, { 
        method: "POST",
        "Content-Type": "application/json",
        body: body
    })
    .then(res => {
        if (res.ok) return res.json()
        else throw res.statusText()
    })
    .then(data => onSuccess(data))
    .catch(error => onError(error))
}