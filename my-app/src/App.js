import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SideBar from './components/UI_Demo/SideBar/SideBar';
import ButtonDemo from './pages/ButtonDemo/ButtonDemo';
import InputDemo from './pages/InputDemo/InputDemo';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <SideBar />
        <div className="app-wrapper-content">
        <Routes>
          {/* <Route path='/' element={<App/>}/> */}
          <Route path='/button' element={<ButtonDemo/>} />  
          <Route path='/input'  element={<InputDemo/>} />
        </Routes>
        </div>
      </div>
   </Router>
  );
}

export default App;
