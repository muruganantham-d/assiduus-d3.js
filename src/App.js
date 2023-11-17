
import PrimarySearchAppBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import './styles/App.css'
import Sidebar from "./components/SideBar";

function App() {
  return (
    <div>
        <PrimarySearchAppBar />
        <div className="content-page">
            <div className="sidebar-app"> 
              <Sidebar/>
            </div>
            <div className="hompage-app">
              <HomePage/>
            </div>
            
        </div>
   
    </div>
  );
}

export default App;
