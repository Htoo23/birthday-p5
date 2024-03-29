import React from 'react';
import './App.css';
import sketch from './sketch';
import p5 from 'p5';

const TEXT = 'Happy Birthday CMMT ❤️';

const App = () => {
  const canvasRef = React.useRef(null)

  React.useEffect(() => {
    const canvasDivElement = canvasRef.current;


    new p5(sketch(canvasDivElement, TEXT), canvasDivElement);
  })

  return (
    <div className="main">
      <div ref={canvasRef} />
    </div >
  )
}

export default App;