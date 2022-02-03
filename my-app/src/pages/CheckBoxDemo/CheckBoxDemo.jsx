import { useState } from "react";
import CheckBox from "components/UI_KIT/CheckBox";

function CheckBoxDemo() {
  const [firstChecked, setFirstCheked] = useState(false);
  const [secondChecked, setSecondCheked] = useState(false);
  const [thirdChecked, setThirdCheked] = useState(false);

  return (
    <>
      <CheckBox
        id="first"
        value={firstChecked}
        onChange={setFirstCheked}
        classes={""}
      />

      <CheckBox
        id="second"
        value={secondChecked}
        onChange={setSecondCheked}
        classes={""}
      />

      <CheckBox
        id="third"
        value={thirdChecked}
        onChange={setThirdCheked}
        classes={""}
        disable
      />
    </>
  );
}

export default CheckBoxDemo;
