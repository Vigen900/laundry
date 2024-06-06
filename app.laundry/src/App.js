import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(true)

  function start(){

  }

  function openDoor(){
    return setIsOpen(true)
  }

  function closeDoor(){
    return setIsOpen(false)
  }

  function onChange(){

  }

  function ontimeChange(){

  }

  function onprogrammingChange(){

  }

  function onrinseChange(){

  }

  return (
    <div className="App">
      <div id="washingmachine">
        <div id="display">
            <div id="controls">
                <h3 id="rinse">20rpm</h3>
                <h3 id="time">10s</h3>
            </div>
          <div className='controls'>
           <input type="range" id="timerange" name="points" min="5" max="20"
            onChange={ontimeChange}/>
            <input type="range" id="rinserange" name="points" min="10" max="60"
            onChange={onrinseChange}/>
            <button id="start" onClick={start} onChange={onprogrammingChange}></button>
        </div>
        {isOpen ? <button id="close" onClick={closeDoor}>Close</button>: <button id="open" onClick={openDoor}>Open</button>}
        
        
    </div>
        
    <div id="door" ></div>
    <div id="clothes"></div>
    <div id="handle"></div>
    <div id="programming">
       <h2>Status: <span id="isrunning">Off</span></h2>
       <h2>Door: <span id="isondoor">{isOpen ? 'Open': 'Close'}</span></h2>
       <h2>Time: <span id="isontime">-</span></h2>
       <h2>RPM: <span id="isonrpm">-</span></h2>
    </div>
    </div>
    <div id="accessories">
        <div id="laundry" className={isOpen && 'open'}></div>
        <div id="liquid"></div>
    </div>
    </div>
  );
}

export default App;
