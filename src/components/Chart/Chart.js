import React, { useState } from 'react';
import InputRange from 'react-input-range';
import { GRAPH_TYPES } from '../enums';
import { graphDataPropType } from '../propTypes';

import ChartCanvas from '../ChartCanvas/ChartCanvas';

import 'react-input-range/lib/css/index.css';
import './Chart.scss';

const HEIGHT = 450;

const Chart = ({ chart }) => {
  const {
    columns, types, names, colors,
  } = chart;

  const axis = columns.filter(column => types[column[0]] === GRAPH_TYPES.X)[0];

  const [range, setRange] = useState({ min: 0, max: axis.length - 1 });

  const lines = columns
    .filter(column => types[column[0]] === GRAPH_TYPES.LINE)
    .map(arr => ({
      id: arr[0],
      points: arr.slice(range.min + 1, range.max),
    }));

  return (
    <div className="Chart">
      <ChartCanvas
        lines={lines}
        axis={{
          id: axis[0],
          points: axis.slice(1),
        }}
        names={names}
        colors={colors}
        height={HEIGHT}
      />
      <InputRange
        draggableTrack
        maxValue={axis.length - 1}
        minValue={0}
        value={range}
        onChange={(value) => {
          setRange(value);
        }}
      />
    </div>
  );
};

Chart.propTypes = {
  chart: graphDataPropType.isRequired,
};

export default Chart;
