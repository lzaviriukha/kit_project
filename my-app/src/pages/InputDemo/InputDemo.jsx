import { useState } from "react";
import Input from "components/UI_KIT/Input";
import Icon from "components/UI_Demo/Icon";
import s from "./InputDemo.module.css";

function InputDemo() {
  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("Fourth input");
  const [thirdInputValue, setThirdInputValue] = useState("Third input");

  const classes = {
    wrapper: s.wrapper__class,
  };

  return (
    <div className={s.formWrapper}>
      <h1 className={s.h1_title}>Text Input</h1>
      <div className={s.inner_wrapper}>
        <div className={s.group}>
          <h2>Default</h2>
          <h2>Disabled</h2>
          <h2>Error</h2>
        </div>

        <div className={s.group}>
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
            disabled={true}
            startIcon={<Icon name="Lock" height="15px" width="18px" />}
            endIcon={<Icon name="Lock" height="15px" width="18px" />}
          />

          <Input
            id="fourth-input"
            label={"Label"}
            value={thirdInputValue}
            className={classes}
            onChange={setThirdInputValue}
            error={true}
          />
        </div>
      </div>
    </div>
  );
}

export default InputDemo;
