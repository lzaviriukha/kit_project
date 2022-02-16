import { useState } from "react";
import DropDown from "components/UI_KIT/DropDown";
import Icon from "components/UI_Demo/Icon";
import s from "./DropDownDemo.module.css";

function DropDownDemo() {
  const [isActiveItemId, setIsActiveItemId] = useState(null);
  
  const onChange = (id, option) => setIsActiveItemId(id);
  const isOptionSelected = (option, currentValue) => (option.id === currentValue ? true : false);
  const isOptionDisabled = (option, currentValue) => (option.disabled ? true : false);

  const listOfOptions = [
    { id: "foo", name: "Foo", disabled: false },
    { id: "bar", name: "Bar", disabled: false },
    { id: "baz", name: "Baz", disabled: true },
  ];

  const classses = {
    wrapper: "someCssClass",
    item: "someCssClass",
    activeItem: "someCssClass",
    disabledItem: "someCssClass",
  };

  return (
    <div className={s.dropdown_wrapper}>
      <h1 className={s.h1_title}>DropDown</h1>
      <div className={s.inner_wrapper}>
        <div className={s.group_names}>
          <h2>Default</h2>
          <h2>Disabled</h2>
        </div>
        <div className={s.group}>
        <DropDown
          id="my-dropdown"
          value={isActiveItemId}
          options={listOfOptions}
          onChange={onChange}
          classes={classses}
          isOptionSelected={isOptionSelected}
          isOptionDisabled={isOptionDisabled}
        />
        <DropDown
          id="my-second-dropdown"
          disabled
          value={null}
          options={listOfOptions}
          placeholder="Your placeholder"
          expanderIcon={<Icon name="Lock" width="15" height="15" />}
        />
        </div>
      </div>
    </div>
  );
}

export default DropDownDemo;
