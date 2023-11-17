import React from 'react'
import BarChart from './chart/BarChart';
import { Button } from '@mui/material';
import '../../styles/Invoices.css'

const data = [
  { label: 'Older', value: 10 },
  { label: 'Jan 01-08', value: 20 },
  { label: 'Jan 09-16', value: 30 },
  { label: 'Jan 17-24', value: 20 },
  { label: 'Jan 25-31', value: 25 },
  { label: 'Future', value: 15 },
];

const Invoices = () => {
  return (
    <div>
      <div className='barchart-one-head'>
        <div className='invice-head'>Invoices owed to you</div>
        <Button className='invoice-button'>New Sales Invoice</Button>
      </div>
      <hr className='horizontal-line'></hr>
      <BarChart data={data} />
    </div>
  );
};

export default Invoices;