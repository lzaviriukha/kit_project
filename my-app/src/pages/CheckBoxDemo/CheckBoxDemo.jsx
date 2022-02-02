import { useState } from "react";
import CheckBox from "components/UI_KIT/CheckBox";

function CheckBoxDemo() {
  const [firstChecked, setFirstCheked] = useState(null);
  const [secondChecked, setSecondCheked] = useState(null);
  const [thirdChecked, setThirdCheked] = useState(null);

  const nextValue = (id) => {
    switch (id) {
      case "first":
        setFirstCheked(!firstChecked);
        break;
      case "second":
        setSecondCheked(!secondChecked);
        break;
      case "third":
        setThirdCheked(!thirdChecked);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <CheckBox
        id="first"
        value={firstChecked}
        onChange={nextValue}
        classes={""}
      />
      
      <CheckBox
        id="second"
        value={secondChecked}
        onChange={nextValue}
        classes={""}
      />

      <CheckBox 
        id="third" 
        value={thirdChecked} 
        onChange={nextValue} 
        disable />
    </>
  );
}

export default CheckBoxDemo;
