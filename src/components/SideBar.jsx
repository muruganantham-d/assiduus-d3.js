import React, { useState } from 'react';
import { BsFillHouseDoorFill, BsFillPersonFill } from 'react-icons/bs';
import '../styles/SideBar.css';
import { MdDashboard } from "react-icons/md";
import { FaIdCardClip } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { FaUserLarge } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";


const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { name: 'Dashboard', icon: <MdDashboard /> },
    { name: 'Accounts', icon: <FaIdCardClip /> },
    { name: 'Payroll', icon: <FaDollarSign />},
    { name: 'Reports', icon: <BiSolidReport /> },
    { name: 'Advisor', icon:<FaUserLarge />},
    { name: 'Contacts', icon: <MdContacts />},
  ];

  return (
    <div className='side-bar'>
      <ul  className='side-bar'>
        {navItems.map((item, index) => (
          <li key={index} className='side-list'>
             <span className='sidbar-item'>{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
