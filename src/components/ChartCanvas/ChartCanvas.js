import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { graphDataPropType } from '../propTypes';
import useWindowSize from '../../hooks/useWindowSize';
import useAnimationFrame from '../../hooks/useAnimationFrame';
import { GRAPH_TYPES } from '../enums';

import './ChartCanvas.scss';

const ChartCanvas = ({ chart, height }) => {
  const canvasRef = useRef(null);
  const windowSize = useWindowSize();
  const { columns, types, colors } = chart;

  const lines = columns.filter(column => types[column[0]] === GRAPH_TYPES.LINE);
  const axis = columns.filter(column => types[column[0]] === GRAPH_TYPES.X);

  useAnimationFrame(() => {
    if (canvasRef.current && canvasRef.current.getContext) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      const xStep = canvasRef.current.width / axis[0].length;
      const maxOfPoints = Math.max.apply(
        null,
        lines.map(line => Math.max.apply(null, line.slice(1))),
      );
      const yRatio = height / maxOfPoints;

      lines.forEach((line) => {
        const key = line[0];

        ctx.beginPath();
        ctx.strokeStyle = colors[key];
        ctx.moveTo(0, height - line[1] * yRatio);

        const lineLength = line.length;
        for (let i = 2; i < lineLength; i += 1) {
          ctx.lineTo(xStep * i, height - line[i] * yRatio);
        }

        ctx.stroke();
      });
    } else {
      console.error('Canvas not supported: ', canvasRef);
    }
  });

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
  chart: graphDataPropType.isRequired,
  height: PropTypes.number,
};

ChartCanvas.defaultProps = {
  height: 300,
};

export default ChartCanvas;
