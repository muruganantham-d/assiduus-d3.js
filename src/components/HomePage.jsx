import React from 'react';
import "../styles/HomePage.css"
import Accounts from './chart-component/Account';
import Invoices from './chart-component/Invoices';
import CaseFlow from './chart-component/CaseFlow';
import BasicTable from './chart-component/WatchList';

const HomePage = () => {
  return (
<div class="grid-container">
  <div class="grid-item"><Accounts/></div>
  <div class="grid-item"><Invoices/> </div>
  <div class="grid-item"><CaseFlow/></div>
  <div class="grid-item"><BasicTable/></div>
</div>
  )
}

export default HomePage;