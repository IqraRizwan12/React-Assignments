import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Dashboard from './views/Dashboard';
import Detail from './views/Detail';
import PostAd from './views/PostAd';

function App() {
  const [screen, setScreen] = useState()

  function updateScreen(screen) {
    setScreen(screen)
  }


  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
        <div>
          <button style={{borderRadius:'10px' ,fontSize:'25px',marginLeft:'10px'}} onClick={() => updateScreen('detail')}>Detail</button>
          <button style={{borderRadius:'10px' ,fontSize:'25px',marginLeft:'10px'}} onClick={() => updateScreen('postad')}>PostAd</button>
        </div>

        {screen === 'detail' && <Detail />}
        {screen === 'postad' && <PostAd />}

      </header >
    </div >
  );


}

export default App;
