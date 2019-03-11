/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import { ChartsContext } from '../Contexts';
import ChartCanvas from '../ChartCanvas/ChartCanvas';

const HEIGHT = 450;

const Charts = () => {
  const context = useContext(ChartsContext);
  const { data } = context;

  const chartCanvasNodes = data.map((chart, index) => {
    console.log('chart', chart);

    return <ChartCanvas key={index} chart={chart} height={HEIGHT} />;
  });

  return <React.Fragment>{chartCanvasNodes}</React.Fragment>;
};

export default Charts;
