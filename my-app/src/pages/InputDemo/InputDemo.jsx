import { useState } from "react";
import Input from "components/UI_KIT/Input";
import Icon from "components/UI_Demo/Icon";
import s from "./InputDemo.module.css";

function InputDemo() {
  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("Second input");
  const [thirdInputValue, setThirdInputValue] = useState("Third input");
  const [fourthInputValue, setFourthInputValue] = useState("Fourth input");

  const classes = {
    wrapper: s.wrapper__class
  };

  return (
    <div className={s.formWrapper}>
      <Input
        id="first-input"
        label={"Label"}
        value={firstInputValue}
        className={classes}
        onChange={setFirstInputValue}
        startIcon={<Icon name="Lock" height="15px" width="18px" />}
      />

      <Input
        id="second-input"
        label={"Label"}
        value={secondInputValue}
        className={classes}
        onChange={setSecondInputValue}
        endIcon={<Icon name="Lock" height="15px" width="18px" />}
      />

      <Input
        id="third-input"
        label={"Label"}
        value={thirdInputValue}
        className={classes}
        onChange={setThirdInputValue}
        disabled={true}
        startIcon={<Icon name="Lock" height="15px" width="18px" />}
        endIcon={<Icon name="Lock" height="15px" width="18px" />}
      />

      <Input
        id="fourth-input"
        label={"Label"}
        value={fourthInputValue}
        className={classes}
        onChange={setFourthInputValue}
        error={true}
      />
    </div>
  );
}

export default InputDemo;
