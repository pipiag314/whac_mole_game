import './App.css'
import { useState, useEffect } from 'react'
import moleURL from './assets/images/mole.png'
import holeURL from './assets/images/hole.png'

function App() {
  const [moles, setMoles] = useState(new Array(9).fill(false));
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moles.length);
      const newMoles = [...moles]
      newMoles[randomIndex] = true;
      setMoles(newMoles);
    }, 1000)

    return () => {
      clearInterval(interval)
    } 
  }, [])

  function handleClick(mole) {
    if(mole) {
      setScore(score + 1)
      setMoles(new Array(9).fill(false))
    }
  }
  
  return (
    <>
      <h1>Score: {score}</h1>
      <div className='container'>
        {moles.map((mole, index) => (
          <img onClick={() => handleClick(mole)} key={index} src={mole ? moleURL : holeURL} />
          ))}
      </div>
    </>
  )
}

export default App
