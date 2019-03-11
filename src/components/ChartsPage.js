import React, { useContext } from 'react';
import { ChartsContext } from './Contexts';
import Canvas from './ChartCanvas/ChartCanvas';

const ChartsPage = () => {
  const context = useContext(ChartsContext);

  const { loading, data } = context;
  const chartsLoading = loading || !data.length;

  return (
    <div className="App">
      {chartsLoading && <div>Loading ...</div>}

      {!chartsLoading && <Canvas />}
    </div>
  );
};

export default ChartsPage;
