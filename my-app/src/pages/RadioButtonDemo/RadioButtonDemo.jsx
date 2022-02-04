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
    <>
      <RadioButtonGroup
        value={activeItemId}
        onChange={myFun}
        options={listOfOptions}
        classes={classes}
        disabled={false}
      />

<RadioButtonGroup
        value={null}
        onChange={myFun}
        options={listOfOptions}
        classes={classes}
        disabled={true}
      />
    </>
  );
}

export default RadioButtonDemo;
