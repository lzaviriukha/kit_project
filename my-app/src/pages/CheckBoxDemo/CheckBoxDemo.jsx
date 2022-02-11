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
      <div className={s.inner_wrapper}>
        <div className={s.group_names}>
          <h2>Default</h2>
          <h2>Disabled</h2>
        </div>
        <div className={s.checkbox__group}>
          <div className={s.group}>
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

          <div className={s.group}>
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
      </div>
    </div>
  );
}

export default CheckBoxDemo;
