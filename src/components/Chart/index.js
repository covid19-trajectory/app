import React from 'react';
import { Chart } from 'react-google-charts';

export default ({ charttype = 'Bar', url, chartuid, range, height }) => {
  const options =
    charttype === 'Table'
      ? {}
      : {
          hAxis: { format: 'short', title: 'Time' },
          vAxis: { format: 'decimal' },
          series: {
            0: { curveType: 'function' },
            1: { curveType: 'function' },
            2: { curveType: 'function' },
          },
          legend: { position: 'right' },
        };
  const height_ = charttype !== 'Table' ? height : undefined;
  if (url)
    return (
      <Chart
        chartType={charttype}
        spreadSheetUrl={url}
        width="100%"
        height={height_}
        options={options}
        // rootProps={{ 'data-testid': '1' }}
      />
    );
  return (
    <Chart
      chartType={charttype}
      spreadSheetUrl={`https://docs.google.com/spreadsheets/d/${chartuid}/edit?range=${range}#gid=0`}
      width="100%"
      height={height_}
      options={options}
      // rootProps={{ 'data-testid': '1' }}
    />
  );
};
