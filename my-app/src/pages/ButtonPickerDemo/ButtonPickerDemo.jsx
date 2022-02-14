import { useState } from "react";
import ButtonPicker from "components/UI_KIT/ButtonPicker";
import s from "./ButtonPickerDemo.module.css";

function ButtonPickerDemo() {
  const [activeItemId, setActiveItemId] = useState(null);

  const myFn = (id, option) => {
    setActiveItemId(id);
  };

  const listOfOptions = [
    { id: "foo", name: "Foo" },
    { id: "bar", name: "Bar" },
    { id: "baz", name: "Baz" },
  ];

  const classes = {
    wrapper: s.wrapper,
    button: s.btn,
    activeButton: s.btn_active,
    disableButton: s.btn_disable,
  };

  return (
    <div className={s.buttonPicker_wrapper}>
      <h1 className={s.h1_title}>Radio with button style</h1>
      <div className={s.buttonPicker_group}>
        <h2>Default</h2>
        <ButtonPicker
          id="my-choice-button"
          value={activeItemId}
          onChange={myFn}
          options={listOfOptions}
          classes={classes}
        />
      </div>

      <div className={s.buttonPicker_group}>
        <h2>Disabled</h2>
        <ButtonPicker 
          disable 
          options={listOfOptions} 
          classes={classes} 
        />
      </div>
    </div>
  );
}

export default ButtonPickerDemo;
