import { useState } from "react";
import RadioButtonGroup from "components/UI_KIT/RadioButtonGroup";
import s from "./RadioButtonDemo.module.css";

function RadioButtonDemo() {
  const [activeItemId, setActiveItemId] = useState(null);

  const myFun = (id, option) => {
    setActiveItemId(id);
  };

  const listOfOptions = [
    { id: "first", disable: false },
    { id: "second", disable: false },
    { id: "thirdt", disable: false },
    { id: "fourth", disable: false },
    { id: "fifth", disable: true },
  ];

  const classes = {
    wrapper: s.wrapper,
  };

  return (
    <>
      <RadioButtonGroup
        value={activeItemId}
        onChange={myFun}
        options={listOfOptions}
        classes={classes}
      />
    </>
  );
}

export default RadioButtonDemo;
