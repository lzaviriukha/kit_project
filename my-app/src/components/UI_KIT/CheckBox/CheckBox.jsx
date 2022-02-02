import s from "./CheckBox.module.css";

function CheckBox(props) {
  const { id, value, onChange, disable, classes } = props;

  const disableClass = disable ? s.disable : "";

  const checkedClass = value ? s.checkbox__checked : "";

  const wrapperClasses = `${s.checkbox} ${checkedClass} ${disableClass} ${classes}`.trim();

  const iconClass = `${value ? s.icon_wrapper : ""}`;

  const handleOnClick = (evt) => {
    if (disable) {
      evt.preventDefault();
      evt.stopPropagation();
    } else {
      onChange(value);
    }
  };

  return (
    <div 
      id={id} 
      onClick={handleOnClick} 
      className={wrapperClasses}
    >
      <div className={iconClass}></div>
    </div>
  );
}

export default CheckBox;
