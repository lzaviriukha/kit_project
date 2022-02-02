import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "components/UI_Demo/SideBar";
import ButtonDemo from "pages/ButtonDemo";
import InputDemo from "pages/InputDemo";
import ButtonPickerDemo from "pages/ButtonPickerDemo";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <SideBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/button" element={<ButtonDemo />} />
            <Route path="/input" element={<InputDemo />} />
            <Route path="/radio_button" element={<ButtonPickerDemo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
