import { useState } from "react";
import CheckBox from "components/UI_KIT/CheckBox";

function CheckBoxDemo() {
  const [firstChecked, setFirstCheked] = useState(false);
  const [secondChecked, setSecondCheked] = useState(false);
  const [thirdChecked, setThirdCheked] = useState(false);

  const handleChangeFirst = (value) => {
    value ? setFirstCheked(!value) : setFirstCheked(true);
  };

  const handleChangeSecond = (value) => {
    value ? setSecondCheked(!value) : setSecondCheked(true);
  };

  const handleChangeThird = (value) => {
    value ? setThirdCheked(!value) : setThirdCheked(true);
  };

  return (
    <>
      <CheckBox
        id="first"
        value={firstChecked}
        onChange={handleChangeFirst}
        classes={""}
      />

      <CheckBox
        id="second"
        value={secondChecked}
        onChange={handleChangeSecond}
        classes={""}
      />

      <CheckBox
        id="third"
        value={thirdChecked}
        onChange={handleChangeThird}
        classes={""}
        disable
      />
    </>
  );
}

export default CheckBoxDemo;
