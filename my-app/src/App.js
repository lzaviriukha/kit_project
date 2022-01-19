import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <SideBar />
        <div className="app-wrapper-content">
        <Routes>
          {/* <Route path='/' element={<App/>}/> */}
          <Route path='/button' element={<Button/>} />  
          <Route path='/input'  element={<Input/>} />
        </Routes>
        </div>
      </div>
   </Router>
  );
}

export default App;
