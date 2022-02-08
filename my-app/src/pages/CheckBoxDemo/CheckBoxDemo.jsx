import { useState } from "react";
import CheckBox from "components/UI_KIT/CheckBox";
import s from "./CheckBoxDemo.module.css";

function CheckBoxDemo() {
  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);
  const [thirdChecked, setThirdChecked] = useState(false);
  const [fourthChecked, setFourthChecked] = useState(false);

  return (
    <div className={s.checkBox_wrapper}>
      <h1 className={s.h1_title}>Check-box</h1>
      <div className={s.checkbox_group}>
        <h2>Default</h2>
        <CheckBox
          id="first"
          value={firstChecked}
          onChange={setFirstChecked}
          classes={""}
        />

        <CheckBox
          id="second"
          value={secondChecked}
          onChange={setSecondChecked}
          classes={""}
        />
      </div>

      <div className={s.checkbox_group}>
        <h2>Blocked</h2>
        <CheckBox
          id="third"
          value={thirdChecked}
          onChange={setThirdChecked}
          classes={""}
          disable
        />

        <CheckBox
          id="fourth"
          value={fourthChecked}
          onChange={setFourthChecked}
          classes={""}
          disable
        />
      </div>
    </div>
  );
}

export default CheckBoxDemo;
