import { useState } from "react";
import DropArrow from "./DropArrow";
import s from "./DropDown.module.css";

function DropDown(props) {
  const {
    id,
    value,
    options,
    onChange,
    classes = {
      wrapper: "",
      item: "",
      activeItem: "",
      disabledItem: "",
    },
    disabled = false,
    getOptionLabel = (option) => option.name,
    isOptionSelected = (option, value) => option.id === value,
    isOptionDisabled = (option, value) => (option.disabled === true),
    placeholder = "Choose someone",
    expanderIcon = <DropArrow />,
  } = props;

  const [isListVisible, setIsListVisible] = useState(false);

  const toggleDropDown = (evt) => {
    if (disabled) {
      evt.preventDefault();
      evt.stopPropagation();
    } else {
      setIsListVisible(!isListVisible);
    }
  };

  const itemsElement = options.map((option) => {
    const handleOnClick = (evt) => {
      if (disabled || isOptionDisabled(option, value)) {
        evt.preventDefault();
        evt.stopPropagation();
      } else {
        onChange(option.id, option);
      }
    };

    const itemDefaultClasses = `${classes.item} ${s.dropdown_item}`.trim();
    const itemActiveClasses = isOptionSelected(option, value) ? `${s.dropdown_item__active} ${classes.activeItem}`.trim() : "";
    const itemDisabledClasses = isOptionDisabled(option, value) || disabled ? `${s.dropdown_item__disabled} ${classes.disabledItem}`.trim() : "";

    const itemClasses = `${itemActiveClasses} ${itemDefaultClasses} ${itemDisabledClasses}`.trim();

    return (
      <div id={option.id} className={itemClasses} onClick={handleOnClick}>
        {getOptionLabel(option)}
      </div>
    );
  });

  const dropdownClasses = `${s.dropdown} ${disabled ? s.dropdown__disabled : ""}`.trim();
  const iconClasses = `${s.dropdown_icon} ${isListVisible ? s.dropdown_icon__active : ""}`.trim();

  const selectedItem = options.find((elem) => isOptionSelected(elem, value));
  const label = selectedItem !== undefined ? getOptionLabel(selectedItem) : placeholder;

  return (
    <div className={`${s.dropdown_wrapper} ${classes.wrapper}`.trim()} id={id}>
      <div className={dropdownClasses} onClick={toggleDropDown}>
        {label}
        <div className={iconClasses}>{expanderIcon}</div>
      </div>
      {isListVisible && <div className={s.dropdown_content}>{itemsElement}</div>}
    </div>
  );
}

export default DropDown;
