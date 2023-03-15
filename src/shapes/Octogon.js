import { useTrail, animated } from "react-spring"

function Octogon() {    //Height, width, bezelside content, cycle direction??

    const elements = useTrail(8, ({
        from: { borderImage: 'linear-gradient(to top right, #000 0%, transparent 0%) 100% 1' },
        to: { borderImage: 'linear-gradient(to right top, #000 100%, transparent 0%) 100% 1' },
      }));
    
    
    return (
        <div className='treeStructMenu1' style={{
            marginTop: '100px',
            marginLeft: '-2px',
            gridTemplateColumns: '20px 40px 20px',
            gridTemplateRows: '20px auto 20px',
            }}>

        <animated.div style={{                     //Upper Left Corner
          ...{marginTop: '100%',
          width: '141%',
          transform: 'rotate(-45deg)',
          transformOrigin: 'top left',
          borderTop: '#3c3c3c 1px solid',},
            ...elements[0]
        }} />

        <animated.div  style={{
            ...{borderTop: '#3c3c3c 1px solid'},
            ...elements[1]}} />      

        <animated.div  style={{                     //Upper Right Corner
          ...{marginLeft: '-0.25px',
          width: '141%',
          transform: 'rotate(45deg)',
          transformOrigin: 'top left',
          borderTop: '#3c3c3c 1px solid',},
          ...elements[2]
        }} />

        <animated.div  style={{                   //Left side bar
          ...{marginRight: '-0.9px',
          width: '100%',
          borderLeft: '#3c3c3c 1px solid',
          height: '100px',},
          ...elements[7]
        }} />

        <div style={{                   //Text field
          width: '100%',
          height: '80px',
        }}>Test</div>

        <animated.div  style={{                   //Right side bar
          ...{marginLeft: '-0.9px',
          width: '100%',
          borderRight: '#3c3c3c 1px solid',
          height: '100px',},
          ...elements[3]
        }} />

        <animated.div  style={{                 //Lower left corner
          ...{marginTop: '-0.55px',
          marginLeft: '0.5px',
          width: '141%',
          transform: 'rotate(45deg)',
          transformOrigin: 'top left',
          borderTop: '#3c3c3c 1px solid',},
            ...elements[6]
        }} />

        <animated.div  style={{
            ...{borderTop: '#3c3c3c 1px solid',
            transform: 'rotate(180deg)',
            transformOrigin: 'center',},
            ...elements[5]}} />

        <animated.div  style={{                 //Lower right corner
          ...{marginTop: '100%',
          width: '141%',
          transform: 'rotate(-45deg)',
          transformOrigin: 'top left',
          borderTop: '#3c3c3c 1px solid',},
          ...elements[4]
        }} />

      </div>
    )
}

export default Octogon