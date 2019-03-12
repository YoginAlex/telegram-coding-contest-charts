/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// import { graphDataPropType } from '../propTypes';
import useWindowSize from '../../hooks/useWindowSize';
import useAnimationFrame from '../../hooks/useAnimationFrame';

import './ChartCanvas.scss';

const ChartCanvas = ({ lines, colors, height }) => {
  const canvasRef = useRef(null);
  const windowSize = useWindowSize();

  const { length } = lines[0].points;

  const draw = () => {
    if (canvasRef.current && canvasRef.current.getContext) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      ctx.fillStyle = '#6a6e72';
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      const xStep = canvasRef.current.width / lines[0].points.length;
      const maxOfPoints = Math.max.apply(
        null,
        lines.map(line => Math.max.apply(null, line.points)),
      );
      const yRatio = height / maxOfPoints;

      lines.forEach(({ id, points }) => {
        // console.log('points', points);
        ctx.beginPath();
        ctx.strokeStyle = colors[id];
        ctx.moveTo(0, height - points[1] * yRatio);

        const lineLength = points.length;
        for (let i = 2; i < lineLength; i += 1) {
          ctx.lineTo(xStep * i, height - points[i] * yRatio);
        }

        ctx.stroke();
      });
    } else {
      console.error('Canvas not supported: ', canvasRef);
    }
  };

  useAnimationFrame(draw, length);

  return (
    <canvas
      ref={canvasRef}
      className="Canvas"
      height={height}
      width={windowSize.width}
    />
  );
};

ChartCanvas.propTypes = {
  // chart: graphDataPropType.isRequired,
  height: PropTypes.number,
};

ChartCanvas.defaultProps = {
  height: 300,
};

export default ChartCanvas;
