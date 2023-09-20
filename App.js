import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([])
  const [userInput, setUserInput] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [currentIndex, setCurrentIndex] = useState()

  function addItem() {
    const tempList = [...list]
    tempList.push(userInput)
    setList(tempList)
    setUserInput('')
  }

  function deleteItem(index) {
    const tempList = [...list]
    tempList.splice(index, 1)
    setList(tempList)
  }

  function editItem(index) {
    const value = list[index]
    setUserInput(value)
    setEditMode(true)
    setCurrentIndex(index)
  }

  function updateItem() {
    const tempList = [...list]
    tempList[currentIndex] = userInput
    setList(tempList)
    setEditMode(false)
    setUserInput('')
  }

  function updateInputState(e) {
    setUserInput(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={updateInputState} placeholder='Enter any item' value={userInput} />
        {!editMode ? <button onClick={addItem}>Add</button> :
          <button onClick={updateItem}>Update</button>}

        <ul>
          {list.map(function (item, index) {
            return <li style={currentIndex===index ?{backgroundColor:'orange'}:{}}>{item}<button onClick={() => deleteItem(index)}>Delete</button>
              <button onClick={() => editItem(index)} value={userInput}>Edit</button></li>

          })}

        </ul>


      </header>
    </div>
  );


}

export default App;
