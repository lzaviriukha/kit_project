import s from "./DropDown.module.css";
import { useState } from "react";

function DropDown(props) {
  const {
    id,
    value,
    options,
    onChange,
    classes,
    disabled,
    getOptionLabel,
    isOptionSelected = false,
    isOptionDisabled = false,
    expanderIcon,
  } = props;

  const [btnIsActive, setBtnIsActive] = useState(false);

  const handleOnClickBtn = (evt) => {
    if (disabled) {
      evt.preventDefault();
      evt.stopPropagation();
    } else {
      setBtnIsActive(!btnIsActive);
    }
  };

  const item = options.map((option) => {
    const handleOnClick = (evt) => {
      if (isOptionDisabled(option, value)) {
        evt.preventDefault();
        evt.stopPropagation();
      } else {
        onChange(option.id, option);
      }
    };

    const itemClasses = `${s.dropdown_item} ${
      isOptionSelected(option, value) ? s.dropdown_item__active : ""
    } ${
      isOptionDisabled(option, value) ? s.dropdown_item__disabled : ""
    }`.trim();

    return (
      <div id={option.id} className={itemClasses} onClick={handleOnClick}>
        {option.name}
      </div>
    );
  });

  const dropdownBtnClasses = `${s.dropdown_btn} ${
    disabled ? s.dropdown__disabled : ""
  }`.trim();
  const iconClasses = `${s.dropdown_icon} ${
    btnIsActive ? s.dropdown_icon__rotate : ""
  }`.trim();

  return (
    <div className={s.dropdown} id={id}>
      <div className={dropdownBtnClasses} onClick={handleOnClickBtn}>
        Choose someone
        <div className={iconClasses}>{expanderIcon}</div>
      </div>
      {btnIsActive && <div className={s.dropdown_content}>{item}</div>}
    </div>
  );
}

export default DropDown;
