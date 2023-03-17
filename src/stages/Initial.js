import { animated, useSpring, useTrail } from 'react-spring'
import Octogon from '../shapes/Octogon'

function Initial() {

    const routes = useTrail( 3, {
        from: { borderImage: 'linear-gradient(45deg, rgb(0,0,0, 1) 0%, rgb(0,0,0,0) 0%) 1' },
        to: { borderImage: 'linear-gradient(45deg, rgb(0,0,0, 1) 100%, rgb(0,0,0,0) 100%) 1' },
    })

    return (
        <div className='treeStructMain'>
        <div></div>
        <div></div>
        <div></div>
        <animated.div style={{...{borderTop: '#3c3c3c 1px solid'}, ...routes[0] }} />
        
        <animated.div style={{
          ...{width: '141%',
          borderTop: '#3c3c3c 1px solid',
          transform: 'rotate(45deg)',
          transformOrigin: 'top left',},
          ...routes[1]
        }} />

        <animated.div style={{
          ...{marginLeft: '-1px',
          marginTop: '40px',
          height: '80px',
          borderRight: '#3c3c3c 1px solid',
          transform: 'rotate(180deg)',
          transformOrigin: 'center',},
          ...routes[2]
        }} />

        <Octogon
        height='100'
        width='40'
        bezel='20'/>
        
      </div>
    )
}

export default Initial