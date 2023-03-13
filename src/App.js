import './styles/globals.css';
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
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

  const spring = useSpring({
      from: { borderImage: 'linear-gradient(to right, #000 0%, transparent 0%) 100% 1' },
      to: { borderImage: 'linear-gradient(to right, #000 100%, transparent 100%) 100% 1' }, 
  })

  return (
    <main>
      <h1 className='center'>
        <span>{typedTitle}</span>
        <span style={{opacity: 0}}>{title.substring(typedTitle.length)}</span>
      </h1>

      <div className='treeStructMain'>
        <div></div>
        <div></div>
        <div></div>
        <animated.div style={{...{borderTop: '#3c3c3c 1px solid'}, ...spring }}> </animated.div>
        
        <div style={{
          width: '141%',
          transform: 'rotate(45deg)',
          transformOrigin: 'top left',
          borderTop: '#3c3c3c 1px solid',
        }}></div>

        <div style={{
          display: 'none',
          marginLeft: '-1px',
          marginTop: '40px',
          borderLeft: '#3c3c3c 1px solid',
          height: '180px',
        }}></div>

        <Octogon
        width={'40'}
        bezelSide={'20'} />
        
      </div>

    </main>
  );
}

export default App;
