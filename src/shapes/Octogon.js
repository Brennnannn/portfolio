import { useTrail, animated } from "react-spring"

function Octogon(props) {    // cycle direction, Cycle start, Content
    
    let heightF = props.height ? (props.height + 'px') : 'auto'
    let widthF = props.width ? (props.width + 'px') : 'auto'
    let bezelF = props.bezel ? (props.bezel + 'px') : 'auto'

    const elements = useTrail(8, ({
        from: { borderImage: 'linear-gradient(45deg, rgb(0,0,0, 1) 0%, rgb(0,0,0,0) 0%) 1' },
        to: { borderImage: 'linear-gradient(45deg, rgb(0,0,0, 1) 100%, rgb(0,0,0,0) 100%) 1' },
        immediate: false,
      }));
    
    return (
        <div className='treeStructMenu1' style={{
            marginTop: '100px',
            marginLeft: '-2px',
            gridTemplateColumns: bezelF + ' ' + widthF + ' ' + bezelF,
            gridTemplateRows: bezelF + ' ' + heightF + ' ' + bezelF,
            }}>

        <animated.div style={{                     //Upper Left Corner
          ...{marginTop: '100%',
          width: '141%',
          borderTop: '#3c3c3c 1px solid',
          transform: 'rotate(-45deg)',
          transformOrigin: 'top left',},
            ...elements[0]
        }} />

        <animated.div  style={{                    //Uper boarder
            ...{borderTop: '#3c3c3c 1px solid'},
            ...elements[1]}} />      

        <animated.div  style={{                     //Upper Right Corner
          ...{marginLeft: '-0.25px',
          width: '141%',
          borderTop: '#3c3c3c 1px solid',
          transform: 'rotate(45deg)',
          transformOrigin: 'top left',},
          ...elements[2]
        }} />

        <animated.div  style={{                   //Left border
          ...{marginRight: '-0.9px',
          height: heightF,
          borderLeft: '#3c3c3c 1px solid',},
          ...elements[7]
        }} />

        <div style={{                   //Text field
          width: '100%',
          height: '80px',
        }}>Test</div>

        <animated.div  style={{                   //Right border
          ...{marginLeft: '-0.9px',
          height: heightF,
          width: '100%',
          borderLeft: '#3c3c3c 1px solid',
          transform: 'rotate(180deg)',
          transformOrigin: 'center',},
          ...elements[3]
        }} />

        <animated.div  style={{                 //Lower left corner
          ...{ marginLeft: '100%',
          marginBottom: '0.65px',
          width: '141%',
          borderBottom: '#3c3c3c 1px solid',
          transform: 'rotate(225deg)',
          transformOrigin: 'bottom left',},
            ...elements[6]
        }} />

        <animated.div  style={{                 //Bottom border
            ...{borderTop: '#3c3c3c 1px solid'},
            transform: 'rotate(180deg)',
            transformOrigin: 'center',
            ...elements[5]}} />

        <animated.div  style={{                 //Lower right corner
          ...{marginLeft: '100%',
          width: '141%',
          borderTop: '#3c3c3c 1px solid',
          transform: 'rotate(135deg)',
          transformOrigin: 'top left',},
          ...elements[4]
        }} />

      </div>
    )
}

export default Octogon