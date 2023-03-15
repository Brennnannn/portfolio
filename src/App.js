import './styles/globals.css';
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Octogon from './shapes/Octogon.js' 

const title = "Brennan Zaleski"
const content = "coming soon"

function App() {

  const [typedTitle, setTypedTitle] = useState('')
  const [typedContent, setTypedContent] = useState('')
  const [linePrep, setLinePrep] = useState(0)

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypedTitle(title.slice(0, i))
      ++i
      if (i > title.length) {
        clearInterval(timer)
        setLinePrep(1)
      }
    }, 70);
    return () => clearInterval(timer)
  }, [title])

  useEffect(() => {
    let i = content.length;
    const timer = setInterval(() => {
      setTypedContent(content.slice(i, content.length))
      --i
      if (i < 0) {
        clearInterval(timer)
      }
    }, 87);
    return () => clearInterval(timer)
  }, [content])

  useEffect(() => {
    if (linePrep === 1) {
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
      </div>
      <h1 className='center' style={{fontSize: '20px'}}>
      <span style={{opacity: 0}}>{content.substring(typedContent.length)}</span>
      <span>{typedContent}</span>
      </h1>


    </main>
  );
}

export default App;
