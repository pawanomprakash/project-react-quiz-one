import React, { Component } from 'react'
// import './styles.css'
export default class QuizComponent extends Component {
  render() {
    return (
      <div>
        <div id="container">
            <h1 id="quizComponentHeading">Question</h1>
            <p id="questionNum">1 of 15</p>
            <p id="question">Which is the only mammal that can jump ?</p>
            <div id="options-container">
                <button class="options">Dog</button>
                <button class="options">Elephant</button>
                <button class="options">Goat</button>
                <button class="options">Lion</button>
            </div>
            <div id="actions-container">
                <button class="actions" id="previous">Previous</button>
                <button class="actions" id="next">Next</button>
                <button class="actions" id="quit">Quit</button>
            </div>
        </div>
      </div>
    )
  }
}
