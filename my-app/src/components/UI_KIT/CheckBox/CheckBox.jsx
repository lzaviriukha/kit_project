import s from "./CheckBox.module.css";

function CheckBox(props) {
  const { id, value, onChange, disable, classes } = props;

  const disableClass = disable? s.disable : '';

  const wrapperClasses = `${s.checkbox} ${value ? s.checkbox__checked : ""} ${disableClass} ${classes}`;

  const handleOnClick = (evt) => {
    if (disable) {
      evt.preventDefault();
      evt.stopPropagation();
    } else {
      onChange(id)
    }
  };

  return (
    <div className={wrapperClasses} 
      onClick={handleOnClick}>
      <div className={`${value ? s.icon_wrapper : ""}`}></div>
    </div>
  );
}

export default CheckBox;
