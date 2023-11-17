import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import LineChart from './chart/LineChart';
import { MdArrowDropDown } from 'react-icons/md';
import '../../styles/Account.css';
import { MdKeyboardArrowDown } from "react-icons/md";



const initialData = [
  { x: 0, y: 5 },
  { x: 2, y: 10 },
  { x: 2, y: 20 },
  { x: 2, y: 10 },
  { x: 2, y: 5 },
  { x: 2, y: 15 },
  { x: 3, y:  10 },
  { x: 4, y: 5 },
  { x: 4, y: 10 },
  { x: 6, y: 10 },
  { x: 5, y: 10 },
];

const Accounts = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [chartData, setChartData] = useState(initialData);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    
    // Here, you would fetch or generate new data based on the selected date
    // and set it in the 'chartData' state.
    // For demonstration purposes, i update the data randomly.
    const newChartData = generateRandomDataForDate(date);
    setChartData(newChartData);
  };

  const generateRandomDataForDate = (date) => {
    // Generate or fetch new data based on the selected date.
    // Replace this with your data retrieval logic.
    const randomData = [
      { x: 0, y: Math.random() * 0.1 },
      { x: 2, y: Math.random() * 0.1 },
      { x: 1, y: Math.random() * 0.1 },
      { x: 3, y: Math.random() * 0.1 },
      { x: 4, y: Math.random() * 0.1 },
      { x: 6, y: Math.random() * 0.1 },
      { x: 5, y: Math.random() * 0.1 },
      { x: 7, y: Math.random() * 0.1 },
      { x: 10, y: Math.random() *0.1 },
      { x: 9, y: Math.random() * 0.1 },
      { x: 8, y: Math.random() * 0.1 },
    ];

    return randomData;
  };

  return (
    <div className="App">

  <div className='card-heading'>
       <div className='checking-account'>Checking account</div>
       <div className="date-picker-container">
           <div className='heading-manage'>
            <p className='manage-text'>Manage</p>
            <div>
              
            </div>
                <MdKeyboardArrowDown className="dropdown-icon dropdown-manage"/>
           </div>
          <div>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MMMM"
                className='my-datepicker'
              />
               {/* <MdArrowDropDown className="dropdown-icon dropdown-date" /> */}
               <MdKeyboardArrowDown  className="dropdown-icon dropdown-date" />
            </div>
      </div>
    
   </div>
     <hr className='lchart-line'></hr>
      <LineChart data={chartData} width={500} height={250} />
    </div>
  );
}

export default Accounts;



