import React from 'react';
import { Chart } from '../';
import './styles.scss';

export default ({ chartuid, range, charttype = 'Bar', rangetable }) => (
  <div className="Charts">
    <div className="Charts__table">
      <Chart
        charttype="Table"
        url={`https://docs.google.com/spreadsheets/d/${chartuid}/edit?range=${rangetable}#gid=0`}
      />
    </div>
    <div className="Charts__graph">
      <Chart
        charttype={charttype}
        url={`https://docs.google.com/spreadsheets/d/${chartuid}/edit?range=${range}#gid=0`}
      />
    </div>
  </div>
);
