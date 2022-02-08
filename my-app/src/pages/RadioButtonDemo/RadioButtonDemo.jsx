import { useState } from "react";
import RadioButtonGroup from "components/UI_KIT/RadioButtonGroup";
import s from "./RadioButtonDemo.module.css";

function RadioButtonDemo() {
  const [activeItemId, setActiveItemId] = useState(null);

  const myFun = (id, option) => {
    setActiveItemId(id);
  };

  const listOfOptions = [
    { id: "first" },
    { id: "second" },
    { id: "thirdt" },
    { id: "fourth" },
    { id: "fifth" },
  ];

  const classes = {
    wrapper: s.wrapper,
  };

  return (
    <div className={s.radioButton_wrapper}>
      <h1 className={s.h1_title}>Radio button</h1>
      <div className={s.radioButton_group}>
        <h2>Default</h2>
        <RadioButtonGroup
          value={activeItemId}
          onChange={myFun}
          options={listOfOptions}
          classes={classes}
          disabled={false}
        />
      </div>

      <div className={s.radioButton_group}>
        <h2>Disbled</h2>
        <RadioButtonGroup
          value={null}
          onChange={myFun}
          options={listOfOptions}
          classes={classes}
          disabled={true}
        />
      </div>
    </div>
  );
}

export default RadioButtonDemo;
