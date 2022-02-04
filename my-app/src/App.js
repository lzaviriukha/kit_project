import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "components/UI_Demo/SideBar";
import ButtonDemo from "pages/ButtonDemo";
import InputDemo from "pages/InputDemo";
import ButtonPickerDemo from "pages/ButtonPickerDemo";
import CheckBoxDemo from "pages/CheckBoxDemo";
import RadioButtonDemo from "pages/RadioButtonDemo";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <SideBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/button" element={<ButtonDemo />} />
            <Route path="/input" element={<InputDemo />} />
            <Route path="/buttonPicker" element={<ButtonPickerDemo />} />
            <Route path="/checkbox" element={<CheckBoxDemo />} />
            <Route path="radioButton" element={<RadioButtonDemo/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
