import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function MCQOption(props) {
    return (
        <>
            <input type="radio" id={"g" + props.grpn + "o" + props.optn} name={"optgrp" + props.grpn} value={props.value} />
            <label htmlFor={"g" + props.grpn + "o" + props.optn}>{props.display}</label>
            <br />
        </>
    );
}

function QuestionBox(props) {
    return (
        <>
            <div className="question-box">
                <p>Question {props.num}.</p>
                <p>{props.question}</p>
                {props.options.map((option) => (
                    <MCQOption
                        grpn={option.grpn}
                        optn={option.optn}
                        value={option.value}
                        display={option.display}
                    />
                ))}
            </div>
            <br />
        </>
    );
}

function Quiz() {
    return (
        <>
            <div id="qcont">
                <h1>Quiz Management System</h1>
                {questions.map((question) => (
                    <QuestionBox
                        num={question.num}
                        question={question.question}
                        options={question.options}
                    />
                ))}
                {!showResult && (
                    <div id="scont">
                        <input type="button" id="submitbtn" onClick={gradeTest} value="Submit" />
                    </div>
                )}
                {showResult && (
                    <div id="result">
                        {resText}
                    </div>
                )}
            </div>
        </>
    );
}

function gradeTest() {
    showResult = true;
    var submittedanswers = [];
    for (let i = 1; i <= 3; i++) {
        var radios = document.getElementsByName("optgrp" + i);
        for (let j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                submittedanswers.push(radios[j].value);
            }
            radios[j].disabled = true;
        }
    }
    var score = 0;
    for (let i = 0; i < 3; i++) {
        if (correctanswers[i] === submittedanswers[i]) {
            score += 5;
        }
    }
    resText = "You have scored " + score + " marks.";
    if (score === 0) {
        document.body.style.backgroundColor = "hsl(0, 100%, 85%)";
        resText += "\nBetter luck next time.";
    } else if (score === 15) {
        document.body.style.backgroundColor = "hsl(120, 100%, 85%)";
        resText += "\nCongratulations! 🎉";
    }
    root.render(
        <Quiz />
    );
}

var showResult = false;

var resText = "";

const correctanswers = ["newdelhi", "pda", "darwin"];

const questions = [
    {
        "num": 1, "question": "What is the capital of India?",
        "options":
            [
                { "grpn": "1", "optn": "1", "value": "mumbai", "display": "Mumbai", },
                { "grpn": "1", "optn": "2", "value": "kolkata", "display": "Kolkata", },
                { "grpn": "1", "optn": "3", "value": "chennai", "display": "Chennai", },
                { "grpn": "1", "optn": "4", "value": "newdelhi", "display": "New Delhi", }
            ]
    },
    {
        "num": 2, "question": "Which of the following is more powerful?",
        "options":
            [
                { "grpn": "2", "optn": "1", "value": "dfa", "display": "Deterministic Finite Automata", },
                { "grpn": "2", "optn": "2", "value": "nfa", "display": "Non-Deterministic Finite Automata", },
                { "grpn": "2", "optn": "3", "value": "pda", "display": "Push-Down Automata", },
                { "grpn": "2", "optn": "4", "value": "enfa", "display": "Epsilon-NFA", }
            ]
    },
    {
        "num": 3, "question": "Which kernel is used by modern macOS?",
        "options":
            [
                { "grpn": "3", "optn": "1", "value": "ntkernel", "display": "NT Kernel", },
                { "grpn": "3", "optn": "2", "value": "darwin", "display": "Darwin", },
                { "grpn": "3", "optn": "3", "value": "linux", "display": "Linux", },
                { "grpn": "3", "optn": "4", "value": "zircon", "display": "Zircon", }
            ]

    },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Quiz />
);
