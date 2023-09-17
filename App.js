import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([])
  const[userInput,setUserInput] = useState('')
  function addItem(){
    const tempList = [...list]
    tempList.push(userInput)
    setList(tempList)

  }
  function deleteItem(index){
   const tempList = [...list]
   tempList.splice(index,1)
   setList(tempList)
  }

  function editItem(index ){
    const tempList = [...list]
    const a = prompt('Enter updated value')
   tempList.splice(index,1,a)
   setList(tempList)
    
   
  }
  function updateInputState(e){
    setUserInput(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
      <input onChange={updateInputState} placeholder='Enter any item' />
      <br/>
      <button onClick={addItem}>Add Item</button>

      <ul>
        {list.map(function(item,index){
          return <li>{item}<button onClick={() => deleteItem(index)}>Delete</button><button onClick={()=>editItem(index)} >Edit</button></li>
        })}

      </ul>
        

      </header>
    </div>
  );
}

export default App;
