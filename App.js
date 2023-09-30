import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Showresult from './components/Showresult'


const questions = [
  {
    title: 'What does HTML stand for?',
    options: ['HyperText Markup Language', 'HighText Markup Language', 'HyperText Markdown Language', 'None of above'],
    correctAnswer: 'HyperText Markup Language'

  },
  {
    title: 'How many sizes of headers are available in HTML by default?',
    options: ['5', '4', '3', '6'],
    correctAnswer: '6'

  },
  {
    title: 'HTML files are saved by default with the extension?',
    options: ['.html', '.h', '.ht', 'None of above'],
    correctAnswer: '.html'

  },
  {
    title: 'What does CSS stand for?',
    options: ['Cascading Style Sheet', 'Coloured Special Sheets', 'Colour and Style Sheet', 'None of above'],
    correctAnswer: 'Cascading Style Sheet'

  },
  {
    title: 'What  is React?',
    options: ['Web development Framework', 'JavaScript Library', 'jQuery', 'Web Server'],
    correctAnswer: 'JavaScript Library'

  }
]


function App() {
  const [questionNo, setQuestionNo] = useState(0)
  const options = questions[questionNo].options
  const correctAnswer = questions[questionNo].correctAnswer
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState()
  const [showResult, setShowResult] = useState(false)
 
  function nextQuestion() {
    updateScore()
    let tempQuestionNo = questionNo
    setQuestionNo(++tempQuestionNo)

  }

  function updateScore() {
    let tempScore = score
    if (selectedOption === correctAnswer) {
      setScore(++tempScore)
    }
  }

  function finishQuiz(e) {
    updateScore()
    setShowResult(true)
   
  }

  function selected(e) {
    setSelectedOption(e.target.value)
  }

  return (

    <div className="App">
      <header className="App-header">
        <h4>Q{questionNo + 1}) {questions[questionNo].title}</h4>

        {options.map(function (item) {
          return <div><input checked={selectedOption === item} onChange={selected} name='Q' type='radio' value={item} />{item}</div>
        })}


        {questionNo < questions.length - 1 && <button style={{ height: 50, width: 100, fontSize: 30  }} onClick={nextQuestion}>Next</button>}
        {questionNo === questions.length - 1 &&  <button disabled={showResult && true} style={{ height: 50, width: 100, fontSize: 30 }} onClick={finishQuiz}>Finish</button>}

        {showResult && <Showresult score={score} />}

      </header >
    </div >
  );


}

export default App;
