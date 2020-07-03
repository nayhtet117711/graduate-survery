import constant from "./constant"

export const surveyFormData = [
    {
        key: "name",
        text: "Name",
        type: constant.TEXT_FIELD,
        answer: []
    },
    /*{
        key: "gender",
        text: "Gender",
        type: constant.SINGLE_CHOICE,
        choice: ["Male", "Female"],
        answer: []
    },
    {
        key: "email",
        text: "Email Address",
        type: constant.TEXT_FIELD,
        answer: []
    },
    {
        key: "gratuatedYear",
        text: "Gratuated Year",
        type: constant.SINGLE_CHOICE,
        choice: ["2016", "2017", "2018", "2019", "2020"],
        answer: []
    },
    {
        key: "degree",
        text: "Degree at UTYCC",
        type: constant.SINGLE_CHOICE,
        choice: ["B.E(Information Science)", "B.E(Computer Engineering)", "B.E(EC)"],
        answer: []
    },
    {
        key: "receivedOtherDegrees",
        text: "Have you received other degrees?",
        type: constant.YES_NO_CHOICE,
        choice: ["Yes", "No"],
        answer: [],
        yesQuestion: [
            {
                key: "mentionDegree",
                text: "Please mention your degree:",
                type: constant.TEXT_FIELD,
                answer: []
            },
        ],
    }, */
    {
        key: "currentlyUniversity",
        text: "Are you currently in the University/College?",
        type: constant.YES_NO_CHOICE,
        choice: ["Yes", "No"],
        answer: [],
        yesQuestion: [
            {
                key: "uniColledgeName",
                text: "University/College Name:",
                type: constant.TEXT_FIELD,
                answer: []
            },
            {
                key: "mentionDegree",
                text: "Please mention your current degree program:",
                type: constant.TEXT_FIELD,
                answer: []
            },
            {
                key: "workingNow",
                text: "Are you working now?",
                type: constant.YES_NO_CHOICE,
                choice: ["Yes", "No"],
                answer: [],
                yesQuestion: [
                    {
                        key: "orginationWorkingFor",
                        text: "Which organization do you work?",
                        type: constant.SINGLE_CHOICE,
                        choice: ["Government", "Company", "Own Business", "Other"],
                        answer: [],
                        choiceQuestion: {
                            "Government": [
                                {
                                    key: "ministryName",
                                    text: "Ministry Name:",
                                    type: constant.TEXT_FIELD,
                                    answer: [],
                                },
                                {
                                    key: "departmentName",
                                    text: "Department Name:",
                                    type: constant.TEXT_FIELD,
                                    answer: [],
                                },
                                {
                                    key: "location",
                                    text: "Location:",
                                    type: constant.TEXT_FIELD,
                                    answer: [],
                                },
                                {
                                    key: "position",
                                    text: "Position:",
                                    type: constant.TEXT_FIELD,
                                    answer: [],
                                },
                                {
                                    key: "totalMonthYearExp",
                                    text: "Total months/year of experience:",
                                    type: constant.NUMBER_FIELD,
                                    mofier: ["Year", "Month"],
                                    answer: [],
                                },
                                {
                                    key: "salary",
                                    text: "Salary:",
                                    type: constant.NUMBER_FIELD,
                                    answer: [],
                                },
                            ]
                        },
                        "Company": [
                            {
                                key: "companyName",
                                text: "Company Name:",
                                type: constant.TEXT_FIELD,
                                answer: [],
                            },
                            {
                                key: "companyAddress",
                                text: "Company Address:",
                                type: constant.TEXT_FIELD,
                                answer: [],
                            },
                            {
                                key: "numberEmployeeCompany",
                                text: "Number of employee in your company(estimate):",
                                type: constant.NUMBER_FIELD,
                                answer: [],
                            },
                            {
                                key: "technologyYouApplied",
                                text: "Which technologies do you applied?",
                                type: constant.TEXT_FIELD,
                                answer: [],
                            },
                            {
                                key: "positionCompany",
                                text: "Which position do you perform in your company?:",
                                type: constant.TEXT_FIELD,
                                answer: [],
                            },
                            {
                                key: "totalMonthExpCompany",
                                text: "Total Months of Experience:",
                                type: constant.NUMBER_FIELD,
                                answer: [],
                            },
                            {
                                key: "salaryCompany",
                                text: "What is your monthly salary in your current job?",
                                type: constant.NUMBER_FIELD,
                                answer: [],
                            },
                        ],
                        "Own Business": [
                            {
                                key: "typeOfBusiness",
                                text: "Type of Business:",
                                type: constant.TEXT_FIELD,
                                answer: [],
                            },
                            {
                                key: "salaryIncomeBusiness",
                                text: "Salary or Income",
                                type: constant.NUMBER_FIELD,
                                answer: [],
                            }
                        ],
                        "Other": [
                            {
                                key: "whatYouDoing",
                                text: "What currently are you doing?",
                                type: constant.TEXT_FIELD,
                                answer: [],
                            }
                        ]
                    },
                ]
            }
        ]
    },
    {
        key: "satisfiedCurrentJob",
        text: "How satisfied are you with your current job?",
        type: constant.SINGLE_CHOICE,
        choice: ["Very Satisfied", "Satisfied", "Somewhat Satisfied", "Dissatisfied", "Very Dissatisfied"],
        answer: [],
    },
    {
        key: "programStudentCoverage",
        text: "The program content studied in your university coverage in your professional life.",
        type: constant.SINGLE_CHOICE,
        choice: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
        answer: [],
    },
    {
        key: "closeRelatedMajor",
        text: "How closely related is your current job to your degree major?",
        type: constant.SINGLE_CHOICE,
        choice: ["Closely Related", "Related", "Unrelated"],
        answer: [],
    },
    {
        key: "thinkDegreeGetJob",
        text: "Do you think that degree of UTYCC is to support for getting  the jobs?",
        type: constant.YES_NO_CHOICE,
        choice: ["Yes", "No"],
        answer: [],
    },
    {
        key: "usefulActivityHelpJob",
        text: "How useful was the activities (projects, min-thesis, field trip) in helping you with your current job?",
        type: constant.SINGLE_CHOICE,
        choice: ["Extremely Useful", "Very Useful", "Somewhat Useful", "Not so Useful", "Not at all Useful"],
        answer: [],
    },
    {
        key: "recommandCompany",
        text: "How likely is it that you would recommend this company to a friend or colleague?",
        type: constant.RANGE_SELECT,
        rangeMin: 1,
        rangeMax: 5,
        answer: [],
    },
    {
        key: "rateDepartment",
        text: "Based on your experience as a student, rate the performance of the (here according department) Department of Information Science.",
        type: constant.SINGLE_CHOICE,
        choice: ["Outstanding", "More than Adequate", "Adequate", "Inadequate"],
        answer: [],
    },
    {
        key: "suggestUniversity",
        text: "Please give suggestions to improve our University.",
        type: constant.TEXT_AREA_FIELD,
        answer: [],
    },

]