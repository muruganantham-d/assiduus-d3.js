import ContectPage from '../components/ContectPage';
import DashBoard from '../components/DashBoard';
import HomePage from '../components/HomePage';


    const componentsMap = {
        '/dashboard': DashBoard,
        '/accounts': HomePage, // Adjust this according to your actual component
        '/payroll': HomePage, // Adjust this according to your actual component
        '/reports': HomePage, // Adjust this according to your actual component
        '/advisor': HomePage, // Adjust this according to your actual component
        '/contacts': ContectPage,
      };


export default componentsMap;