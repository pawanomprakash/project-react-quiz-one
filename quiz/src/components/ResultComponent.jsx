import React, { Component } from 'react'

export default class ResultComponent extends Component {
  render() {
    return (
      <div id="RC-container">
        <h1 id="ResultComponentHeading">Result</h1>
        <div id="result-container">
            <h3>You need more Practice ! </h3>
            <h1 id="scorestatement">Your Score is 20%</h1>
            <div id="results">
                <div class="resultStatements"> <p>Total number of question</p> <p>15</p> </div>
                <div class="resultStatements"> <p>Number of attempted questions</p> <p>9</p> </div>
                <div class="resultStatements"> <p>Number of correct answers</p> <p>3</p> </div>
                <div class="resultStatements"> <p>Number of wrong answers</p> <p>6</p> </div>
            </div>
        </div>
        <div id="RC-actionsContainer">
            <button class="RC-actions" id="playagain">Play Again</button>
            <button class="RC-actions" id="backtohome">Back to Home</button>
        </div>
      </div>
    )
  }
}
