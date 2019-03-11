import React, { useRef, useContext } from 'react';
import { ChartsContext } from '../Contexts';
import useWindowSize from '../../hooks/useWindowSize';
import useAnimationFrame from '../../hooks/useAnimationFrame';

import './ChartCanvas.scss';

const ChartCanvas = () => {
  const canvasRef = useRef(null);
  const { data: chartsData } = useContext(ChartsContext);
  const windowSize = useWindowSize();

  useAnimationFrame(() => {
    if (canvasRef.current && canvasRef.current.getContext) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      const pointsArray = chartsData[0].columns[1];
      const pointsArray1 = chartsData[0].columns[2];
      const pointsArrayLength = pointsArray.length;
      const pointsArray1Length = pointsArray1.length;
      const xStep = canvasRef.current.width / pointsArrayLength;

      ctx.beginPath();
      ctx.strokeStyle = chartsData[0].colors.y0;
      ctx.moveTo(0, 300 - pointsArray[1]);

      for (let i = 2; i < pointsArrayLength; i += 1) {
        ctx.lineTo(xStep * i, 300 - pointsArray[i]);
      }

      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = chartsData[0].colors.y1;
      ctx.moveTo(0, 300 - pointsArray1[1]);

      for (let i = 2; i < pointsArray1Length; i += 1) {
        ctx.lineTo(xStep * i, 300 - pointsArray1[i]);
      }

      ctx.stroke();
    } else {
      console.error('Canvas not supported: ', canvasRef);
    }
  });

  return (
    <canvas
      ref={canvasRef}
      className="Canvas"
      height={300}
      width={windowSize.width}
    />
  );
};

export default ChartCanvas;
