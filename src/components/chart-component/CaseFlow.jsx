import React from 'react';
import BarChartTow from './chart/BarChartTow';
import { Button } from '@mui/material';

const data = [
  { label: 'August', segments: [{ top: 7, bottom: 4, colors: ['#02BB7D', '#47B747'] }] },
  { label: 'September', segments: [{ top: 11, bottom: 7, colors: ['#02BB7D', '#47B747'] }] },
  { label: 'October', segments: [{ top: 16, bottom: 14, colors: ['#02BB7D', '#47B747'] }] },
  { label: 'November', segments: [{ top: 11, bottom: 9, colors: ['#02BB7D', '#47B747'] }] },
  { label: 'December', segments: [{ top: 11, bottom: 7, colors: ['#02BB7D', '#47B747'] }] },
  { label: 'January', segments: [{ top: 16, bottom: 8, colors: ['#02BB7D', '#47B747'] }] },
];

const CaseFlow = () => {
  return (
    <div>
      <div className='barchart-one-head'>
        <div className='invice-head'>Invoices owed to you</div>
        <Button className='invoice-button'>New Sales Invoice</Button>
      </div>
      <hr className='horizontal-line'></hr>
      <BarChartTow data={data} />
    </div>
  );
};

export default CaseFlow;
