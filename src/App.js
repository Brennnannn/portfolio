import logo from './logo.svg';
import './styles/globals.css';
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

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
          marginLeft: '-1px',
          marginTop: '40px',
          borderLeft: '#3c3c3c 1px solid',
          height: '180px',
        }}></div>

        <div className='treeStructMenu1' style={{marginTop: '100px', marginLeft: '-2px'}}>
          <div style={{                     //Upper Left Corner
            marginTop: '100%',
            width: '141%',
            transform: 'rotate(-45deg)',
            transformOrigin: 'top left',
            borderTop: '#3c3c3c 1px solid',
          }}></div>

          <div style={{borderTop: '#3c3c3c 1px solid'}}></div>      

          <div style={{                     //Upper Right Corner
            marginLeft: '-0.25px',
            width: '141%',
            transform: 'rotate(45deg)',
            transformOrigin: 'top left',
            borderTop: '#3c3c3c 1px solid',
          }}></div>

          <div></div>

          <div style={{                   //Text field
            width: '100%',
            height: '80px',
          }}>Test</div>

          <div style={{                   //Right side bar
            marginLeft: '-0.9px',
            width: '100%',
            borderRight: '#3c3c3c 1px solid',
            height: '100px',
          }}></div>

          <div style={{                 //Lower left corner
            marginTop: '-0.55px',
            marginLeft: '0.5px',
            width: '141%',
            transform: 'rotate(45deg)',
            transformOrigin: 'top left',
            borderTop: '#3c3c3c 1px solid',
          }}></div>

          <div style={{borderBottom: '#3c3c3c 1px solid'}}></div>

          <div style={{                 //Lower right corner
            marginTop: '100%',
            width: '141%',
            transform: 'rotate(-45deg)',
            transformOrigin: 'top left',
            borderTop: '#3c3c3c 1px solid',
          }}></div>

        </div>
        
      </div>

    </main>
  );
}

export default App;
