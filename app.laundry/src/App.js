import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(true)
  const [isStarted, setIsStarted] = useState(false)
  const [program, setProgram] = useState({
    mode:'default',
    time:10,
    rinse:20
  })
  let [leftTime, setLeftTime] = useState(program.time)
  function start(){
    if (isOpen == true){
      alert ('door is open')
      return
    }
     const interval =setInterval(()=>{
      setLeftTime(leftTime --)
      if (leftTime == -1){
        clearInterval(interval)
        setLeftTime(program.time)
        openDoor()
        setIsStarted (false)
      }
     },1000)
     return setIsStarted(true)
  }

  function openDoor(){
    return setIsOpen(true)
  }

  function closeDoor(){
    return setIsOpen(false)
  }

  function onChange(){

  }

  function ontimeChange(e){
    program.time=e.target.value
    setLeftTime(program.time)
    return setProgram({...program})
  }

  function onprogrammingChange(e){
    program.time=e.target.value
    return setIsStarted(...program)
  }

  function onrinseChange(e){
    if(start == true){
      return
    }
    program.rinse=e.target.value
    return setProgram({...program})
  }

  return (
    <div className="App">
      <div id="washingmachine">
        <div id="display">
            <div id="controls">
                <h3 id="rinse">{program.rinse} rpm</h3>
                <h3 id="time">{program.time} s</h3>
            </div>
          <div className='controls'>
            <input disabled={isStarted} type="range" id="timerange" value={program.time} name="points" min="5" max="20"
              onChange={ontimeChange}/>
            <input disabled={isStarted} type="range" id="rinserange" value={program.rinse} name="points" min="10" max="60"
              onChange={onrinseChange}/>
            <button disabled={isStarted} id="start" onClick={start} onChange={onprogrammingChange}></button>
          </div>
          {isOpen ? <button id="close" onClick={closeDoor}>Close</button>: <button id="open" disabled={isStarted} onClick={openDoor}>Open</button>}
      </div>
        
    {
    isOpen ? <div id="clothes"></div> : <div  id="door" className={(isOpen ? 'open': 'close') && isStarted && 'rotating-door'}
    style={{
      animationDuration: `${60 / program.rinse}s`,
    }}
    ></div>    
    }

    
    <div id="handle"></div>
    <div id="programming">
       <h2>Status: <span id="isrunning">{isStarted ?'on': 'off' }</span></h2>
       <h2>Door: <span id="isondoor">{isOpen ? 'Open': 'Close'}</span></h2>
       <h2>Time: <span id="isontime">{leftTime}</span></h2>
       <h2>RPM: <span id="isonrpm">{program.rinse}</span></h2>
    </div>
    </div>
      <div id="accessories"> 
         <div className={isOpen && 'open'}></div>
         <div id="liquid"></div>
     </div>
    </div>
  );
}

export default App;
