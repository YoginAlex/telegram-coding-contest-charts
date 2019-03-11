import React, { useContext } from 'react';
import { ChartsContext } from './Contexts';
import Charts from './Charts/Charts';

const ChartsPage = () => {
  const context = useContext(ChartsContext);

  const { loading, data } = context;
  const chartsLoading = loading || !data.length;

  return (
    <div className="App">
      {chartsLoading && <div>Loading ...</div>}

      {!chartsLoading && <Charts />}
    </div>
  );
};

export default ChartsPage;
