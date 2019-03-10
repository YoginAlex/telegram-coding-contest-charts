import React from 'react';

const ChartContext = React.createContext([
  {
    id: 'joined',
    title: 'Joined',
    data: [
      {
        date: '2019-02-01',
        count: 100
      },
      {
        date: '2019-02-02',
        count: 150
      },
      {
        date: '2019-02-03',
        count: 50
      },
      {
        date: '2019-02-04',
        count: 89
      },
      {
        date: '2019-02-05',
        count: 33
      }
    ]
  },
  {
    id: 'left',
    title: 'Left',
    data: [
      {
        date: '2019-02-01',
        count: 89
      },
      {
        date: '2019-02-02',
        count: 101
      },
      {
        date: '2019-02-03',
        count: 44
      },
      {
        date: '2019-02-04',
        count: 75
      },
      {
        date: '2019-02-05',
        count: 12
      }
    ]
  },
  {
    id: 'left',
    title: 'Left',
    data: [
      {
        date: '2019-02-01',
        count: 98
      },
      {
        date: '2019-02-02',
        count: 33
      },
      {
        date: '2019-02-03',
        count: 96
      },
      {
        date: '2019-02-04',
        count: 54
      },
      {
        date: '2019-02-05',
        count: 65
      }
    ]
  }
]);

export { ChartContext as default, ChartContext };
