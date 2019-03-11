import React from 'react';

const initChartsContext = {
  loading: false,
  data: [],
};

const ChartsContext = React.createContext(initChartsContext);

export { ChartsContext, initChartsContext };
