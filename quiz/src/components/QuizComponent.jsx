import React, { Component } from 'react'
// import './styles.css'
export default class QuizComponent extends Component {
  render() {
    return (
      <div id="quizComponent">
        <div id="container">
            <h1 id="quizComponentHeading">Question</h1>
            <p id="questionNum">1 of 15</p>
            <p id="question">Which is the only mammal that can jump ?</p>
            <div id="options-container">
                <button className="options">Dog</button>
                <button className="options">Elephant</button>
                <button className="options">Goat</button>
                <button className="options">Lion</button>
            </div>
            <div id="actions-container">
                <button className="actions" id="previous">Previous</button>
                <button className="actions" id="next">Next</button>
                <button className="actions" id="quit">Quit</button>
            </div>
        </div>
      </div>
    )
  }
}
