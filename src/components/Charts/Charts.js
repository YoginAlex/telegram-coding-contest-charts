/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import { ChartsContext } from '../Contexts';
import Chart from '../Chart/Chart';

const Charts = () => {
  const context = useContext(ChartsContext);
  const { data } = context;

  const chartCanvasNodes = data.map((chart, index) => (
    <div>
      <Chart key={index} chart={chart} />
    </div>
  ));

  return <React.Fragment>{chartCanvasNodes}</React.Fragment>;
};

export default Charts;
