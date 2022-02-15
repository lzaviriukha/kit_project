import { useState } from "react";
import DropDown from "components/UI_KIT/DropDown";
import Icon from "components/UI_Demo/Icon";
import s from "./DropDownDemo.module.css";

/*
<Dropdown
  classes={myClsses}                 // optional, see below
  disabled={isDisabled}              // optional, boolean
  getOptionLabel=((option) => { ... }}     // optional, function that returns string
/>

*/

function DropDownDemo() {
  const [activeItemId, setActiveItemId] = useState(null);

  const onChange = (id, option) => setActiveItemId(id);
  const isOptionSelected = (option, currentValue) => option.id === currentValue ? true : false;

  const isOptionDisabled = (option, currentValue) => {
      if (option.disabled && (option.id === currentValue)) {
        setActiveItemId(null);
        return true;
      } else if (option.disabled) {
        return true;
      } else {
        return false;
      }
  };

  const getOptionLabel = (option) => option.name;
  

  const listOfOptions = [
    { id: 'foo', name: 'Foo', disabled: false },
    { id: 'bar', name: 'Bar', disabled: false },
    { id: 'baz', name: 'Baz', disabled: true }
  ]

  const classses = {
    wrapper: 'someCssClass',
    item: 'someCssClass',
    activeItem: 'someCssClass',
    disabledItem: 'someCssClass',
  }

  return (
    <DropDown
      id="my-dropdown"
      value={activeItemId}
      options={listOfOptions}
      onChange={onChange}
      classes={classses}
      disabled={false}
      getOptionLabel={getOptionLabel}
      isOptionSelected={isOptionSelected}
      isOptionDisabled={isOptionDisabled}
      expanderIcon={<Icon name="DropArrow" />}
    />
  );
}

export default DropDownDemo;
