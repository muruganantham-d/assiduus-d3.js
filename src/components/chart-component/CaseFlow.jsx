import React from 'react';
import BarChartTow from './chart/BarChartTow';
import '../../styles/CaseFlow.css'

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
      <div className='caseflow-head'>
        <div className='invice-head'>Total cash flow</div>
        <div className='in-out'>
              <div className='in-out-align'>
                  <div className='in-color'></div>
                   <div className='in-out-text'>In</div>
                </div>
              <div className='in-out-align'>
                <div className='out-color'></div>
                <div className='in-out-text'>Out</div>
                </div>
        </div>
      </div>
      <hr className='horizontal-line'></hr>
      <BarChartTow data={data} />
    </div>
  );
};

export default CaseFlow;
