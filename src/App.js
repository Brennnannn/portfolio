import './styles/globals.css';
import React, { useState, useEffect } from 'react';
import Initial from './stages/Initial';

import Octogon from './shapes/Octogon.js'


const title = "Brennan Zaleski"

function App() {

  const [typedTitle, setTypedTitle] = useState('')
  const [linePrep, setLinePrep] = useState(0)
  const [lineOneAnimate, setLineOneAnimate] = useState(false)

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypedTitle(title.slice(0, i))
      i++
      if (i > title.length) {
        clearInterval(timer)
        setLinePrep(1)
      }
    }, 70);
    return () => clearInterval(timer)
  }, [title])

  useEffect(() => {
    if (linePrep === 1) {
      setLineOneAnimate(true)
    }
  }, [linePrep])

  return (
    <main>
      <h1 className='center'>
        <span>{typedTitle}</span>
        <span style={{opacity: 0}}>{title.substring(typedTitle.length)}</span>
      </h1>

      <Initial />

    </main>
  );
}

export default App;
