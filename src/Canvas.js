import React, { useRef, useEffect, useContext } from 'react';
import { ChartContext } from './Contexts';

const COLORS = ['blue', 'red', 'green', 'orange'];

const Canvas = () => {
  const canvasRef = useRef(null);
  const charts = useContext(ChartContext);

  useEffect(() => {
    if (canvasRef.current && canvasRef.current.getContext) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, 300, 300);

      const xStep = 300 / charts[0].data.length;

      charts.forEach(({ data }, index) => {
        ctx.beginPath();
        ctx.strokeStyle = COLORS[index];
        ctx.moveTo(0, data[0].count);

        for (let i = 1; i < data.length; i += 1) {
          ctx.lineTo(xStep * i, data[i].count);
        }

        ctx.stroke();
      });
    } else {
      console.error('Canvas not supported: ', canvasRef);
    }
  });

  return <canvas ref={canvasRef} width={300} height={300} />;
};

export default Canvas;
