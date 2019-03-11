import React, { useEffect, useState } from 'react';
import { ChartsContext, initChartsContext } from './components/Contexts';
import ChartsPage from './components/ChartsPage';

import './App.scss';

const App = () => {
  const [state, setState] = useState(initChartsContext);

  const fetchData = async () => {
    setState({ ...state, loading: true });

    const response = await fetch('/chart_data.json');
    const chartData = await response.json();

    setState({
      ...state,
      loading: false,
      data: chartData,
    });
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.error('Something goes wrong; API problems? ', error);
    }
  }, []);

  return (
    <ChartsContext.Provider value={state}>
      <ChartsPage />
    </ChartsContext.Provider>
  );
};

export default App;
